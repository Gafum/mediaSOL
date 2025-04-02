import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction";
import { IGadget } from "../../MainTypes/Gadget";
import { TypeCartList } from "../../Store/CartStore";

export const sortOptionsKey = "cartSelectedSort";

export const sortOptions = [
   {
      id: "date",
      label: "Datum des Antrags",
      func: function (a: IGadget, b: IGadget) {
         return (this as unknown as TypeCartList)[a.id].date >
            (this as unknown as TypeCartList)[b.id].date
            ? 1
            : -1;
      },
   },
   {
      id: "price",
      label: "Preis",
      func: function (a: IGadget, b: IGadget) {
         return Number(
            calculatePriceWithAction({
               price: (this as unknown as TypeCartList)[a.id].amount * a.price,
               action: a.action,
            })
         ) >
            Number(
               calculatePriceWithAction({
                  price:
                     (this as unknown as TypeCartList)[b.id].amount * b.price,
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
