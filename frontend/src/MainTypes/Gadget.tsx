export interface IGadget {
   readonly id: string;
   name: string;
   price: number;
   description: string;
   typeName: string;
   img?: string;
   commentsList?: string[];
   action?: number;
}
