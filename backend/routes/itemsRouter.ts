import { Router } from "express";
import { ItemsService } from "../Service/Items/itemsService";

export const itemsRouter = Router();

/*
      Types
======================================================>
*/
// get all Types
itemsRouter.get("/types", ItemsService.getTypes);

//Delete one type
itemsRouter.delete("/types/:id", ItemsService.deleteType);

// create One Type
itemsRouter.post("/types", ItemsService.createType);

// update Type Data
itemsRouter.put("/types/:id", ItemsService.updateType);

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

// update Items Data
itemsRouter.put("/:id", ItemsService.updateOne);

//Delete one item
itemsRouter.delete("/:id", ItemsService.deleteOne);
