import { Router } from "express";
import { itemsRouter } from "./itemsRouter";
import { reviewsRouter } from "./reviewsRouter";
import { emailRouter } from "./emailRouter";
import { adminRouter } from "./adminRouter";

export const indexRouter = Router();

export const routersPath = {
   items: "/items/",
   reviews: "/reviews/",
   emails: "/email/",
   admin: "/admin/",
};

indexRouter.use(routersPath.items, itemsRouter);
indexRouter.use(routersPath.reviews, reviewsRouter);
indexRouter.use(routersPath.emails, emailRouter);
indexRouter.use(routersPath.admin, adminRouter);
