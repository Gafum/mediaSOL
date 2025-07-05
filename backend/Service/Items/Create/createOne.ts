import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import { validateAndSanitizeItem } from "../../../Validators/createItem";

const prisma = new PrismaClient();

export async function createOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const itemData = validateAndSanitizeItem(req.body);

      if (itemData.action === 0) {
         delete (itemData as any).action;
      }

      const newItem = await prisma.item.create({
         data: itemData,
      });

      res.status(201).json(newItem);
   } catch (error: any) {
      if (error instanceof ApiError) {
         return next(error);
      }

      if ((error as unknown as { code: string }).code === "P2003") {
         // Foreign key constraint failed
         return next(ApiError.badRequest("Invalid typeName: type not found"));
      }
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
