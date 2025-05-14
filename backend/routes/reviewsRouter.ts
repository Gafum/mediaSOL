import { Router } from "express";

import { ReviewController } from "../controllers/Reviews/reviewController";

export const reviewsRouter = Router();

// get some reviews by ids
reviewsRouter.post("/list", ReviewController.getSome);

//Get one review
reviewsRouter.get("/:id", ReviewController.getOne);

//Add review
reviewsRouter.post("/", ReviewController.addOne);

//Delete review
reviewsRouter.delete("/", ReviewController.deleteOne);
