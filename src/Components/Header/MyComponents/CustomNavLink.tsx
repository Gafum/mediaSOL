import { NavLink } from "react-router-dom";
import styles from "./CustomNavLink.module.css";

export const CustomNavLink = ({
   myPath,
   myName = "",
}: {
   myPath: string;
   myName?: string;
}): JSX.Element => {
   return (
      <NavLink
         className={({ isActive }: { isActive: boolean }) =>
            styles.navLink + " " + (isActive ? styles.active : "brightness-125")
         }
         to={myPath || import.meta.env.BASE_URL}
      >
         <div className={"bg-primaryBlue " + styles.linkBack} />
         <span className="font-medium">{myName}</span>
      </NavLink>
   );
};
