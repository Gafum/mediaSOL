import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
const prisma = new PrismaClient();

export async function getLatest(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const latestReviews = await prisma.review.findMany({
         orderBy: {
            createdAt: "desc",
         },
         take: 6,
      });

      res.status(200).json(latestReviews);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
