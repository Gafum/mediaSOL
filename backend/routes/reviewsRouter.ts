import { Router } from "express";

import { ReviewService } from "../Service/Reviews/reviewService";

export const reviewsRouter = Router();

// get some reviews by ids
reviewsRouter.get("/latest", ReviewService.getLatest);

// // get some reviews by ids
// reviewsRouter.post("/list", ReviewService.getSome);

// //Get one review
// reviewsRouter.get("/:id", ReviewService.getOne);

// //Add review
// reviewsRouter.post("/", ReviewService.addOne);

// //Delete review
// reviewsRouter.delete("/", ReviewService.deleteOne);
