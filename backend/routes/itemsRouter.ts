import { Router } from "express";
import { ItemsService } from "../Service/Items/itemsService";
import { contactLimiter } from "../middleware/ContactLimiter";

export const itemsRouter = Router();

/*
      ALL DATA 
======================================================>
*/
// create one item
itemsRouter.post("/createDB", contactLimiter, ItemsService.createDB);

/*
      Types
======================================================>
*/
// get all Types
itemsRouter.get("/types", ItemsService.getTypes);

/*
      Items
======================================================>
*/
// get all Items
itemsRouter.get("/", ItemsService.getAll);

// get one Item
itemsRouter.get("/:id", ItemsService.getOne);

// get some Items by ids
itemsRouter.post("/some", ItemsService.getSome);

// create Item
itemsRouter.post("/", ItemsService.createOne);

//Delete review
itemsRouter.delete("/:id", ItemsService.deleteOne);
