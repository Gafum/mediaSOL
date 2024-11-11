import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Error404 from "../Components/Errors/Error404"
import { screenList } from "./RoutingList"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { useEffect } from "react"

function Router(): JSX.Element {
   const location = useLocation()
   useEffect(() => {
      let screenName: string | undefined = Object.values(screenList).find(
         (e) => {
            return e.path == location.pathname
         }
      )?.name

      document.title = `${screenName} - MediaSOL - Computer care`
   }, [location])
   return (
      <Routes location={location} key={location.pathname}>
         {Object.values(screenList).map((screen) => (
            <Route
               key={screen.path}
               path={screen.path}
               element={<div className="container">{screen.component}</div>}
            />
         ))}

         <Route path="*" element={<Error404 />} />
      </Routes>
   )
}

function MainRouter(): JSX.Element {
   return (
      <BrowserRouter>
         <div className="flex flex-col h-full">
            <div className="flex-1">
               <Header />
               <Router />
            </div>
            <div className="flex-0">
               <Footer />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default MainRouter
