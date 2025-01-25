import { useParams } from "react-router-dom";
import { IGadget } from "../../MainTypes/Gadget";
import { CatalogContent } from "../../DevData/CatalogContent";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { OneGoodsList } from "../Catalog/MyComponents/OneGoodsList";
import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction";
import { Heart } from "lucide-react";
import { Error404 } from "../../Components/Errors/Error404";
import { useEffect, useState } from "react";
import { Review } from "../../Components/Review/Review";
import { IReviews } from "../../MainTypes/Reviews";
import { reviewsList } from "../../DevData/ReviewsList";

export const Item = (): JSX.Element => {
   const [localCommentList, setLocalCommentList] = useState<IReviews[]>([]);
   const { itemId } = useParams();
   const elementData: IGadget | undefined = CatalogContent.find((elem) => {
      return elem.id == itemId;
   });

   if (!elementData) {
      return <Error404 />;
   }

   useEffect(() => {
      document.title = elementData.name;
      setLocalCommentList(() =>
         reviewsList.filter(({ id }) => elementData.commentsList?.includes(id))
      );
   }, [elementData]);

   return (
      <div>
         <div className="grid grid-cols-2 gap-2 items-start justify-items-center">
            <div
               className="w-[calc(100%-20px)] aspect-square rounded-md bg-top bg-cover min-h-[200px] bg-no-repeat"
               style={{ backgroundImage: `url(${elementData.img})` }}
            />

            <div className="p-4 rounded-md bg-primaryLightGrey flex flex-col shadow-sm">
               <h2 className="font-semibold text-xl">{elementData.name}</h2>
               <div className="mt-1">
                  {elementData.action && (
                     <div className="mb-2">
                        <span className="text-base rounded-md bg-primaryPink px-1 text-white text-center">
                           - {elementData.action}%
                        </span>
                        <span className="ml-3 line-through">
                           ${elementData.price}
                        </span>
                     </div>
                  )}
                  <span className="price text-3xl font-semibold">
                     $
                     {calculatePriceWithAction({
                        price: elementData.price,
                        action: elementData.action,
                     })}
                  </span>
               </div>
               <p className="mt-3 text-[#777] text-justify">
                  {elementData.description}
               </p>
               <div className="flex-1 min-h-5" />

               <CustomBtn
                  btnText="In den Warenkorb"
                  onClick={() => console.log("basket" + elementData.id)}
                  className="w-full font-medium uppercase"
               />
               <CustomBtn
                  btnText={
                     <div className="flex justify-center items-center gap-2 font-medium text-white">
                        <Heart
                           size={18}
                           fill={false ? "white" : "transparent"}
                           color="white"
                           strokeWidth="2.5px"
                           className="hover:drop-shadow-md transition-all duration-300"
                        />
                        Zu Favoriten
                     </div>
                  }
                  onClick={() => console.log("favorites" + elementData.id)}
                  className="w-full font-medium uppercase bg-primaryPink mt-2"
               />
            </div>
         </div>

         {localCommentList.length ? (
            <div className="mt-10">
               <h2 className="font-semibold text-[21px]">Produktbewertungen</h2>
               {localCommentList.map((reviewsData) => {
                  return <Review {...reviewsData} className={"mt-4"} />;
               })}
            </div>
         ) : (
            <></>
         )}

         <div className="mt-11">
            <OneGoodsList
               name="Änliche Gadgets"
               list={CatalogContent.filter((elem) => {
                  return (
                     elem.type == elementData.type && elem.id !== elementData.id
                  );
               })}
            />
         </div>
      </div>
   );
};
