import { useParams } from "react-router-dom";
import { IGadget } from "../../MainTypes/Gadget";
import { CatalogContent } from "../../DevData/CatalogContent";
import { ItemsList } from "../../Components/ItemsList/ItemsList";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { useEffect, useState } from "react";
import { Review } from "../../Components/Review/Review";
import { IReviews } from "../../MainTypes/Reviews";
import { reviewsList } from "../../DevData/ReviewsList";
import { ItemDetails } from "./MyComponents/ItemDetails";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";

export const Item = (): JSX.Element => {
   //Element Data
   const { itemId } = useParams();
   const elementData: IGadget | undefined = CatalogContent.find((elem) => {
      return elem.id == itemId;
   });

   //Local Data from Element Data
   const [localCommentList, setLocalCommentList] = useState<IReviews[]>([]);

   useEffect(() => {
      if (!elementData) {
         document.title = "Not Found";
         return;
      }

      setTimeout(() => {
         document.title = elementData.name;
      }, 200);

      setLocalCommentList(() =>
         reviewsList.filter(({ id }) => elementData.commentsList?.includes(id))
      );
   }, [elementData]);

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
