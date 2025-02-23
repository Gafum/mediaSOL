import { Heart } from "lucide-react";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { IGadget } from "../../../MainTypes/Gadget";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { useFavoritesStore } from "../../../Store/FavoritesStore";
import { useCartStore } from "../../../Store/CartStore";

export const ItemDescription = ({
   id,
   name,
   action,
   price,
   description,
}: IGadget): JSX.Element => {
   // global states
   const favoriteList = useFavoritesStore((state) => state.favoritesList);
   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const cartListIDs = Object.keys(useCartStore((state) => state.cartList));
   const toggleCartList = useCartStore((state) => state.toggleCartList);

   return (
      <>
         <h2 className="font-semibold text-xl">{name}</h2>

         {/* Price */}
         <div className="mt-1">
            {action && (
               <div>
                  <span className="text-base rounded-md bg-primaryPink px-1 text-white text-center">
                     - {action}%
                  </span>
                  <span className="ml-3 line-through">${price}</span>
               </div>
            )}
            <div className="price text-3xl font-semibold mt-2">
               $
               {calculatePriceWithAction({
                  price: price,
                  action: action,
               })}
            </div>
         </div>

         {/* Description */}
         <p className="mt-3 text-[#777] text-justify">{description}</p>

         <div className="flex-1 min-h-5">{/* Custom Gap */}</div>

         {/* Buttons */}
         <CustomBtn
            btnText={
               cartListIDs.includes(id)
                  ? "Jetzt in Warenkorb"
                  : "In den Warenkorb"
            }
            onClick={() => toggleCartList(id)}
            className="w-full font-medium uppercase"
         />
         <CustomBtn
            btnText={
               <div className="flex justify-center items-center gap-2 font-medium text-white">
                  <Heart
                     size={18}
                     fill={favoriteList.includes(id) ? "white" : "transparent"}
                     color="white"
                     strokeWidth="2.5px"
                     className="hover:drop-shadow-md transition-all duration-300"
                  />
                  {favoriteList.includes(id) ? "In " : "Zu "}
                  Favoriten
               </div>
            }
            onClick={() => toggleFavoritesElement(id)}
            className="w-full font-medium uppercase bg-primaryPink mt-2"
         />
      </>
   );
};
