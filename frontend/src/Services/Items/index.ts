import { getOne } from "./getOne";
import { getSome } from "./getSome";

export class ItemsService {
   static getOne: typeof getOne = getOne;
   static getSome: typeof getSome = getSome;
}
