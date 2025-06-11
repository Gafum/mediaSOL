import { getLatest } from "./getLatest";
import { getOne } from "./getOne";

export class ReviewService {
   static getLatest: typeof getLatest = getLatest;
   static getOne: typeof getOne = getOne;
}
