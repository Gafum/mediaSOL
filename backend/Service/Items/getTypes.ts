import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTypes(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const categories = await prisma.itemType.findMany({
         select: { name: true },
         orderBy: { name: "asc" },
      });

      const namesArray = categories.map((cat) => cat.name);

      res.status(200).json(namesArray);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
