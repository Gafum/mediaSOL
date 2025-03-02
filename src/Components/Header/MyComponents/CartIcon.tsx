import { NavLink } from "react-router-dom";
import { useCartStore } from "../../../Store/CartStore";
import { calculateAllAmount } from "../../../Function/calculateAllAmount";
import { screenList } from "../../../Routing/RoutingList";
import styles from "./CustomNavLink.module.css";
import { twMerge } from "tailwind-merge";

export const CartIcon = (): JSX.Element => {
   const cartList = useCartStore((store) => store.cartList);

   const ItmesAmount = calculateAllAmount(cartList);
   return (
      <NavLink
         to={screenList.cart.path}
         className={({ isActive }: { isActive: boolean }) =>
            twMerge(
               isActive && styles.activeIcon,
               styles.cartNavBtn,
               styles.NavIcons,
               Boolean(ItmesAmount) && styles.hasItem
            )
         }
         title="Korb"
      >
         <img
            src="/SVG/SmallIcons/Cart.svg"
            alt="Korb"
            className={styles.cartImg}
         />
         <span className={styles.NavIconAmount}>
            {ItmesAmount > 99 ? "99+" : ItmesAmount}
         </span>
      </NavLink>
   );
};
