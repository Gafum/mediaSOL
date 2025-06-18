import { getLatest } from "./getLatest";
import { getOne } from "./getOne";
import { createOne } from "./createOne";

export class ReviewService {
   static getLatest: typeof getLatest = getLatest;
   static getOne: typeof getOne = getOne;
   static createOne: typeof createOne = createOne;
}
