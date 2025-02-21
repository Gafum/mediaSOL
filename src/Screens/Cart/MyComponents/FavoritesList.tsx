import { Trash2 } from "lucide-react";
import { SectionWithHeadline } from "../../../Components/Section/SectionWithHeadline";
import { useFavoritesStore } from "../../../Store/FavoritesStore";
import { CatalogContent } from "../../../DevData/CatalogContent";
import { SmallItem } from "../../../Components/ItemsList/MyComponents/SmallItem";

export const FavoritesList = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const localFavoritesList = CatalogContent.filter(({ id }) =>
      favoritesListIDs.includes(id)
   );

   return (
      <SectionWithHeadline
         title={
            <div className="flex justify-between text-inherit">
               <h1 className="font-semibold text-xl">Favoriten</h1>
               <button
                  onClick={clearFavoritesList}
                  className="hover:opacity-60 transition-opacity duration-300"
                  title="Favoritenliste löschen"
               >
                  <Trash2 />
               </button>
            </div>
         }
         className="mt-3"
      >
         {localFavoritesList.length > 0 && (
            <>
               <div className="grid grid-cols-4 gap-5">
                  {localFavoritesList.map((elem) => (
                     <SmallItem
                        key={elem.id}
                        {...elem}
                        isOnFavorites={favoritesListIDs.includes(elem.id)}
                        toggleToFavorites={() => {
                           toggleFavoritesElement(elem.id);
                        }}
                        className="w-full"
                     />
                  ))}
               </div>
            </>
         )}
      </SectionWithHeadline>
   );
};
