import { useFavoritesStore } from "../../Store/FavoritesStore";
import { CatalogContent } from "../../DevData/CatalogContent";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";
import { CustomDialog } from "../../UI/CustomDialog/CustomDialog";
import { useState } from "react";

export const Favorites = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );

   console.log(favoritesListIDs);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);

   const localFavoritesList = CatalogContent.filter(({ id }) =>
      favoritesListIDs.includes(id)
   );

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
               onClick={() => setIsModalOpen(true)}
               bgColor="primaryPink"
               className="text-base mt-6 w-full ml-auto"
               btnText={"Favoritenliste löschen"}
            />
         </SectionWithHeadline>

         <CustomDialog open={IsModalOpen} setOpen={setIsModalOpen}>
            <div className="p-5 min-h-44 flex flex-col justify-between items-center text-center gap-5">
               <h1 className="text-2xl font-medium">Sind Sie sicher?</h1>
               <p className="text-lg">
                  Elemente aus der Favoritenliste entfernen?
               </p>
               <div className="grid grid-cols-2 mt-5 gap-2 w-full">
                  <CustomBtn
                     btnText={"Nein"}
                     className="bg-primaryPink w-full"
                     onClick={() => setIsModalOpen(false)}
                  />
                  <CustomBtn
                     className="w-full"
                     btnText={"Ja"}
                     onClick={clearFavoritesList}
                  />
               </div>
            </div>
         </CustomDialog>
      </>
   );
};
