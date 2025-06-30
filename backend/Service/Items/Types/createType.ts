import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import z from "zod";

const prisma = new PrismaClient();

const createItemTypeSchema = z.object({
   name: z
      .string()
      .trim()
      .min(1, "Type name is required")
      .max(50, "Type name is too long"),
});

export async function createOneItemType(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const parsed = createItemTypeSchema.safeParse(req.body);

      if (!parsed.success) {
         const messages = parsed.error.errors[0].message ?? "Validation failed";
         return next(ApiError.badRequest(messages));
      }

      const { name } = parsed.data;

      const newType = await prisma.itemType.create({
         data: { name },
      });

      return res.status(201).json(newType);
   } catch (error) {
      if ((error as any)?.code === "P2002") {
         // P2002: Unique constraint failed
         return next(ApiError.badRequest("Type with this name already exists"));
      }

      console.error(error);
      return next(ApiError.internal("Failed to create item type"));
   }
}
