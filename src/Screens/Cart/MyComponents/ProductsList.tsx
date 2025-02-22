import { ImageOff } from "lucide-react";
import { SectionWithHeadline } from "../../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../../DevData/CatalogContent";
import { calculatePriceWithAction } from "../../../Function/calculatePriceWithAction";
import { screenList } from "../../../Routing/RoutingList";
import { useCartStore } from "../../../Store/CartStore";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { Link } from "react-router-dom";

export const ProductsList = (): JSX.Element => {
   const cartListIDs = useCartStore((state) => state.cartList);

   const localCartList = CatalogContent.filter(({ id }) =>
      cartListIDs.includes(id)
   );

   return (
      <SectionWithHeadline title={screenList.cart.name} className="mt-0">
         <div className="flex flex-col gap-4">
            {localCartList.map((elem) => (
               <Link
                  className="flex gap-4 bg-primaryLightGrey rounded-md p-2 hover:shadow-lg duration-300 transition-shadow"
                  to={"/item/" + elem.id}
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
                     <div className="mt-1">
                        {elem.action && (
                           <div>
                              <span className="text-base rounded-md bg-primaryPink px-1 text-white text-center">
                                 - {elem.action}%
                              </span>
                              <span className="ml-3 line-through">
                                 ${elem.price}
                              </span>
                           </div>
                        )}
                        <div className="price text-3xl font-semibold mt-1">
                           $
                           {calculatePriceWithAction({
                              price: elem.price,
                              action: elem.action,
                           })}
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </SectionWithHeadline>
   );
};
