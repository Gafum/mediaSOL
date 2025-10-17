import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import { createTypeSchema } from "../../../Validators/createType";
import { sanitizeHtmlInput } from "../../../functions/sanitizeHtmlInput";
import { IItemType } from "../../../Data/ItemsTypesArray";

const prisma = new PrismaClient();

export async function updateType(
   req: Request,
   res: Response,
   next: NextFunction
) {
   const adminSecret = req.headers["x-admin-secret"];

   if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
      return next(ApiError.forbidden("Access denied"));
   }

   if (!req.params) {
      return next(ApiError.badRequest("Bad Request"));
   }

   const typeId = req.params.id;

   if (!typeId || typeof typeId !== "string") {
      return next(ApiError.badRequest("Missing or invalid type ID"));
   }

   try {
      const updateItemSchema = createTypeSchema.partial();

      const parsed = updateItemSchema.safeParse(req.body);

      if (!parsed.success) {
         const firstError =
            parsed.error.errors[0]?.message || "Validation error";
         return next(ApiError.badRequest(firstError));
      }

      const cleanData: Partial<IItemType> = sanitizeHtmlInput(parsed.data);

      const updatedType = await prisma.itemType.update({
         where: { id: typeId },
         data: cleanData,
      });

      res.status(200).json(updatedType);
   } catch (error: any) {
      if (error.code === "P2025") {
         return next(ApiError.notFound("Type not found"));
      }

      if (error instanceof ApiError) {
         return next(error);
      }

      console.error("Update error:", error);
      return next(ApiError.internal("Failed to update type"));
   }
}
