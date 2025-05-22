import { IGadget } from "../../MainTypes/Gadget";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SmallItem } from "./MyComponents/SmallItem";

interface ISimpleItemsListProps {
   itemsList: IGadget[];
   className?: string;
}

export const SimpleItemsList = ({
   itemsList,
   className,
}: ISimpleItemsListProps): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);

   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   return (
      <div
         className={
            "grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-3 " +
            className
         }
      >
         {itemsList.map((elem) => (
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
   );
};
