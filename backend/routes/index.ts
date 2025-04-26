import { Router } from "express";
import { itemsRouter } from "./itemsRouter";
import { reviewsRouter } from "./reviewsRouter";

export const indexRouter = Router();

indexRouter.use("/items/", itemsRouter);
indexRouter.use("/reviews/", reviewsRouter);
