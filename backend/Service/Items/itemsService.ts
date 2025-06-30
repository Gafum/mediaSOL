import { createDB } from "./createDB";
import { createOne } from "./createOne";
import { getOne } from "./getOne";
import { getSome } from "./getSome";
import { getAll } from "./getAll";
import { deleteOne } from "./deleteOne";
import { getTypes } from "./Types/getTypes";

export class ItemsService {
   static createDB: typeof createDB = createDB;

   static createOne: typeof createOne = createOne;

   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
   static getAll: typeof getAll = getAll;

   static deleteOne: typeof deleteOne = deleteOne;

   // Types
   static getTypes: typeof getTypes = getTypes;
}
