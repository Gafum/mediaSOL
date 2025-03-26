import { Heart } from "lucide-react";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { IGadget } from "../../../MainTypes/Gadget";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { useFavoritesStore } from "../../../Store/FavoritesStore";
import { useCartStore } from "../../../Store/CartStore";
import { mainCurrency } from "../../../DevData/WhatCurrency";
import { twMerge } from "tailwind-merge";

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
      <div className="p-3 sm:p-4 rounded-md bg-primaryLightGrey flex flex-col shadow-sm">
         <h2 className="font-semibold sm:text-lg lg:text-xl">{name}</h2>

         {/* Price */}
         <div className="sm500:mt-1 flex flex-col sm500:gap-1 md:gap-2">
            {/* I don't use here the <PriceShower/>, because here I want to show action with procent */}
            {action && (
               <div>
                  {/* Action----- */}
                  <span className="text-sm sm:text-base rounded-md bg-primaryPink px-1 text-white text-center">
                     - {action}%
                  </span>

                  {/* Price with decoration */}
                  <span className="ml-3 line-through">
                     {price}
                     {mainCurrency}
                  </span>
               </div>
            )}
            <div className="price text-lg sm500:text-xl md:text-3xl font-semibold ">
               {calculatePriceWithAction({
                  price: price,
                  action: action,
               })}
               {mainCurrency}
            </div>
         </div>

         {/* Description */}
         <p className="text-xs sm:text-sm xl:text-base mt-1 sm:mt-3 text-[#777] text-justify">
            {description}
         </p>

         <div className="flex-1 min-h-3.5 md:min-h-5">{/* Custom Gap */}</div>

         {/* Buttons */}
         <CustomBtn
            btnText={
               cartListIDs.includes(id)
                  ? "Jetzt in Warenkorb"
                  : "In den Warenkorb"
            }
            onClick={() => toggleCartList(id)}
            className={twMerge(
               "w-full font-medium uppercase transition-all duration-300 border-2 border-solid border-transparent",
               cartListIDs.includes(id)
                  ? "bg-transparent border-primaryBlue text-primaryBlue"
                  : ""
            )}
            // color={}
         />

         <CustomBtn
            btnText={
               <div className="flex justify-center items-center text-sm sm500:text-base gap-2 font-medium text-white">
                  <Heart
                     fill={favoriteList.includes(id) ? "white" : "transparent"}
                     color="white"
                     strokeWidth="2.5px"
                     className="size-3.5 sm500:size-5 hover:drop-shadow-md transition-all duration-300"
                  />
                  {favoriteList.includes(id) ? "IN " : "ZU "}
                  Favoriten
               </div>
            }
            onClick={() => toggleFavoritesElement(id)}
            className="w-full font-medium uppercase bg-primaryPink mt-1.5 sm:mt-2"
         />
      </div>
   );
};
