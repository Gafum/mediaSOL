import { Router } from "express";

import { ReviewService } from "../Service/Reviews/reviewService";
import { contactLimiter } from "../middleware/ContactLimiter";

export const reviewsRouter = Router();

// get latest review
reviewsRouter.get("/", ReviewService.getLatest);

//Get one review
reviewsRouter.get("/:id", ReviewService.getOne);

//Add review
reviewsRouter.post("/", contactLimiter, ReviewService.createOne);

//Delete review
reviewsRouter.delete("/:id", ReviewService.deleteOne);
