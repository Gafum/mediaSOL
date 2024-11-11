import { ReactNode } from "react"

interface IAboutSectionData {
   name: string
   title: string
   description: string | string[]
}

const aboutSectionData: IAboutSectionData[] = [
   {
      name: "services",
      title: "Leistungsspektrum",
      description: [
         "Verkauf von technischen Produkten (PCs, Apple Produkte, Drucker, Scanner, Server, Beamer, usw.)",
         "Beratung von Firmen und Schulen",
         "Wartung der Rechner und Server",
         "Netzwerk-Einrichtung",
         "Technischer Support",
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
      title: "Mitarbeiter",
      description:
         "Unser Team besteht aus engagierten Fachleuten, die sich in verschiedenen Bereichen spezialisiert haben. Dazu gehören mehrere erfahrene Verkäuferinnen und Verkäufer, die ihre Expertise aus dem früheren Betrieb des Unternehmens übernommen haben. Hinzu kommen sechs technische Spezialisten, darunter IT-System-Elektroniker, Servicetechniker und Fachinformatiker, die für die technische Unterstützung unserer Kunden sorgen. Das Team wird in naher Zukunft durch drei zusätzliche Techniker erweitert. Zusätzlich bieten wir jungen Talenten Ausbildungsplätze als IT-System-Elektroniker und Fachinformatiker an.",
   },
   {
      name: "location",
      title: "Standort und internationale Kontakte",
      description:
         "MediaSOL ist ein Unternehmen mit internationalen Kontakten nach England, Spanien, China und den USA. Der Firmenstandort sowie der ehemalige Elektrogroßhandel befinden sich in einem Gewerbegebiet in Hauptstadt.",
   },
]

function SectionAboutPage({
   title,
   description,
}: IAboutSectionData): JSX.Element {
   function createDescription(): ReactNode {
      if (typeof description == "string") {
         return description
      } else {
         return description.map((text) => <li key={text}> {text}</li>)
      }
   }

   return (
      <section className={"About__" + title}>
         <h2 className="text-xl font-semibold pt-2">{title}</h2>
         <p className="text-sm">{createDescription()}</p>
      </section>
   )
}

function About() {
   return (
      <div className="max-w-[800px] m-auto flex flex-col gap-4">
         <section className="About__description flex gap-4 justify-start items-center flex-col lg:flex-row">
            <img
               src="/mainIcon.svg"
               alt="M"
               className="w-full max-w-[200px] lg:w-1/2"
            />
            <p className="text-sm">
               <strong className="text-semibold">MediaSOL GmbH</strong> ist ein
               IT-Beratungsunternehmen, das Firmen berät, mit passenden Medien
               ausstattet und auf Wunsch die technische Wartung übernimmt.
            </p>
         </section>

         {aboutSectionData.map((sectionData) => {
            return <SectionAboutPage {...sectionData} key={sectionData.name} />
         })}
      </div>
   )
}

export default About
