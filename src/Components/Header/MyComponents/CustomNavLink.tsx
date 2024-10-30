import { NavLink } from "react-router-dom";
import styles from "./CustomNavLink.module.css";

function CustomNavLink({ myPath }: { myPath: string }): JSX.Element {
   return (
      <NavLink
         className={({ isActive }: { isActive: boolean }) =>
            styles.navLink + " " + (isActive ? (styles.active) : "")
         }
         to={myPath || "/"}
      >
         <div className={"bg-primaryBlue " + styles.linkBack} />
         <span>{myPath}</span>
      </NavLink>
   );
}

export default CustomNavLink; 