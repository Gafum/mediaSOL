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
            headline="Make your life better with new technology"
            description="New technology for very good price always important for your life. Be new, be cool, be modern and know everything about trends. Do you want this just open buy a new PC in this link below."
            btnText="Buy some gadgets"
            imgSrc="https://www.mifcom.de/media/catalog/product/i/m/img_0011_10.jpg"
            onClick={() => navigate(screenList.catalog.path)}
         />

         <ServicesSection />
         <OurPartners />
         <ReviewsSection />
      </div>
   )
}

export default Home
