import { screenList } from "../../Routing/RoutingList";
import { useCartStore } from "../../Store/CartStore";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { CartItem } from "./MyComponents/CartItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { CatalogContent } from "../../DevData/CatalogContent";
import { calculateAllAmountInCart } from "../../Function/calculateAllAmount";
import {
   StandartDialog,
   useStandartDialog,
} from "../../UI/CustomDialog/Standart/StandartDialog";
import { Settings } from "lucide-react";
import { CartSettings } from "./MyComponents/CartSettings";
import { useState } from "react";

export const sortOptions = [
   { id: "date", label: "Datum des Antrags" },
   { id: "price", label: "Preis" },
   { id: "name", label: "Name" },
];

export const Cart = (): JSX.Element => {
   const cartList = useCartStore((state) => state.cartList);
   const clearCartList = useCartStore((state) => state.clearCartList);
   const [selectedSort, setSelectedSort] = useState(sortOptions[0].id);

   const cartListIDs = Object.keys(cartList);
   const localCartList = CatalogContent.filter(({ id }) =>
      Object.keys(cartList).includes(id)
   ).sort(({ id: aId }, { id: bId }) => {
      return cartList[aId].date > cartList[bId].date ? 1 : -1;
   });

   const { modalData, setModalData } = useStandartDialog();

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
      <SectionWithHeadline
         title={screenList.cart.name}
         className="mt-0 relative"
      >
         <button
            title="Korbfilter"
            className="absolute top-1 right-2 hover:opacity-70 transition-opacity"
            onClick={() =>
               setModalData({
                  isOpen: true,
                  isAlert: true,
                  content: (
                     <CartSettings
                        selectedSort={() => selectedSort}
                        setSelectedSort={setSelectedSort}
                     />
                  ),
                  headlineText: "Korbfilter",
               })
            }
         >
            <Settings className="size-[19px] sm:size-[22px]" />
         </button>

         <div className="flex flex-col gap-4">
            {localCartList.map((elem) => (
               <CartItem
                  {...elem}
                  itemAmount={cartList[elem.id].amount}
                  setModalData={setModalData}
                  key={elem.id}
               />
            ))}
         </div>

         <div className="w-full grid grid-cols-2 gap-3 mt-6">
            <CustomBtn
               onClick={() => {
                  setModalData({
                     isOpen: true,
                     content: "Möchten Sie Ihren Korb wirklich ausleeren?",
                     onOkeyClick: clearCartList,
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
                     content: `Möchten Sie diese ${calculateAllAmountInCart(cartList)} Produkte kaufen?`,
                     onOkeyClick: clearCartList,
                  });
               }}
               btnText={"Einkaufen"}
               className="w-full"
            />
         </div>

         <StandartDialog modalData={modalData} setModalData={setModalData} />
      </SectionWithHeadline>
   );
};
