import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../error/ApiError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll(req: Request, res: Response, next: NextFunction) {
   try {
      const { searchText, page, limit, type } = req.query;

      const pageNum = Number(page) || 0;
      const limitNum = Number(limit) || 10;

      if (page !== undefined && limit !== undefined) {
         if (
            isNaN(pageNum) ||
            isNaN(limitNum) ||
            pageNum < 0 ||
            limitNum <= 0
         ) {
            return next(ApiError.badRequest("Invalid pagination parameters"));
         }
      }

      const where: any = {};

      if (type) {
         if (type === "action") {
            where.AND = [{ action: { not: 0 } }, { action: { not: null } }];
         } else {
            where.typeName = {
               equals: type.toString(),
               mode: "insensitive",
            };
         }
      }

      if (searchText) {
         where.OR = [
            {
               name: {
                  contains: searchText.toString(),
                  mode: "insensitive",
               },
            },
            {
               description: {
                  contains: searchText.toString(),
                  mode: "insensitive",
               },
            },
         ];
      }

      const items = await prisma.item.findMany({
         where,
         skip: pageNum * limitNum,
         take: limitNum,
      });

      res.status(200).json({
         list: items,
         total: items.length,
      });
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
