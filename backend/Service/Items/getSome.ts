import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSome(req: Request, res: Response, next: NextFunction) {
   try {
      const { ids } = req.body;

      if (!ids || !Array.isArray(ids)) {
         return next(ApiError.badRequest("IDs must be an array"));
      }

      const items = await prisma.item.findMany({
         where: {
            id: {
               in: ids,
            },
         },
      });

      res.status(200).json(items);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
