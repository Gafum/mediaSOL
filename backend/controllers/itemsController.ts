import { Request, Response } from "express";
import { itemsList } from "../Data/items";

export class ItemsController {
   static async getAll(req: Request, res: Response) {
      res.status(200).json(itemsList);
   }

   static async getOne(req: Request, res: Response) {
      if (!req?.params?.id) {
         res.status(400).json({ message: "bad request" });
      }

      const elemenetData = itemsList.find(({ id }) => {
         return id == req.params.id;
      });

      if (!elemenetData) {
         res.status(404).json({ message: "Not Found" });
      }

      res.status(200).json([elemenetData]);
   }
}
