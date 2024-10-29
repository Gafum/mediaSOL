import { Link } from "react-router-dom";
import { screenNavList } from "../../Routing/RoutingList";
import CustomNavLink from "./MyComponents/CustomNavLink";

function Header(): JSX.Element {
   return (<>
      <div className=" container py-6 opacity-0 text-3xl">
         {/* background header */}Hi
      </div>
      <header className="absolute top-0 left-0 w-full container py-6">
         <div className="flex gap-4 justify-between w-full">
            <Link to={"/"} className="flex justify-center items-center gap-2 text-2xl">
               <img src="/mainIcon.svg" alt="M" className="h-[15px]" />
               <span className="font-semibold">MediaSOL</span>
            </Link>

            <nav className="flex gap-4 justify-center items-center font-semibold">
               {screenNavList.map((path) => { return <CustomNavLink myPath={path} /> })}
            </nav>
         </div >
      </header >
   </>
   );
}

export default Header;