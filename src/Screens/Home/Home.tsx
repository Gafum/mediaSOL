import { useNavigate } from "react-router-dom";

import { screenList } from "../../Routing/RoutingList";
import { StandardSection } from "./MyComponents/StandardSection";
import { ServicesSection } from "./MyComponents/ServicesSection";
import { ReviewsSection } from "./MyComponents/ReviewsSection";
import { OurPartners } from "./MyComponents/OurPartners";

export const Home = (): JSX.Element => {
   let navigate = useNavigate();

   return (
      <div className="text-primaryBlue">
         <StandardSection
            headline="Verbessere dein Leben mit neuer Technologie!"
            description="Neue Technologie zu einem sehr guten Preis kann dein Leben bereichern. Sei modern, cool und stets über die neuesten Trends informiert. Möchtest du das? Dann klicke auf den Link unten und kaufe dir einen neuen PC."
            btnText="Kaufe einige Gadgets"
            imgSrc="https://www.mifcom.de/media/catalog/product/i/m/img_0011_10.jpg"
            onClick={() => navigate(screenList.catalog.path)}
            eventOnImgClick={() => navigate("/item/mainId")}
         />

         <ServicesSection />
         <OurPartners />
         <ReviewsSection />
      </div>
   );
};
