import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import sanitizeHtml from "sanitize-html";
import { validateAndSanitizeItemType } from "../../../Validators/createType";

const prisma = new PrismaClient();

export async function createType(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const cleanData = validateAndSanitizeItemType(req.body);

      const newType = await prisma.itemType.create({
         data: cleanData,
      });

      res.status(201).json(newType);
   } catch (error) {
      if ((error as any)?.code === "P2002") {
         // P2002: Unique constraint failed
         return next(ApiError.badRequest("Type with this name already exists"));
      }

      console.error(error);
      return next(ApiError.internal("Failed to create item type"));
   }
}
