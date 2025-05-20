import { NextFunction, Request, Response } from "express";
import { itemsList } from "../../Data/items";
import { ApiError } from "../../error/ApiError";
import { filterItemsBySearch } from "../../functions/filterItemsBySearch";

export async function getAll(req: Request, res: Response, next: NextFunction) {
   try {
      let localItemsList = itemsList;
      const { searchText, page, limit, type } = req.query;

      if (type) {
         localItemsList = localItemsList.filter(
            (item) => item.type.toLowerCase() === type.toString().toLowerCase()
         );
      }

      if (searchText) {
         localItemsList = filterItemsBySearch(
            localItemsList,
            searchText.toString()
         );
      }

      if (page !== undefined && limit !== undefined) {
         const pageNum = Number(page);
         const limitNum = Number(limit);

         if (
            isNaN(pageNum) ||
            isNaN(limitNum) ||
            pageNum < 0 ||
            limitNum <= 0
         ) {
            return next(ApiError.badRequest("Invalid pagination parameters"));
         }

         const start = pageNum * limitNum;
         localItemsList = localItemsList.slice(start, start + limitNum);
      }

      res.status(200).json({
         list: localItemsList,
         total: localItemsList.length,
      });
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
