import { IReviews } from "./Reviews";

export interface IGadget {
   readonly id: string;
   name: string;
   price: number;
   description: string;
   typeName: string;
   img?: string;
   commentsList?: IReviews[];
   action?: number;
}
