import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { IReviews } from "../../Data/ReviewsList";
import { createReviewSchema } from "../../Validators/createReview";
import { ApiError } from "../../error/ApiError";
import { sanitizeHtmlInput } from "../../functions/sanitizeHtmlInput";

const prisma = new PrismaClient();

export async function updateOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   // Checking access
   const adminSecret = req.headers["x-admin-secret"];

   if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
      return next(ApiError.forbidden("Access denied"));
   }

   // Getting Review ID
   if (!req.params) {
      return next(ApiError.badRequest("Bad Request"));
   }

   const reviewId = req.params.id;

   if (!reviewId || typeof reviewId !== "string") {
      return next(ApiError.badRequest("Missing or invalid item ID"));
   }

   try {
      //Parsing data
      const updateReviewSchema = createReviewSchema.partial(); // All is optionall because it is not important to have all

      const parsed = updateReviewSchema.safeParse(req.body);

      if (!parsed.success) {
         const firstError =
            parsed.error.errors[0]?.message || "Validation error";
         return next(ApiError.badRequest(firstError));
      }

      const cleanData: Partial<IReviews> = sanitizeHtmlInput(parsed.data);

      const updatedReview = await prisma.review.update({
         where: { id: reviewId },
         data: cleanData,
      });

      res.status(200).json(updatedReview);
   } catch (error: any) {
      if (error.code === "P2025") {
         return next(ApiError.notFound("Review is not found"));
      }

      if (error instanceof ApiError) {
         return next(error);
      }

      console.error("Update error:", error);
      return next(ApiError.internal("Failed to update item"));
   }
}
