import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
import { IReviews } from "../../Data/ReviewsList";
import z from "zod";
const prisma = new PrismaClient();

const createSchema = z.object({
   stars: z.number().int().min(0).max(4),
   userName: z.string().max(50),
   text: z.string().max(250),
   itemId: z.string(),
});

export async function createOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      if (!req.body) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const { userName, text, stars, itemId } = req.body;

      if (!userName) {
         return next(ApiError.badRequest("Username is not found"));
      }

      if (!text) {
         return next(ApiError.badRequest("Write the message"));
      }

      if (!stars || isNaN(stars)) {
         return next(ApiError.badRequest("Give the feadbeak"));
      }

      if (!itemId) {
         return next(ApiError.badRequest("Bad Request"));
      }

      //Special operators
      if (stars > 4 || stars < 0) {
         // Not the right items length (min 0, 1, 2, 3, 4 max)
         return next(ApiError.badRequest("Give the right feadbeak"));
      }
      if (userName.trim().length > 50) {
         return next(ApiError.badRequest("Username is too long"));
      }
      if (text.trim().length > 250) {
         return next(ApiError.badRequest("Message is too long"));
      }

      const newReview: Omit<IReviews, "id"> = {
         userName: userName.toString().trim(),
         text: text.toString().trim(),
         stars: Number(stars),
         itemId: itemId,
      };

      const parsed = createSchema.safeParse(newReview);

      if (!parsed.success) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const responseReview = await prisma.review.create({ data: newReview });

      res.status(200).json(responseReview);
   } catch (error) {
      if ((error as unknown as { code: string }).code === "P2003") {
         // Foreign key constraint failed
         return next(ApiError.badRequest("Item is not found"));
      }
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
