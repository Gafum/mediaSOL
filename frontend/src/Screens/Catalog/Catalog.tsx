import { useGetAllItems } from "../../Hooks/Query/Items/useGetAll";
import { SmallItem } from "../../Components/ItemsList/MyComponents/SmallItem";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { Download } from "lucide-react";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { useGetTypes } from "../../Hooks/Query/Items/useTypes";

export const Catalog = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   const { data: types, isLoading: isTypesLoading } = useGetTypes();

   const {
      isLoading,
      error,
      list: catalogList,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
   } = useGetAllItems();

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
         {isTypesLoading ? (
            "Loading..."
         ) : (
            <div className="flex justify-around">
               {types?.map((type: string) => <h2 key={type}>{type}</h2>)}
            </div>
         )}

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
         {hasNextPage && (
            <div className="w-full flex justify-center mt-4">
               <CustomBtn
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  btnText={
                     <div className="flex justify-center items-center text-inherit gap-2">
                        {isFetchingNextPage
                           ? "Loading..."
                           : "Daten herunterladen"}
                        <Download color="white" size={20} />
                     </div>
                  }
                  className="px-3"
               />
            </div>
         )}
         {isLoading && <p>Loading...</p>}
      </SectionWithHeadline>
   );
};
