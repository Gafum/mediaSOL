import { Router } from "express";
import { itemsRouter } from "./itemsRouter";
import { reviewsRouter } from "./reviewsRouter";
import { emailRouter } from "./emailRouter";
import { adminRouter } from "./adminRouter";

export const indexRouter = Router();

indexRouter.use("/items/", itemsRouter);
indexRouter.use("/reviews/", reviewsRouter);
indexRouter.use("/email/", emailRouter);
indexRouter.use("/admin/", adminRouter);
