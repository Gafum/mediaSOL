import { getOne } from "./getOne";
import { getSome } from "./getSome";
import { getAll } from "./getAll";
import { getTypes } from "./getTypes";
import { createBD } from "./createBD";

export class ItemsService {
   static getTypes: typeof getTypes = getTypes;
   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
   static getAll: typeof getAll = getAll;
   static createBD: typeof createBD = createBD;
}
