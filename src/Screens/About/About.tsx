import { ReactNode } from "react";
import { screenList } from "../../Routing/RoutingList";
import { Link, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";

interface IAboutSectionData {
   name: string;
   title: string;
   description: string | { title: string; text: string }[];
}

const aboutSectionData: IAboutSectionData[] = [
   {
      name: "shortDescription",
      title: " Über Uns",
      description:
         "MediaSOL GmbH ist ein IT-Beratungsunternehmen, das Firmen berät, mit passenden Medien ausstattet und auf Wunsch die technische Wartung übernimmt",
   },
   {
      name: "services",
      title: "Leistungsspektrum",
      description: [
         {
            title: "Verkauf von technischen Produkten",
            text: "PCs, Apple-Produkte, Drucker, Scanner, Server, Beamer und vieles mehr – wir bieten hochwertige Technik für Ihre Bedürfnisse.",
         },
         {
            title: "Beratung für Firmen und Schulen",
            text: "Maßgeschneiderte Lösungen, die perfekt zu Ihren Anforderungen passen.",
         },
         {
            title: "Technische Wartung",
            text: "Wartung von Rechnern und Servern für einen reibungslosen Betrieb.",
         },
         {
            title: "Netzwerk-Einrichtung",
            text: "Effiziente Netzwerke für Ihre IT-Infrastruktur.",
         },
      ],
   },
   {
      name: "director",
      title: "Über unseren Geschäftsführer",
      description:
         "Unser Geschäftsführer Tim Baumann ist ein dynamischer und visionärer IT-Fachmann, der mit frischen Ideen und einer klaren Vorstellung für die Zukunft die MediaSOL GmbH leitet. Mit einem jungen, modernen Ansatz führt er das Unternehmen in eine neue Ära, die sowohl technische Innovation als auch kundenorientierte Services fördert. Sein Ziel ist es, MediaSOL ein zeitgemäßes Image zu verleihen, das junge Kunden anspricht und bestehende Partnerschaften stärkt. Tim hat das Unternehmen von seinem Vater übernommen und mit seinem Engagement und seiner Leidenschaft für IT den Betrieb erweitert und modernisiert.Mit Tim an der Spitze ist MediaSOL auf einem stabilen, zukunftsorientierten Weg, der die Stärken der Vergangenheit bewahrt und neue Potenziale eröffnet.",
   },
   {
      name: "ourColleagues",
      title: "Unser Team",
      description:
         "Unser Team besteht aus engagierten Fachleuten, die sich in verschiedenen Bereichen spezialisiert haben. Dazu gehören mehrere erfahrene Verkäuferinnen und Verkäufer, die ihre Expertise aus dem früheren Betrieb des Unternehmens übernommen haben. Hinzu kommen sechs technische Spezialisten, darunter IT-System-Elektroniker, Servicetechniker und Fachinformatiker, die für die technische Unterstützung unserer Kunden sorgen. Das Team wird in naher Zukunft durch drei zusätzliche Techniker erweitert. Zusätzlich bieten wir jungen Talenten Ausbildungsplätze als IT-System-Elektroniker und Fachinformatiker an.",
   },
   {
      name: "location",
      title: "Standort und internationale Kontakte",
      description:
         "Unser Hauptsitz befindet sich in einem Gewerbegebiet der Hauptstadt. Wir pflegen internationale Kontakte nach England, Spanien, China und den USA, um unseren Kunden die besten Lösungen anzubieten.",
   },
   {
      name: "workWithUs",
      title: "Bereit, mit uns zu arbeiten?",
      description:
         "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren. Wir freuen uns darauf, von Ihnen zu hören!",
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
               {description.map((text) => (
                  <div
                     key={text.title}
                     className="bg-primaryLightGrey p-4 rounded-md shadow-sm"
                  >
                     <h3 className="text-md font-semibold">{text.title}</h3>
                     <p className="text-sm mt-1">{text.text}</p>
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
      <div className="max-w-[900px] m-auto flex flex-col">
         <section className="About__description flex gap-4 justify-start items-center flex-col lg:flex-row">
            <Link
               to={screenList.home.path}
               className="w-full max-w-[200px] lg:w-1/2"
            >
               <img src="/mainIcon.svg" alt="M" />
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
