import { getOne } from "./getOne";
import { getSome } from "./getSome";
import { getAll } from "./getAll";

export class ItemsService {
   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
   static getAll: typeof getAll = getAll;
}
