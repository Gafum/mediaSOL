import { useGetAllItems } from "../../Hooks/Query/Items/useGetAll";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";

export const Catalog = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );
   
   //Rewrite Add Pagination
   const { isLoading, error, list: catalogList } = useGetAllItems();

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error || !catalogList || !catalogList?.length) {
      return (
         <SimpleError
            title="Problemen on Server"
            btnText="Nach Hause"
            navigateTo={screenList.home.path}
         />
      );
   }

   return (
      <SectionWithHeadline title={"Katalog"} className="m-0">
         <div className="grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
            {catalogList.map((elem) => (
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
      </SectionWithHeadline>
   );
};
