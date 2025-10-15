import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../error/ApiError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTypes(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const categories = await prisma.itemType.findMany({
         orderBy: { name: "asc" },
      });

      res.status(200).json(categories);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
