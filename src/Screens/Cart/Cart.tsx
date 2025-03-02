import { screenList } from "../../Routing/RoutingList";
import { useCartStore } from "../../Store/CartStore";
import { ProductsList } from "./MyComponents/ProductsList";
import { SimpleError } from "../../Components/Errors/SimpleError";

export const Cart = (): JSX.Element => {
   const cartListIDs = Object.keys(useCartStore((state) => state.cartList));

   if (!cartListIDs || !cartListIDs?.length) {
      return (
         <SimpleError
            title="Korb ist leer"
            btnText="Etwas kaufen"
            navigateTo={screenList.catalog.path}
         />
      );
   }

   return <ProductsList />;
};
