function About() {
   return (
      <div className="max-w-[800px] m-auto flex flex-col gap-4">
         <section className="About__description flex gap-4 justify-start items-center flex-col lg:flex-row">
            <img src="./mainIcon.svg" alt="M" className="w-full max-w-[200px] lg:w-1/2" />
            <p className="text-sm">
               <strong className="text-semibold">MediaSOL GmbH</strong> ist ein IT-Beratungsunternehmen, das Firmen berät, mit passenden Medien ausstattet
               und auf Wunsch die technische Wartung übernimmt.
            </p>
         </section>

         <section className="About__services">
            <h2 className="text-xl font-semibold pt-2">Leistungsspektrum</h2>
            <ol className="text-sm">
               <li>1. Verkauf von technischen Produkten (PCs, Apple Produkte, Drucker, Scanner, Server, Beamer, usw.)</li>
               <li>2. Beratung von Firmen und Schulen</li>
               <li>3. Wartung der Rechner und Server</li>
               <li>4. Netzwerk-Einrichtung</li>
               <li>5. Technischer Support</li>
            </ol>
         </section>

         <section className="About__leadership">
            <h2 className="text-xl font-semibold pt-2">Über unseren Geschäftsführer</h2>
            <p className="text-sm">
               Unser Geschäftsführer Tim Baumann ist ein dynamischer und visionärer IT-Fachmann, der mit frischen Ideen und einer klaren Vorstellung für die Zukunft die MediaSOL GmbH leitet. Mit einem jungen, modernen Ansatz führt er das Unternehmen in eine neue Ära, die sowohl technische Innovation als auch kundenorientierte Services fördert. Sein Ziel ist es, MediaSOL ein zeitgemäßes Image zu verleihen, das junge Kunden anspricht und bestehende Partnerschaften stärkt.
               Tim hat das Unternehmen von seinem Vater übernommen und mit seinem Engagement und seiner Leidenschaft für IT den Betrieb erweitert und modernisiert. Mit Tim an der Spitze ist MediaSOL auf einem stabilen, zukunftsorientierten Weg, der die Stärken der Vergangenheit bewahrt und neue Potenziale eröffnet.
            </p>
         </section>

         <section className="About__team">
            <h2 className="text-xl font-semibold pt-2">Mitarbeiter</h2>
            <p className="text-sm">
               Unser Team besteht aus engagierten Fachleuten, die sich in verschiedenen Bereichen spezialisiert haben. Dazu gehören mehrere erfahrene Verkäuferinnen und Verkäufer, die ihre Expertise aus dem früheren Betrieb des Unternehmens übernommen haben. Hinzu kommen sechs technische Spezialisten, darunter IT-System-Elektroniker, Servicetechniker und Fachinformatiker, die für die technische Unterstützung unserer Kunden sorgen. Das Team wird in naher Zukunft durch drei zusätzliche Techniker erweitert. Zusätzlich bieten wir jungen Talenten Ausbildungsplätze als IT-System-Elektroniker und Fachinformatiker an.
            </p>
         </section>

         <section className="About__location">
            <h2 className="text-xl font-semibold pt-2">Standort und internationale Kontakte</h2>
            <p className="text-sm">
               MediaSOL ist ein Unternehmen mit internationalen Kontakten nach England, Spanien, China und den USA. Der Firmenstandort sowie der ehemalige Elektrogroßhandel befinden sich in einem Gewerbegebiet in Dinslaken.
            </p>
         </section>
      </div>
   );
}

export default About;
