import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CatalogContent } from "../../DevData/CatalogContent";
import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";

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
         <SectionWithHeadline title="Favoriten">
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
                  <CustomBtn
                     btnText={"Favoritenliste löschen"}
                     onClick={() => clearFavoritesList()}
                     className="w-full mt-6"
                  />
               </>
            )}
         </SectionWithHeadline>
      </section>
   );
};
