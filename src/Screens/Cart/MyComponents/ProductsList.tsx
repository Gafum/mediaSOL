import { ImageOff, Trash2 } from "lucide-react";
import { SectionWithHeadline } from "../../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../../DevData/CatalogContent";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { screenList } from "../../../Routing/RoutingList";
import { useCartStore } from "../../../Store/CartStore";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { Link } from "react-router-dom";
import { mainCurrency } from "../../../DevData/WhatCurrency";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { calculateAllAmount } from "../../../Function/calculateAllAmount";

export const ProductsList = (): JSX.Element => {
   const cartList = useCartStore((state) => state.cartList);
   const removeItem = useCartStore((state) => state.removeItem);
   const clearCartList = useCartStore((state) => state.clearCartList);
   const increaseItemAmount = useCartStore((state) => state.increaseItemAmount);
   const decreaseItemAmount = useCartStore((state) => state.decreaseItemAmount);

   const localCartList = CatalogContent.filter(({ id }) =>
      Object.keys(cartList).includes(id)
   );

   return (
      <SectionWithHeadline title={screenList.cart.name} className="mt-0">
         <div className="flex flex-col gap-4">
            {localCartList.map((elem) => (
               <Link
                  className="flex bg-primaryLightGrey rounded-md p-2 hover:shadow-lg duration-300 transition-shadow relative"
                  to={"/item/" + elem.id}
                  key={elem.id}
               >
                  {elem.action && (
                     <span className="text-base w-1/4 max-w-[75px] min-w-[65px] top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
                        - {elem.action}%
                     </span>
                  )}
                  {/* Image =========== */}
                  <CustomImg
                     imgSrc={elem.img}
                     className="bg-contain rounded-md w-1/5 min-w-[140px]"
                     NotFoundComponent={
                        <ImageOff
                           width={100}
                           height={100}
                           strokeWidth={1.4}
                           color="#222"
                        />
                     }
                  />

                  {/* Description ========= */}
                  <div className="flex flex-col pb-2 pr-2 w-[78%] ml-4">
                     <h3 className="font-medium text-lg overflow-clip text-ellipsis whitespace-nowrap w-11/12">
                        {elem.name}
                     </h3>
                     <p className="text-sm line-clamp-3 mt-2 h-[4rem] max-w-full">
                        {elem.description}
                     </p>
                     <div className="mt-1 flex items-center gap-2 justify-end ">
                        {/* How much items === */}
                        <div className="text-lg flex font-medium items-center">
                           <button
                              onClick={(event) => {
                                 event.preventDefault();
                                 event.stopPropagation();
                                 decreaseItemAmount(elem.id);
                              }}
                              className="p-4 relative left-3"
                              disabled={!(cartList[elem.id] - 1)}
                           >
                              <svg
                                 fill={
                                    !(cartList[elem.id] - 1)
                                       ? "#999"
                                       : "#000000"
                                 }
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
                           <span className="w-[50px] text-center">
                              {cartList[elem.id]}
                           </span>
                           <button
                              onClick={(event) => {
                                 event.preventDefault();
                                 event.stopPropagation();
                                 increaseItemAmount(elem.id);
                              }}
                              className="p-4 relative right-3"
                              disabled={cartList[elem.id] - 1 >= 998}
                           >
                              <svg
                                 fill={
                                    cartList[elem.id] - 1 >= 998
                                       ? "#999"
                                       : "#000000"
                                 }
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
                           {elem.action && (
                              <div className="text-sm line-through">
                                 {(cartList[elem.id] * elem.price).toFixed(2)}
                                 {mainCurrency}
                              </div>
                           )}
                           <div
                              className="price text-lg font-semibold"
                              title={
                                 cartList[elem.id].toString() +
                                 " * " +
                                 calculatePriceWithAction({
                                    price: elem.price,
                                    action: elem.action,
                                 })
                              }
                           >
                              {(
                                 cartList[elem.id] *
                                 Number(
                                    calculatePriceWithAction({
                                       price: elem.price,
                                       action: elem.action,
                                    })
                                 )
                              ).toFixed(2)}
                              {mainCurrency}
                           </div>
                        </div>
                     </div>
                  </div>

                  <button
                     className="hover:opacity-60 transition-opacity duration-300 self-start mt-1"
                     title="Dieses Produkt löschen"
                     onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        if (
                           confirm(
                              "Dieses Produkt aus dem Einkaufswagen löschen?"
                           )
                        ) {
                           removeItem(elem.id);
                        }
                     }}
                  >
                     <Trash2 width={20} />
                  </button>
               </Link>
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
