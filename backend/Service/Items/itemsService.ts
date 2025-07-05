import { createDB } from "./Create/createDB";
import { createOne } from "./Create/createOne";
import { getOne } from "./Get/getOne";
import { getSome } from "./Get/getSome";
import { getAll } from "./Get/getAll";
import { updateOne } from "./Update/updateOne";
import { deleteOne } from "./Delete/deleteOne";
import { getTypes } from "./Types/getTypes";

export class ItemsService {
   static createDB: typeof createDB = createDB;

   static createOne: typeof createOne = createOne;

   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
   static getAll: typeof getAll = getAll;

   static deleteOne: typeof deleteOne = deleteOne;

   static updateOne: typeof updateOne = updateOne;

   // Types
   static getTypes: typeof getTypes = getTypes;
}
