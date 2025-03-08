import { twMerge } from "tailwind-merge";
import { useCartStore } from "../../../Store/CartStore";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { mainCurrency } from "../../../DevData/WhatCurrency";
import { ICartItemProps } from "./CartItem";

export const CartItemInfo = ({
   id,
   name,
   price,
   description,
   action,
   itemAmount,
}: Omit<ICartItemProps, "setModalData">): JSX.Element => {
   const increaseItemAmount = useCartStore((state) => state.increaseItemAmount);
   const decreaseItemAmount = useCartStore((state) => state.decreaseItemAmount);

   return (
      <div className="flex-1 flex flex-col pb-2 pr-2 w-[78%] ml-4">
         <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
         <p className="text-sm line-clamp-3 mt-2 max-w-full">{description}</p>

         <div className="flex-1"> {/* Padding */}</div>

         {/* How much items ======= */}
         <div className="mt-1 flex items-center gap-2 justify-end ">
            <div className="text-lg flex font-medium items-center">
               {/* Plus Btn ===== */}
               <button
                  onClick={(event) => {
                     event.preventDefault();
                     event.stopPropagation();
                     decreaseItemAmount(id);
                  }}
                  className={twMerge(
                     "p-4 relative left-3 transition-opacity duration-300 hover:opacity-40 cursor-pointer",
                     !(itemAmount - 1) && "opacity-40 cursor-not-allowed"
                  )}
                  disabled={!(itemAmount - 1)}
               >
                  <svg
                     fill="#000"
                     height="12px"
                     width="12px"
                     id="Capa_1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 52.161 52.161"
                  >
                     <path
                        d="M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875
   h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z"
                     />
                  </svg>
               </button>

               {/* Amount ==== */}
               <span className="w-[50px] text-center cursor-default">
                  {itemAmount}
               </span>

               {/* Minus Btn ===== */}
               <button
                  onClick={(event) => {
                     event.preventDefault();
                     event.stopPropagation();
                     increaseItemAmount(id);
                  }}
                  className={twMerge(
                     "p-4 relative right-3 transition-opacity duration-300 hover:opacity-40 cursor-pointer",
                     itemAmount - 1 >= 998 && "opacity-40 cursor-not-allowed"
                  )}
                  disabled={itemAmount - 1 >= 998}
               >
                  <svg
                     fill="#000"
                     height="12px"
                     width="12px"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 45.402 45.402"
                  >
                     <path
                        d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                          c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                          c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                          c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                     />
                  </svg>
               </button>
            </div>

            {/* Price ====== */}
            <div className="flex flex-col items-end">
               {action && (
                  <div className="text-sm line-through">
                     {(itemAmount * price).toFixed(2)}
                     {mainCurrency}
                  </div>
               )}

               <div
                  className="price text-lg font-semibold whitespace-nowrap"
                  title={
                     itemAmount.toString() +
                     " * " +
                     calculatePriceWithAction({
                        price,
                        action,
                     })
                  }
               >
                  {(
                     itemAmount *
                     Number(
                        calculatePriceWithAction({
                           price,
                           action,
                        })
                     )
                  ).toFixed(2)}
                  {mainCurrency}
               </div>
            </div>
         </div>
      </div>
   );
};
