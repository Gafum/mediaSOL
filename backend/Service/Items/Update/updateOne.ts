import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import { createItemSchema } from "../../../Validators/createItem";
import { sanitizeHtmlInput } from "../../../functions/sanitizeHtmlInput";

const prisma = new PrismaClient();

export async function updateOne(
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

   const itemId = req.params.id;

   if (!itemId || typeof itemId !== "string") {
      return next(ApiError.badRequest("Missing or invalid item ID"));
   }

   try {
      const updateItemSchema = createItemSchema.partial();

      const parsed = updateItemSchema.safeParse(req.body);

      if (!parsed.success) {
         const firstError =
            parsed.error.errors[0]?.message || "Validation error";
         return next(ApiError.badRequest(firstError));
      }

      const cleanData = sanitizeHtmlInput(parsed.data);

      if ("action" in cleanData && cleanData.action === 0) {
         cleanData.action = null;
      }

      if ((cleanData as any).id) {
         delete (cleanData as any).id;
      }

      const updatedItem = await prisma.item.update({
         where: { id: itemId },
         data: cleanData,
      });

      res.status(200).json(updatedItem);
   } catch (error: any) {
      if (error.code === "P2025") {
         return next(ApiError.notFound("Item not found"));
      }

      if (error.code === "P2003") {
         return next(
            ApiError.badRequest("Invalid typeName: related type not found")
         );
      }

      if (error instanceof ApiError) {
         return next(error);
      }

      console.error("Update error:", error);
      return next(ApiError.internal("Failed to update item"));
   }
}
