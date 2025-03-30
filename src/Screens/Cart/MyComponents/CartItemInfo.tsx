import { twMerge } from "tailwind-merge";
import { useCartStore } from "../../../Store/CartStore";
import { ICartItemProps } from "./CartItem";
import { PriceShower } from "../../../Components/PriceShower/PriceShower";

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
      <div className="flex-1 flex flex-col mt-2 sm500:pb-2 md:pr-2 sm500:w-[78%] sm500:mt-0 sm500:ml-4">
         <h3 className="text-justify sm:text-left font-medium sm500:text-lg line-clamp-1 sm500:max-w-[90%] sm:max-w-none h-full">
            {name}
         </h3>
         <p className="text-xs sm:text-sm sm500:mt-0.5 sm:mt-2 max-w-full line-clamp-3">
            {description}
         </p>

         <div className="hidden sm:block flex-1"> {/* Padding */}</div>

         {/* How much items ======= */}
         <div className="mt-1 flex flex-col sm:flex-row-reverse items-start sm:items-center sm:gap-2 justify-start">
            {/* Price ======  */}
            <div className="sm:flex flex-col-reverse sm:items-end text-sm sm500:text-base sm:text-lg max-w-full max-h-[1.25rem] sm:max-h-none overflow-hidden text-clip">
               <PriceShower
                  price={itemAmount * price}
                  action={action}
                  realPriceClassName="text-xs sm:text-sm ml-2 sm:ml-0"
                  wbrClasses="sm:hidden"
               />
            </div>

            <div className="text-lg flex font-medium items-center relative w-20 sm500:w-24 ml-1.5 sm:mr-6 justify-center">
               {/* Plus Btn ===== */}
               <button
                  onClick={(event) => {
                     event.preventDefault();
                     event.stopPropagation();
                     decreaseItemAmount(id);
                  }}
                  className={twMerge(
                     "p-4 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-300 hover:opacity-40 cursor-pointer",
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
               <span className="w-14 text-center cursor-default">
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
                     "p-4 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transition-opacity duration-300 hover:opacity-40 cursor-pointer",
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
         </div>
      </div>
   );
};
