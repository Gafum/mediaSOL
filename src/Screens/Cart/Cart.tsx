import { screenList } from "../../Routing/RoutingList";
import { useCartStore } from "../../Store/CartStore";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CartItem } from "./MyComponents/CartItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { CatalogContent } from "../../DevData/CatalogContent";
import { useState } from "react";
import { CartDialog } from "./MyComponents/CartDialog";
import { calculateAllAmountInCart } from "../../Function/calculateAllAmount";

export interface IModalState {
   isOpen: boolean;
   headlineText: string;
   onOkeyClicK: (() => void) | undefined;
}

export const Cart = (): JSX.Element => {
   const cartList = useCartStore((state) => state.cartList);

   const cartListIDs = Object.keys(cartList);
   const localCartList = CatalogContent.filter(({ id }) =>
      Object.keys(cartList).includes(id)
   ).sort(({ id: aId }, { id: bId }) => {
      return cartList[aId].date > cartList[bId].date ? 1 : -1;
   });

   const [modalData, setModalData] = useState<IModalState>({
      isOpen: false,
      headlineText: "",
      onOkeyClicK: () => {},
   });

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
               <CartItem
                  {...elem}
                  itemAmount={cartList[elem.id].amount}
                  setModalData={setModalData}
               />
            ))}
         </div>

         <div className="w-full grid grid-cols-2 gap-3 mt-6">
            <CustomBtn
               onClick={() => {
                  setModalData({
                     isOpen: true,
                     headlineText: "Möchten Sie Ihren Korb wirklich ausleeren?",
                     onOkeyClicK: undefined,
                  });
               }}
               btnText={"Korb leeren"}
               color="primaryBlue"
               className="w-full bg-transparent border-2 border-primaryBlue border-solid text-primaryBlue"
            />

            <CustomBtn
               onClick={() => {
                  setModalData({
                     isOpen: true,
                     headlineText: `Möchten Sie diese ${calculateAllAmountInCart(cartList)} Produkte kaufen?`,
                     onOkeyClicK: undefined,
                  });
               }}
               btnText={"Einkaufen"}
               className="w-full"
            />
         </div>

         <CartDialog modalData={modalData} setModalData={setModalData} />
      </SectionWithHeadline>
   );
};
