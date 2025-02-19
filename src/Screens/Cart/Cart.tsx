import { Trash2 } from "lucide-react";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../DevData/CatalogContent";
import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { useCartStore } from "../../Store/CartStore";

export const Cart = (): JSX.Element => {
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const cartListIDs = useCartStore((state) => state.cartList);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const localFavoritesList = CatalogContent.filter(({ id }) =>
      favoritesListIDs.includes(id)
   );

   console.log(localFavoritesList, favoritesListIDs);

   return (
      <section>
         <SectionWithHeadline title={screenList.cart.name} className="mt-0">
            {cartListIDs.map((e) => e + " ")}
         </SectionWithHeadline>

         {cartListIDs.length > 0 && favoritesListIDs.length > 0 ? (
            <div className="h-[3px] w-full bg-primaryPink rounded-[3px] mt-5" />
         ) : (
            ""
         )}

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
      </section>
   );
};
