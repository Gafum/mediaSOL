import { NextFunction, Request, Response } from "express";
import { IGadget, itemsList } from "../Data/items";
import { ApiError } from "../error/ApiError";

export class ItemsController {
   static async getAll(req: Request, res: Response, next: NextFunction) {
      try {
         res.status(200).json(itemsList);
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

         const elementData = itemsList.find(({ id }) => {
            return id == req.params.id;
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
            return next(ApiError.internal("There are not IDs"));
         }
         const { ids } = req.body;

         if (!Array.isArray(ids)) {
            return next(ApiError.internal("IDs must be an array"));
         }

         const items = itemsList.filter((item) => ids.includes(item.id));

         res.json(items);
      } catch (error) {
         console.log(error);
         return next(ApiError.internal("Error on server"));
      }
   }
}
