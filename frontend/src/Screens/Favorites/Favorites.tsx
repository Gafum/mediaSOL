import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";
import {
   StandartDialog,
   useStandartDialog,
} from "../../UI/CustomDialog/Standart/StandartDialog";
import { useCallback, useEffect, useState } from "react";
import { IGadget } from "../../MainTypes/Gadget";

export const Favorites = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const { modalData, setModalData } = useStandartDialog();

   const [localFavoritesList, setLocalFavoritesList] = useState<IGadget[]>([]);

   
   // Rewrite with React Query
   const [isLoading, setIsLoading] = useState(true);
   const fetchData = useCallback(async () => {
      try {
         const response = await fetch(
            import.meta.env.VITE_BACKEND_URL + "/items/list",
            {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ ids: favoritesListIDs }),
            }
         );

         const json = await response.json();

         if (!response.ok) {
            throw new Error(json.message);
            return;
         }

         setLocalFavoritesList(json);
      } catch (error) {
         console.log(error);
         setLocalFavoritesList([]);
      } finally {
         setIsLoading(false);
      }
   }, []);

   useEffect(() => {
      fetchData();
   }, [favoritesListIDs]);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (!localFavoritesList || !localFavoritesList?.length) {
      return (
         <SimpleError
            title="Sie haben keine Favorittprodukt"
            btnText="Etwas finden"
            navigateTo={screenList.catalog.path}
         />
      );
   }

   return (
      <>
         <SectionWithHeadline title={"Favoriten"} className="m-0">
            <div className="grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
               {localFavoritesList.map((elem) => (
                  <SmallItem
                     key={elem.id}
                     {...elem}
                     isOnFavorites={favoritesListIDs.includes(elem.id)}
                     toggleToFavorites={() => {
                        toggleFavoritesElement(elem.id);
                     }}
                     className="w-full sm500:w-full md:w-full"
                     imgClassName="h-[175px] sm500:h-[175px] md:h-[200px]"
                  />
               ))}
            </div>

            <CustomBtn
               onClick={() =>
                  setModalData({
                     isOpen: true,
                     content: "Elemente aus der Favoritenliste entfernen?",
                     onOkeyClick: clearFavoritesList,
                  })
               }
               bgColor="primaryPink"
               className="text-base mt-6 w-full ml-auto"
               btnText={"Favoritenliste löschen"}
            />
         </SectionWithHeadline>

         <StandartDialog modalData={modalData} setModalData={setModalData} />
      </>
   );
};
