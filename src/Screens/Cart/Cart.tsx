import { screenList } from "../../Routing/RoutingList";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { useCartStore } from "../../Store/CartStore";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { useNavigate } from "react-router-dom";
import { FavoritesList } from "./MyComponents/FavoritesList";
import { ProductsList } from "./MyComponents/ProductsList";

export const Cart = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const cartListIDs = Object.keys(useCartStore((state) => state.cartList));

   const navigate = useNavigate();

   console.log(cartListIDs);

   if (!cartListIDs.length && !favoritesListIDs.length) {
      return (
         <div className="text-center w-full">
            <h1 className="font-medium text-2xl mt-[140px]">Korb ist leer</h1>
            <CustomBtn
               btnText={"Etwas kaufen"}
               className="w-1/3 mt-7"
               onClick={() => navigate(screenList.catalog.path)}
            />
         </div>
      );
   }

   return (
      <section>
         {Boolean(cartListIDs.length) && <ProductsList />}

         {cartListIDs.length > 0 && favoritesListIDs.length > 0 && (
            <div className="h-[3px] w-full bg-primaryPink rounded-[3px] mt-8" />
         )}

         <FavoritesList />
      </section>
   );
};
