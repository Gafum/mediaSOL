import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction";
import { IGadget } from "../../MainTypes/Gadget";
import { TypeCartList } from "../../Store/CartStore";

export const sortOptionsKey = "cartSelectedSort";

function getElemetsInSortOption(thisArg: unknown, a: IGadget, b: IGadget) {
   return {
      elemA: (thisArg as TypeCartList)[a.id],
      elemB: (thisArg as TypeCartList)[b.id],
   };
}

export const sortOptions = [
   {
      id: "date",
      label: "Datum des Antrags",
      func: function (a: IGadget, b: IGadget) {
         const { elemA, elemB } = getElemetsInSortOption(this, a, b);
         if (!Boolean(elemA) || !Boolean(elemB)) {
            return 0;
         }
         return elemA.date > elemB.date ? 1 : -1;
      },
   },
   {
      id: "price",
      label: "Preis",
      func: function (a: IGadget, b: IGadget) {
         const { elemA, elemB } = getElemetsInSortOption(this, a, b);
         if (!Boolean(elemA) || !Boolean(elemB) || !Boolean(a) || !Boolean(b)) {
            return 0;
         }
         return Number(
            calculatePriceWithAction({
               price: elemA.amount * a.price,
               action: a.action,
            })
         ) >
            Number(
               calculatePriceWithAction({
                  price: elemB.amount * b.price,
                  action: b.action,
               })
            )
            ? -1
            : 1;
      },
   },
   {
      id: "name",
      label: "Name",
      func: function (a: IGadget, b: IGadget) {
         return a.name > b.name ? 1 : -1;
      },
   },
];
