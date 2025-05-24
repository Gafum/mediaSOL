import { getOne } from "./getOne";
import { getSome } from "./getSome";
import { getAll } from "./getAll";
import { getTypes } from "./getTypes";
import { createOne } from "./createOne";

export class ItemsService {
   static getTypes: typeof getTypes = getTypes;
   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
   static getAll: typeof getAll = getAll;
   static createOne: typeof createOne = createOne;
}
