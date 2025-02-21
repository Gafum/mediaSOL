import { SectionWithHeadline } from "../../../Components/Section/SectionWithHeadline";
import { screenList } from "../../../Routing/RoutingList";
import { useCartStore } from "../../../Store/CartStore";

export const ProductsList = (): JSX.Element => {
   const cartListIDs = useCartStore((state) => state.cartList);

   return (
      <SectionWithHeadline title={screenList.cart.name} className="mt-0">
         {cartListIDs.map((e) => (
            <div>{e}</div>
         ))}
      </SectionWithHeadline>
   );
};
