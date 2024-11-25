export interface IGadget {
   readonly id: string
   name: string
   price: number
   description: string
   img: string
   type: "PC" | "Laptop" | "Handy" | "Musik" | "Kamera" | "Gaming Gärate"
   action?: number
}
