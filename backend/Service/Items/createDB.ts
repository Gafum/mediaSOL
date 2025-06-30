import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { PrismaClient } from "@prisma/client";
import { itemsList } from "../../Data/items";
import { reviewsList } from "../../Data/ReviewsList";
import { ItemsTypesArray } from "../../Data/ItemsTypesArray";

const prisma = new PrismaClient();

export async function createDB(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const itemType = await prisma.itemType.createMany({
         data: [
            ...ItemsTypesArray.map((typeName) => {
               return { name: typeName };
            }),
         ],
      });

      const items = await prisma.item.createMany({
         data: itemsList,
      });

      const review = await prisma.review.createMany({
         data: reviewsList,
      });

      res.status(200).json({
         message: "Data was created",
         data: ["review:", review, "Items:", items, "ItmesTypes:", itemType],
      });
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
