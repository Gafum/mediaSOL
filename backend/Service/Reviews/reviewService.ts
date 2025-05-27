import { NextFunction, Request, Response } from "express";
import { IGadget, itemsList } from "../../Data/items";
import { ApiError } from "../../error/ApiError";

export class ReviewService {
   static async getSome(req: Request, res: Response, next: NextFunction) {
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
            // similaryGadgets = itemsList.filter((elem) => {
            //    return (
            //       elem.typeName == elementData.typeName && elem.id !== elementData.id
            //    );
            // });
         }
         res.status(200).json([elementData, [], similaryGadgets]);
      } catch (error) {
         console.log(error);
      }
   }
   static async addOne(req: Request, res: Response, next: NextFunction) {
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

   static async deleteOne(req: Request, res: Response, next: NextFunction) {
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
