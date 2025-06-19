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
      if (!req.params) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const { id: elementId } = req.params;

      if (!elementId) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const response = await prisma.review.delete({
         where: {
            id: elementId,
         },
      });

      res.status(200).json(response);
   } catch (error) {
      if ((error as unknown as { code: string }).code === "P2025") {
         // Element is not found
         return next(ApiError.badRequest("Review is not found"));
      }
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
