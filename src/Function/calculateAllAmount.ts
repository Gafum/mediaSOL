import { TypeCartList } from "../Store/CartStore";

export function calculateAllAmountInCart(object: TypeCartList): number {
   let res: number = 0;
   for (let elem in object) {
      res += object[elem].amount;
   }

   return res;
}
