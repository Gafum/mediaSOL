import { NavLink } from "react-router-dom";
import { screenList } from "../../../Routing/RoutingList";
import styles from "./CustomNavLink.module.css";
import { twMerge } from "tailwind-merge";
import { useFavoritesStore } from "../../../Store/FavoritesStore";
import { Heart } from "lucide-react";

export const FavoritesIcon = (): JSX.Element => {
   const favoritesList = useFavoritesStore((store) => store.favoritesList);

   return (
      <NavLink
         to={screenList.favorites.path}
         className={({ isActive }: { isActive: boolean }) =>
            twMerge(
               isActive && styles.activeIcon,
               styles.NavIcons,
               Boolean(favoritesList.length) && styles.hasItem
            )
         }
         title="Korb"
      >
         <Heart
            color={"#000"}
            strokeWidth={2.5}
            className={styles.FavoritesSvg}
            id="heartIcon"
         />
         <span className={styles.NavIconAmount}>
            {favoritesList.length > 9 ? "9+" : favoritesList.length}
         </span>
      </NavLink>
   );
};
