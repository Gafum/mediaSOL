import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
import { validateAndSanitizeReview } from "../../Validators/createReview";
const prisma = new PrismaClient();

export async function createOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      if (!req.body) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const newReview = validateAndSanitizeReview(req.body);

      const responseReview = await prisma.review.create({ data: newReview });

      res.status(200).json(responseReview);
   } catch (error) {
      if (error instanceof ApiError) {
         return next(error);
      }

      if ((error as unknown as { code: string }).code === "P2003") {
         // Foreign key constraint failed
         return next(ApiError.badRequest("Item is not found"));
      }
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
