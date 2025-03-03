import { screenList } from "../../Routing/RoutingList";
import { useCartStore } from "../../Store/CartStore";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CartItem } from "./MyComponents/CartItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { calculateAllAmount } from "../../Function/calculateAllAmount";
import { CatalogContent } from "../../DevData/CatalogContent";

export const Cart = (): JSX.Element => {
   const cartList = useCartStore((state) => state.cartList);
   const cartListIDs = Object.keys(cartList);

   const clearCartList = useCartStore((state) => state.clearCartList);

   const localCartList = CatalogContent.filter(({ id }) =>
      Object.keys(cartList).includes(id)
   );

   if (!cartListIDs || !cartListIDs?.length) {
      return (
         <SimpleError
            title="Korb ist leer"
            btnText="Etwas kaufen"
            navigateTo={screenList.catalog.path}
         />
      );
   }

   return (
      <SectionWithHeadline title={screenList.cart.name} className="mt-0">
         <div className="flex flex-col gap-4">
            {localCartList.map((elem) => (
               <CartItem {...elem} itemAmount={cartList[elem.id]} />
            ))}
         </div>

         <div className="w-full grid grid-cols-2 gap-3 mt-6">
            <CustomBtn
               onClick={() => {
                  if (confirm("Möchten Sie Ihren Korb wirklich ausleeren?")) {
                     clearCartList();
                  }
               }}
               btnText={"Korb leeren"}
               color="primaryBlue"
               className="w-full bg-transparent border-2 border-primaryBlue border-solid text-primaryBlue"
            />

            <CustomBtn
               onClick={() => {
                  if (
                     confirm(
                        `Möchten Sie diese ${calculateAllAmount(cartList)} Produkte kaufen?`
                     )
                  ) {
                     clearCartList();
                  }
               }}
               btnText={"Einkaufen"}
               className="w-full"
            />
         </div>
      </SectionWithHeadline>
   );
};
