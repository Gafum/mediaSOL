import { useParams } from "react-router-dom";
import { ItemsList } from "../../Components/ItemsList/ItemsList";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { useEffect } from "react";
import { ItemDetails } from "./MyComponents/ItemDetails";
import { useGetOneItem } from "../../Hooks/Query/Items/useGetOne";

export const Item = (): JSX.Element => {
   const { itemId } = useParams();

   const { isLoading, error, elementData, similaryGadgets } =
      useGetOneItem(itemId);

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

   if (!elementData || error) {
      return <SimpleError />;
   }

   return (
      <div>
         <ItemDetails {...elementData} />

         {/* Comments =====*/}
         {/* <SectionWithHeadline
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
         </SectionWithHeadline> */}

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
