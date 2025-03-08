import { Fragment, ReactNode } from "react";
import { screenList } from "../../Routing/RoutingList";
import { Link, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import {
   BookCheck,
   Computer,
   MonitorSmartphone,
   HouseWifi,
} from "lucide-react";
import { OurPartners } from "../Home/MyComponents/OurPartners";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapController } from "../../UI/CustomData/MapController";

interface IAboutSectionData {
   name: string;
   title: string;
   description: string | { title: string; text: string; icon: JSX.Element }[];
}

const aboutSectionData: IAboutSectionData[] = [
   {
      name: "shortDescription",
      title: " Über Uns",
      description:
         "MediaSOL GmbH ist ein innovatives IT-Beratungsunternehmen, das Firmen und Bildungseinrichtungen umfassend berät, mit hochwertigen Medienlösungen ausstattet und auf Wunsch die technische Wartung übernimmt. Unser Ziel ist es, individuelle Lösungen zu entwickeln, die perfekt auf die Bedürfnisse unserer Kunden abgestimmt sind. Mit unserer langjährigen Erfahrung und einem jungen, dynamischen Team setzen wir auf modernste Technologien und einen kundenorientierten Service.",
   },
   {
      name: "services",
      title: "Leistungsspektrum",
      description: [
         {
            title: "Verkauf von technischen Produkten",
            text: "PCs, Apple-Produkte, Drucker, Scanner, Server, Beamer und vieles mehr – wir bieten hochwertige Technik für Ihre Bedürfnisse. Unser Sortiment umfasst sowohl Einsteigergeräte als auch leistungsstarke Profitechnik für anspruchsvolle Anwendungen.",
            icon: (
               <MonitorSmartphone
                  width={"100%"}
                  height={"100%"}
                  className="stroke-primaryDarkGrey"
               />
            ),
         },
         {
            title: "Beratung für Firmen und Schulen",
            text: "Maßgeschneiderte Lösungen, die perfekt zu Ihren Anforderungen passen. Wir analysieren Ihre individuellen Bedürfnisse und entwickeln gemeinsam mit Ihnen ein Konzept, das Ihre Arbeitsabläufe effizienter und zukunftssicher macht.",
            icon: (
               <BookCheck
                  width={"100%"}
                  height={"100%"}
                  className="stroke-primaryDarkGrey"
               />
            ),
         },
         {
            title: "Technische Wartung",
            text: "Wartung von Rechnern und Servern für einen reibungslosen Betrieb. Unser Service umfasst regelmäßige Inspektionen, Fehlerbehebung und präventive Maßnahmen, um Ausfälle zu vermeiden und Ihre Systeme stets auf dem neuesten Stand zu halten.",

            icon: (
               <Computer
                  width={"100%"}
                  height={"100%"}
                  className="stroke-primaryDarkGrey"
               />
            ),
         },
         {
            title: "Netzwerk-Einrichtung",
            text: "Effiziente Netzwerke für Ihre IT-Infrastruktur. Wir planen, installieren und konfigurieren Netzwerke, die den Anforderungen moderner Unternehmen gerecht werden – von kleinen Büroeinheiten bis hin zu komplexen Unternehmensstrukturen.",
            icon: (
               <HouseWifi
                  width={"100%"}
                  height={"100%"}
                  className="stroke-primaryDarkGrey"
               />
            ),
         },
      ],
   },
   {
      name: "location",
      title: "Standort und internationale Kontakte",
      description:
         "Unser Hauptsitz befindet sich in einem Gewerbegebiet der Hauptstadt, das optimal an die Verkehrsinfrastruktur angebunden ist. Dies ermöglicht eine schnelle und zuverlässige Abwicklung von Aufträgen. Darüber hinaus pflegen wir internationale Kontakte nach England, Spanien, China und den USA, um unseren Kunden die besten Lösungen anzubieten. Diese Partnerschaften ermöglichen es uns, stets die neuesten Technologien anzubieten und globale Innovationen in unsere Lösungen zu integrieren.",
   },
   {
      name: "director",
      title: "Über unseren Geschäftsführer",
      description:
         "Unser Geschäftsführer Tim Baumann ist ein dynamischer und visionärer IT-Fachmann, der mit frischen Ideen und einer klaren Vorstellung für die Zukunft die MediaSOL GmbH leitet. Mit einem jungen, modernen Ansatz führt er das Unternehmen in eine neue Ära, die sowohl technische Innovation als auch kundenorientierte Services fördert. Sein Ziel ist es, MediaSOL ein zeitgemäßes Image zu verleihen, das junge Kunden anspricht und bestehende Partnerschaften stärkt. Tim hat das Unternehmen von seinem Vater übernommen, der die Firma über viele Jahre mit viel Engagement aufgebaut hat. Mit seinem Fachwissen und seiner Leidenschaft für IT hat Tim den Betrieb erweitert, modernisiert und neue Geschäftsfelder erschlossen. Unter seiner Leitung ist MediaSOL nicht nur ein verlässlicher Partner für bestehende Kunden, sondern auch ein attraktiver Anbieter für die nächste Generation von Unternehmen.",
   },
   {
      name: "ourColleagues",
      title: "Unser Team",
      description:
         "Unser Team besteht aus engagierten Fachleuten, die sich in verschiedenen Bereichen spezialisiert haben. Dazu gehören mehrere erfahrene Verkäuferinnen und Verkäufer, die ihre Expertise aus dem früheren Betrieb des Unternehmens übernommen haben. Hinzu kommen sechs technische Spezialisten, darunter IT-System-Elektroniker, Servicetechniker und Fachinformatiker, die für die technische Unterstützung unserer Kunden sorgen. Das Team wird in naher Zukunft durch drei zusätzliche Techniker erweitert, um unserem wachsenden Kundenstamm gerecht zu werden. Zusätzlich bieten wir jungen Talenten Ausbildungsplätze als IT-System-Elektroniker und Fachinformatiker an. Unser Team zeichnet sich durch eine offene Unternehmenskultur, Teamgeist und kontinuierliche Weiterbildung aus.",
   },
   {
      name: "workWithUs",
      title: "Bereit, mit uns zu arbeiten?",
      description:
         "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren. Unser Team steht Ihnen mit Fachwissen, Engagement und persönlicher Beratung zur Seite. Wir freuen uns darauf, von Ihnen zu hören und gemeinsam mit Ihnen innovative Lösungen für Ihre IT-Herausforderungen zu entwickeln!",
   },
];

