import { NavLink } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import Container from "../../UI/Container/Container";

function Header(): JSX.Element {
   return (<>
      <header className="opacity-0 ">
         <Container>
            <NavLink to={"/"} className="flex justify-center gap-1 font">
               <img src="/mainIcon.svg" alt="M" className="w-10 h-10" />
               MediaSOL
            </NavLink>
         </Container>
      </header>
      <header className="absolute top-0 left-0 w-full">
         <Container>
            <div className="flex gap-4 justify-between w-full">
               <NavLink to={"/"} className="flex justify-center gap-1 font text-3xl">
                  <img src="/mainIconBack.svg" alt="M" className="h-9" />
                  MediaSOL
               </NavLink>
               <nav className="flex gap-4 justify-center">
                  <NavLink to={screenList.find((e) => e.name == "contact")?.path || "/"}>
                     Contact
                  </NavLink>

                  <NavLink to={screenList.find((e) => e.name == "about")?.path || "/"}>
                     About
                  </NavLink>
               </nav>
            </div>
         </Container>
      </header>
   </>
   );
}

export default Header;