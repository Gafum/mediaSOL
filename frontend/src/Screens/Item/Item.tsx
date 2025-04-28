import { useParams } from "react-router-dom";
import { IGadget } from "../../MainTypes/Gadget";
import { ItemsList } from "../../Components/ItemsList/ItemsList";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { useCallback, useEffect, useState } from "react";
import { Review } from "../../Components/Review/Review";
import { IReviews } from "../../MainTypes/Reviews";
import { reviewsList } from "../../DevData/ReviewsList";
import { ItemDetails } from "./MyComponents/ItemDetails";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";

export const Item = (): JSX.Element => {
   //Element Data
   const { itemId } = useParams();
   const [elementData, setElementData] = useState<IGadget | undefined>(
      undefined
   );
   const [localCommentList, setLocalCommentList] = useState<IReviews[]>([]);
   const [similaryGadgets, setSimilaryGadgets] = useState<IGadget[]>([]);

   const [isLoading, setIsLoading] = useState(true);

   // Rewrite with React Query
   const fetchData = useCallback(async () => {
      try {
         const response = await fetch(
            import.meta.env.VITE_BACKEND_URL +
               "/items/" +
               itemId +
               "?withSimilary=true"
         );

         if (!response.ok) {
            throw new Error("not found");
            return;
         }

         const json = await response.json();

         setElementData(json[0]);

         //BACKEND === json[1]
         setLocalCommentList(() => {
            if (json[0]) {
               return reviewsList.filter(({ id }) =>
                  json[0].commentsList?.includes(id)
               );
            }
            return [];
         });
         setSimilaryGadgets(json[2]);
      } catch (error) {
         console.log(error);
         setElementData(undefined);
      } finally {
         setIsLoading(false);
      }
   }, []);

   useEffect(() => {
      fetchData();
   }, []);

   useEffect(() => {
      if (!isLoading && !elementData) {
         document.title = "Not Found";
         return;
      }

      setTimeout(() => {
         if (elementData) {
            document.title = elementData.name;
         }
      }, 200);
   }, [elementData]);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (!elementData) {
      return <SimpleError />;
   }

   return (
      <div>
         <ItemDetails {...elementData} />

         {/* Comments =====*/}
         <SectionWithHeadline
            title="Produktbewertungen"
            className="mt-4 sm500:mt-5 sm:mt-9"
         >
            {localCommentList.map((reviewsData) => {
               return (
                  <Review
                     {...reviewsData}
                     className={"mt-4"}
                     key={reviewsData.id}
                  />
               );
            })}
         </SectionWithHeadline>

         {/* Similary gadgets */}
         <div className="mb-11">
            <ItemsList
               className="mt-4 sm500:mt-5 sm:mt-9"
               name="Änliche Gadgets"
               list={similaryGadgets}
            />
         </div>
      </div>
   );
};