const SectionAboutPage = ({
   title,
   description,
}: IAboutSectionData): JSX.Element => {
   function createDescription(): ReactNode {
      if (typeof description == "string") {
         return <p className="text-sm text-justify">{description}</p>;
      } else {
         return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
               {description.map((data) => (
                  <div
                     key={data.title}
                     className="bg-primaryLightGrey p-4 rounded-md shadow-sm flex gap-3 items-center justify-start"
                  >
                     <div className="min-h-16 min-w-16 h-16 w-16">
                        {data.icon}
                     </div>
                     <div>
                        <h3 className="text-md font-semibold">{data.title}</h3>
                        <p className="text-sm mt-1 text-primaryDarkGrey">
                           {data.text}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         );
      }
   }

   return (
      <section className={"About__" + title + " mt-6"}>
         <h2 className="text-2xl font-semibold text-left mb-2">{title}</h2>
         {createDescription()}
      </section>
   );
};

export const About = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div className="m-auto flex flex-col">
         <section className="About__description flex gap-4 justify-start items-center flex-col lg:flex-row">
            <Link
               to={screenList.home.path}
               className="w-full max-w-[200px] lg:w-1/2"
            >
               <img src={import.meta.env.BASE_URL + "/mainIcon.svg"} alt="M" />
            </Link>
            <div className="text-left py-6">
               <h1 className="text-2xl font-bold">Über MediaSOL GmbH</h1>
               <p className="text-sm text-gray-600">
                  Ihr zuverlässiger Partner für IT-Beratung, technische Lösungen
                  und Innovation.
               </p>
            </div>
         </section>

         {aboutSectionData.map((sectionData) => {
            if (sectionData.name == "location") {
               return (
                  <Fragment key={sectionData.name}>
                     <SectionAboutPage
                        {...sectionData}
                        key={sectionData.name}
                     />
                     <MapContainer
                        center={[51.567441, 6.738321]}
                        zoom={14}
                        scrollWheelZoom={false}
                        className="rounded-md border-[1px] border-solid border-black w-full z-0 h-96 mt-5"
                     >
                        <MapController />
                        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[51.567441, 6.738321]}>
                           <Popup>
                              <div className="text-center">
                                 MediaSOL
                                 <br /> ist da!
                              </div>
                           </Popup>
                        </Marker>
                     </MapContainer>
                     <h2 className="text-2xl font-semibold text-left mt-3">
                        Unsere Partner
                     </h2>
                     <OurPartners />
                  </Fragment>
               );
            }
            return <SectionAboutPage {...sectionData} key={sectionData.name} />;
         })}

         <CustomBtn
            onClick={() => navigate(screenList.contact.path)}
            btnText="Zur Kontaktseite"
            className="mt-6"
         />
      </div>
   );
};
