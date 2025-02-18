import { Trash2 } from "lucide-react";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../DevData/CatalogContent";
import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";

export const Cart = (): JSX.Element => {
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const localFavoritesList = CatalogContent.filter(({ id }) =>
      favoritesListIDs.includes(id)
   );

   console.log(localFavoritesList, favoritesListIDs);

   return (
      <section>
         <h1 className="font-semibold text-xl">{screenList.cart.name}</h1>
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
            className="pt-3 border-primaryPink border-t-[3px] border-solid"
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
      </section>
   );
};
