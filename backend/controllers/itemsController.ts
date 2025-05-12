import { NextFunction, Request, Response } from "express";
import { IGadget, itemsList } from "../Data/items";
import { ApiError } from "../error/ApiError";
import { filterItemsBySearch } from "../functions/filterItemsBySearch";

export class ItemsController {
   static async getAll(req: Request, res: Response, next: NextFunction) {
      try {
         let localItemsList = itemsList;
         const { searchText, page, limit, type } = req.query;

         if (type) {
            localItemsList = localItemsList.filter(
               (item) =>
                  item.type.toLowerCase() === type.toString().toLowerCase()
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
               return next(
                  ApiError.badRequest("Invalid pagination parameters")
               );
            }

            const start = pageNum * limitNum;
            const paginated = localItemsList.slice(start, start + limitNum);

            res.status(200).json({
               list: paginated,
               total: localItemsList.length,
            });
         } else {
            res.status(200).json({
               list: localItemsList,
               total: localItemsList.length,
            });
         }
      } catch (error) {
         console.log(error);
         return next(ApiError.internal("Error on server"));
      }
   }

   static async getOne(req: Request, res: Response, next: NextFunction) {
      try {
         if (!req?.params?.id) {
            return next(ApiError.badRequest("Not found"));
         }

         const { id: elementId } = req.params;

         const elementData = itemsList.find(({ id }) => {
            return id == elementId;
         });

         if (!elementData) {
            return next(ApiError.badRequest("Not found"));
         }

         let similaryGadgets: IGadget[] = [];
         if (req?.query?.withSimilary) {
            similaryGadgets = itemsList.filter((elem) => {
               return (
                  elem.type == elementData.type && elem.id !== elementData.id
               );
            });
         }
         res.status(200).json([elementData, [], similaryGadgets]);
      } catch (error) {
         console.log(error);
      }
   }

   static async getList(req: Request, res: Response, next: NextFunction) {
      try {
         if (!req.body || !req?.body?.ids) {
            return next(ApiError.badRequest("There are not IDs"));
         }

         const { ids } = req.body;

         if (!Array.isArray(ids)) {
            return next(ApiError.badRequest("IDs must be an array"));
         }

         const items = itemsList.filter((item) => ids.includes(item.id));

         res.status(200).json(items);
      } catch (error) {
         console.log(error);
         return next(ApiError.internal("Error on server"));
      }
   }
}
