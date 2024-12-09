import { useNavigate } from "react-router-dom";
import { screenList } from "../../../Routing/RoutingList";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";

export const ConsultationService = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div className=" text-gray-800">
         {/* Hero Section */}
         <section className="bg-primaryBlue text-white py-20 px-4 text-center rounded-md">
            <h1 className="text-4xl font-bold mb-4 text-white">
               Professionelle Beratung für Firmen und Schulen
            </h1>
            <p className="text-lg mb-6 text-white">
               Innovative Lösungen für eine bessere Zukunft
            </p>

            <CustomBtn
               onClick={() => navigate(screenList.contact.path)}
               btnText="Jetzt Kontakt aufnehmen"
               className="w-1/2 min-w-200px font-semibold"
               bgColor="white"
               color="primaryBlue"
            />
         </section>

         {/* Überblick */}
         <section className="py-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">
               Was wir bieten
            </h2>
            <p className="text-center max-w-2xl mx-auto">
               Wir bieten maßgeschneiderte Beratungsdienste für Firmen und
               Schulen. Unser Ziel ist es, innovative und praktische Lösungen zu
               liefern, die den Erfolg unserer Kunden unterstützen.
            </p>
         </section>

         <div className="w-1/4 h-[3px] bg-primaryBlue m-auto" />

         {/* Dienstleistungen */}
         <section className="py-16">
            <h2 className="text-3xl font-semibold text-center mb-8">
               Unsere Dienstleistungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               <div className="bg-primaryLightGrey rounded-lg px-6 py-10 text-center">
                  <h3 className="text-xl font-semibold mb-4">Schulberatung</h3>
                  <p>
                     Unterstützung bei der Entwicklung moderner Lehrpläne und
                     digitaler Tools.
                  </p>
               </div>
               <div className="bg-primaryLightGrey rounded-lg px-6 py-10 text-center">
                  <h3 className="text-xl font-semibold mb-4">Firmenberatung</h3>
                  <p>
                     Beratung zu Teammanagement, Digitalisierung und
                     Geschäftsoptimierung.
                  </p>
               </div>
               <div className="bg-primaryLightGrey rounded-lg px-6 py-10 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                     Workshops und Seminare
                  </h3>
                  <p>
                     Wir organisieren interaktive Schulungen, um neue
                     Fähigkeiten zu vermitteln.
                  </p>
               </div>
            </div>
         </section>

         {/* CTA Block */}
         <section className="py-20 px-4 bg-primaryPink rounded-md text-center">
            <h2 className="text-3xl font-semibold mb-6 text-white">
               Bereit, den nächsten Schritt zu gehen?
            </h2>
            <p className="text-lg mb-8 text-white">
               Lassen Sie uns gemeinsam Ihre Ziele erreichen. Kontaktieren Sie
               uns, um mehr über unsere Dienstleistungen zu erfahren.
            </p>
            <CustomBtn
               onClick={() => navigate(screenList.contact.path)}
               btnText="Jetzt Kontakt aufnehmen"
               className="w-1/2 min-w-200px font-semibold"
               bgColor="white"
               color="primaryPink"
            />
         </section>
      </div>
   );
};
