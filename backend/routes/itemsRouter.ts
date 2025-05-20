import { Router } from "express";
import { ItemsService } from "../Service/Items/itemsService";

export const itemsRouter = Router();

// get all Items
itemsRouter.get("/", ItemsService.getAll);

// get all Types
itemsRouter.get("/types", ItemsService.getTypes);

// get one Item
itemsRouter.get("/:id", ItemsService.getOne);

// get some Items by ids
itemsRouter.post("/some", ItemsService.getSome);
