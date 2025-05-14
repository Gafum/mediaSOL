import { NextFunction, Request, Response } from "express";
import { itemsList } from "../../Data/items";
import { ApiError } from "../../error/ApiError";

export async function getSome(req: Request, res: Response, next: NextFunction) {
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
