import { ImageOff } from "lucide-react";
import { SectionWithHeadline } from "../../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../../DevData/CatalogContent";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { screenList } from "../../../Routing/RoutingList";
import { useCartStore } from "../../../Store/CartStore";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { Link } from "react-router-dom";

export const ProductsList = (): JSX.Element => {
   const cartList = useCartStore((state) => state.cartList);
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
                  className="flex gap-4 bg-primaryLightGrey rounded-md p-2 hover:shadow-lg duration-300 transition-shadow"
                  to={"/item/" + elem.id}
                  key={elem.id}
               >
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
                  <div className="flex flex-col pb-2 pr-2 w-3/4">
                     <h3 className="font-medium text-lg overflow-clip text-ellipsis whitespace-nowrap w-11/12">
                        {elem.name}
                     </h3>
                     <p className="text-sm line-clamp-3 mt-2 h-[4rem] max-w-full">
                        {elem.description}
                     </p>
                     <div className="mt-1 flex items-center gap-3">
                        {/* Price ====== */}
                        <div>
                           {elem.action && (
                              <div>
                                 <span className="text-sm rounded-md bg-primaryPink px-1 text-white text-center">
                                    - {elem.action}%
                                 </span>
                                 <span className="text-sm ml-2 line-through">
                                    ${elem.price}
                                 </span>
                              </div>
                           )}
                           <div className="price text-2xl font-semibold">
                              $
                              {calculatePriceWithAction({
                                 price: elem.price,
                                 action: elem.action,
                              })}
                           </div>
                        </div>
                        {/* How much items === */}
                        <div>
                           <button
                              onClick={(event) => {
                                 event.preventDefault();
                                 event.stopPropagation();
                                 decreaseItemAmount(elem.id);
                              }}
                           >
                              -
                           </button>
                           {cartList[elem.id]}
                           <button
                              onClick={(event) => {
                                 event.preventDefault();
                                 event.stopPropagation();
                                 increaseItemAmount(elem.id);
                              }}
                           >
                              +
                           </button>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </SectionWithHeadline>
   );
};
