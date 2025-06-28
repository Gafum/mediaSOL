import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
import z from "zod";

const prisma = new PrismaClient();

const createItemSchema = z.object({
   name: z.string().trim().min(1, "Name is required").max(100),
   price: z.number().positive("Price must be positive"),
   description: z.string().trim().min(1).max(1000),
   img: z.string().trim().url("Invalid image URL"),
   typeName: z.string().trim().min(1),
   action: z.number().int().min(0).max(100).optional(),
});

export async function createOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const parsed = createItemSchema.safeParse(req.body);

      if (!parsed.success) {
         const messages = parsed.error.errors[0].message ?? "Validation failed";
         return next(ApiError.badRequest(messages));
      }

      const itemData = parsed.data;

      const newItem = await prisma.item.create({
         data: itemData,
      });

      res.status(201).json(newItem);
   } catch (error) {
      if ((error as any)?.code === "P2003") {
         return next(ApiError.badRequest("Invalid typeName: type not found"));
      }
      console.error(error);
      return next(ApiError.internal("Failed to create item"));
   }
}
