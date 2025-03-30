import { Link } from "react-router-dom";
import { IGadget } from "../../../MainTypes/Gadget";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { ImageOff, Trash2 } from "lucide-react";
import { useCartStore } from "../../../Store/CartStore";
import { CartItemInfo } from "./CartItemInfo.tsx";
import { IModalState } from "../../../UI/CustomDialog/Standart/StandartDialog.tsx";

export interface ICartItemProps extends IGadget {
   itemAmount: number;
   setModalData: React.Dispatch<React.SetStateAction<IModalState>>;
}

export const CartItem = (props: ICartItemProps): JSX.Element => {
   const { id, action, name, img, setModalData } = props;

   const removeItem = useCartStore((state) => state.removeItem);

   return (
      <Link
         className="flex flex-col sm500:flex-row justify-center items-center sm500:items-start bg-primaryLightGrey rounded-md p-2 hover:shadow-lg duration-300 transition-shadow relative"
         to={import.meta.env.BASE_URL + "/item/" + id}
         key={id}
      >
         {/* Action ======== */}
         {action && (
            <span className="text-xs sm500:text-sm md:text-base w-1/6 sm500:w-1/4 max-w-[75px] min-w-[50px] sm500:min-w-[65px] top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
               - {action}%
            </span>
         )}

         {/* Image =========== */}
         <CustomImg
            imgSrc={img}
            className="bg-contain rounded-md min-w-[140px] w-1/2 sm500:w-1/5 max-w-[210px] mt-3 sm500:mt-0"
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
         <div className="self-start sm500:bg-primaryLightGrey sm500:p-1 sm:p-0 md:pl-1 sm500:pr-0 absolute right-2 top-2 sm:static sm:block">
            <button
               className="hover:opacity-60 transition-opacity duration-300 sm:mt-[3px]"
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
