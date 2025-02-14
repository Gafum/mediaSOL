import { useFavoritesStore } from "../../Store/FavoritesStore";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";

export const Cart = (): JSX.Element => {
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );
   const favoritesList = useFavoritesStore((state) => state.favoritesList);
   return (
      <section>
         {" "}
         <div className="flex justify-between">
            {" "}
            <h1>Cart</h1>{" "}
            <CustomBtn
               btnText={"Clear Favorites List"}
               onClick={() => clearFavoritesList()}
            />{" "}
         </div>{" "}
         <div>
            {" "}
            {favoritesList.map((elem) => (
               <div>{elem}</div>
            ))}{" "}
         </div>{" "}
      </section>
   );
};
