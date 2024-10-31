import { Link } from "react-router-dom";
import { screenNavList } from "../../Routing/RoutingList";
import CustomNavLink from "./MyComponents/CustomNavLink";

function Header(): JSX.Element {
   return (<>
      <div className="container py-6 opacity-0 text-2xl w-full ">
         {/* background header */}MediaSOL
      </div>
      <header className="fixed top-0 left-0 w-full container pt-6 pb-2 bg-white">
         <div className="flex gap-4 justify-between w-full">
            <Link to={"/"} className="flex justify-center items-center gap-2 text-2xl">
               <img src="/mainIcon.svg" alt="M" className="h-[15px]" />
               <span className="font-semibold whitespace-nowrap">MediaSOL</span>
            </Link>

            <nav className="flex gap-4 justify-center items-center font-semibold">
               {screenNavList.map((path) => { return <CustomNavLink key={path} myPath={path} /> })}
            </nav>
         </div >
         <div className="bg-gradient-to-b from-white to-transparent h-4 absolute bottom-[-16px] w-full left-0" />
      </header >
   </>
   );
}

export default Header;