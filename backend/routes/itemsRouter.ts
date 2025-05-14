import { Router } from "express";
import { ItemsController } from "../controllers/Items/itemsController";

export const itemsRouter = Router();

// get all Items
itemsRouter.get("/", ItemsController.getAll);

// get all Types
itemsRouter.get("/types", ItemsController.getTypes);

// get one Item
itemsRouter.get("/:id", ItemsController.getOne);

// get some Items by ids
itemsRouter.post("/some", ItemsController.getSome);
