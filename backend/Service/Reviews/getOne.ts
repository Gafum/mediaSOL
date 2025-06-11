import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { PrismaClient } from "@prisma/client";
import { IGadget } from "../../Data/items";

const prisma = new PrismaClient();

export async function getOne(req: Request, res: Response, next: NextFunction) {
   try {
      const { id: elementId } = req.params;

      if (!elementId) {
         return next(ApiError.badRequest("Bad Request"));
      }

      const elementData = await prisma.review.findUnique({
         where: { id: elementId },
      });

      if (!elementData) {
         return next(ApiError.badRequest("Not found"));
      }

      res.status(200).json(elementData);
   } catch (error) {
      console.log(error);
   }
}
