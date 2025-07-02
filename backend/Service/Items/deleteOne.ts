import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
const prisma = new PrismaClient();

export async function deleteOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      if (!req.params) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const { id: elementId } = req.params;

      if (!elementId) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const response = await prisma.item.delete({
         where: {
            id: elementId,
         },
      });

      res.status(200).json(response);
   } catch (error) {
      if ((error as unknown as { code: string }).code === "P2025") {
         // Element is not found
         return next(ApiError.badRequest("Item is not found"));
      }
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
