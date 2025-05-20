import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { ItemsTypesArray } from "../../Data/ItemsTypesArray";

export async function getTypes(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      res.status(200).json(ItemsTypesArray);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
