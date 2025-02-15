import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { CatalogContent } from "../../DevData/CatalogContent";
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
         <div className="flex justify-between">
            <h1>Cart</h1>
            <CustomBtn
               btnText={"Clear Favorites List"}
               onClick={() => clearFavoritesList()}
            />
         </div>
         <div className="flex flex-wrap gap-5 mt-5">
            {localFavoritesList.map((elem) => (
               <SmallItem
                  key={elem.id}
                  {...elem}
                  isOnFavorites={favoritesListIDs.includes(elem.id)}
                  toggleToFavorites={() => {
                     toggleFavoritesElement(elem.id);
                  }}
               />
            ))}
         </div>
      </section>
   );
};
