import { NextFunction, Request, Response } from "express";
import { IGadget, itemsList } from "../../Data/items";
import { ApiError } from "../../error/ApiError";

export async function getOne(req: Request, res: Response, next: NextFunction) {
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
            return elem.type == elementData.type && elem.id !== elementData.id;
         });
      }
      res.status(200).json([elementData, [], similaryGadgets]);
   } catch (error) {
      console.log(error);
   }
}
