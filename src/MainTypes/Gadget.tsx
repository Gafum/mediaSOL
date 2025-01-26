export interface IGadget {
   readonly id: string;
   name: string;
   price: number;
   description: string;
   type: "PC" | "Laptop" | "Handy" | "Musik" | "Kamera" | "Gaming Gärate";
   img?: string;
   commentsList?: string[];
   action?: number;
}
