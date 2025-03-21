import { Link } from "react-router-dom";
import { IGadget } from "../../../MainTypes/Gadget";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { ImageOff, Trash2 } from "lucide-react";
import { useCartStore } from "../../../Store/CartStore";
import { CartItemInfo } from "./CartItemInfo.tsx";
import { IModalState } from "../Cart.tsx";

export interface ICartItemProps extends IGadget {
   itemAmount: number;
   setModalData: React.Dispatch<React.SetStateAction<IModalState>>;
}

export const CartItem = (props: ICartItemProps): JSX.Element => {
   const { id, action, img, setModalData } = props;

   const removeItem = useCartStore((state) => state.removeItem);

   return (
      <Link
         className="flex bg-primaryLightGrey rounded-md p-2 hover:shadow-lg duration-300 transition-shadow relative"
         to={import.meta.env.BASE_URL + "/item/" + id}
         key={id}
      >
         {/* Action ======== */}
         {action && (
            <span className="text-base w-1/4 max-w-[75px] min-w-[65px] top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
               - {action}%
            </span>
         )}

         {/* Image =========== */}
         <CustomImg
            imgSrc={img}
            className="bg-contain rounded-md min-w-[140px] w-1/5 max-w-[210px]"
            NotFoundComponent={
               <ImageOff
                  width={100}
                  height={100}
                  strokeWidth={1.4}
                  color="#222"
               />
            }
         />

         {/* INFO: Header, Description, Prise ========= */}
         <CartItemInfo {...props} />

         {/* Delete Item Btn ========= */}
         <div className="self-start pl-1">
            <button
               className="hover:opacity-60 transition-opacity duration-300 mt-[3px]"
               title="Dieses Produkt löschen"
               onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setModalData({
                     isOpen: true,
                     onOkeyClicK: () => {
                        removeItem(id);
                     },
                     headlineText: name + " aus dem Einkaufswagen löschen?",
                  });
               }}
            >
               <Trash2 width={20} />
            </button>
         </div>
      </Link>
   );
};
