import { NextFunction, Request, Response } from "express";
import { IGadget, itemsList } from "../Data/items";
import { ApiError } from "../error/ApiError";

export class ItemsController {
   static async getAll(req: Request, res: Response, next: NextFunction) {
      try {
         if (!!req.query && !!req?.query?.page && !!req?.query.limit) {
            //Pagination request
            const { page, limit } = req.query;
            if (
               !Boolean(Number(Number(page) + 1)) ||
               !Boolean(Number(Number(limit) + 1))
            ) {
               // if page or limit is a string type
               return next(ApiError.badRequest("Bad request"));
            }

            const firstElementOfPage = Number(page) * Number(limit);

            res.status(200).json(
               itemsList.slice(
                  firstElementOfPage,
                  firstElementOfPage + Number(limit)
               )
            );
         } else {
            res.status(200).json(itemsList);
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
