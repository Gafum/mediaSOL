import { NavLink } from "react-router-dom";
import styles from "./CustomNavLink.module.css";

function CustomNavLink({ myPath, myName = "" }: { myPath: string, myName?: string }): JSX.Element {
   return (
      <NavLink
         className={({ isActive }: { isActive: boolean }) =>
            styles.navLink + " " + (isActive ? (styles.active) : "brightness-125")
         }
         to={myPath || "/"}
      >
         <div className={"bg-primaryBlue " + styles.linkBack} />
         <span>{myName}</span>
      </NavLink>
   );
}

export default CustomNavLink; 