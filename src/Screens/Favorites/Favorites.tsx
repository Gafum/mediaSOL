import { useFavoritesStore } from "../../Store/FavoritesStore";
import { CatalogContent } from "../../DevData/CatalogContent";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";

export const Favorites = (): JSX.Element => {
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
      <SectionWithHeadline title={"Favoriten"} className="m-0">
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
            onClick={clearFavoritesList}
            bgColor="primaryPink"
            className="text-base mt-6 w-full ml-auto"
            btnText={"Favoritenliste löschen"}
         />
      </SectionWithHeadline>
   );
};
