import { getLatest } from "./getLatest";
import { getOne } from "./getOne";
import { createOne } from "./createOne";
import { deleteOne } from "./deleteOne";

export class ReviewService {
   static getLatest: typeof getLatest = getLatest;
   static getOne: typeof getOne = getOne;
   static createOne: typeof createOne = createOne;
   static deleteOne: typeof deleteOne = deleteOne;
}
