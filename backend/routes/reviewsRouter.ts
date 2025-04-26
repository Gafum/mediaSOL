import { Request, Response, Router } from "express";

import { itemsList } from "../Data/items";

export const reviewsRouter = Router();

//Get all reviews
reviewsRouter.get("/", (req: Request, res: Response) => {
   res.status(200).json(itemsList);
});

//Get one review
reviewsRouter.get("/:id", (req: Request, res: Response) => {
   res.status(200).json(itemsList);
});

//Add review
reviewsRouter.post("/", (req: Request, res: Response) => {
   res.status(200).json(itemsList);
});

//Delete review
reviewsRouter.delete("/:id", (req: Request, res: Response) => {
   res.status(200).json(itemsList);
});
