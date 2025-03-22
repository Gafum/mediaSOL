import {
   BookCheck,
   Computer,
   HouseWifi,
   MonitorSmartphone,
} from "lucide-react";

export interface IAboutSectionData {
   name: string;
   title: string;
   description: string | { title: string; text: string; icon: JSX.Element }[];
}

export const aboutSectionData: IAboutSectionData[] = [
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
