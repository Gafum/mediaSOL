import { NavLink } from "react-router-dom";

function CustomNavLink({ myPath }: { myPath: string }): JSX.Element {
   return (
      <NavLink
         className={({ isActive }: { isActive: boolean }) =>
            "font-medium capitalize transition-transform duration-300 " + (isActive ? "translate-y-[-3px]" : "")
         }
         to={myPath || "/"}
      >
         {myPath}
      </NavLink>
   );
}

export default CustomNavLink; 