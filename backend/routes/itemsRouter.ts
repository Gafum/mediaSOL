import { Router } from "express";
import { ItemsController } from "../controllers/itemsController";

export const itemsRouter = Router();

// get all Items
itemsRouter.get("/", ItemsController.getAll);

// get one Item
itemsRouter.get("/:id", ItemsController.getOne);
