import { IReviews } from "./Reviews";

export interface IGadget {
   readonly id: string;
   name: string;
   price: number;
   description: string;
   idItemType: string;
   type?: { name: string; id: string };
   img?: string;
   commentsList?: IReviews[];
   action?: number;
}
