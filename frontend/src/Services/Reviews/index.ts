import { getLatest } from "./getLatest";
import { createOne } from "./createOne";

export class ReviewsService {
   static getLatest: typeof getLatest = getLatest;
   static createOne: typeof createOne = createOne;
}
