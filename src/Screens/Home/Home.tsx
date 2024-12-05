import { useNavigate } from "react-router-dom"

import { screenList } from "../../Routing/RoutingList"
import StandardSection from "./MyComponents/StandardSection"
import ServicesSection from "./MyComponents/ServicesSection"
import ReviewsSection from "./MyComponents/ReviewsSection"
import OurPartners from "./MyComponents/OurPartners"

function Home(): JSX.Element {
   let navigate = useNavigate()

   return (
      <div className="text-primaryBlue">
         <StandardSection
            headline="Verbessere dein Leben mit neuer Technologie!"
            description="Neue Technologie zu einem sehr guten Preis kann dein Leben bereichern. Sei modern, cool und stets über die neuesten Trends informiert. Möchtest du das? Dann klicke auf den Link unten und kaufe dir einen neuen PC."
            btnText="Kaufe einige Gadgets"
            imgSrc="https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg"
            onClick={() => navigate(screenList.catalog.path)}
         />

         <ServicesSection />
         <OurPartners />
         <ReviewsSection />
      </div>
   )
}

export default Home
