import { Request, Response, Router } from "express";

import { itemsList } from "../Data/items";

export const itemsRouter = Router();

// get all Items
itemsRouter.get("/", (req: Request, res: Response) => {
   res.status(200).json(itemsList);
});

// get one Item
itemsRouter.get("/:id", (req: Request, res: Response) => {
   if (!req?.params?.id) {
      res.status(400).json({ message: "bad request" });
   }
   res.status(200).json({ id: req.params.id });
});
