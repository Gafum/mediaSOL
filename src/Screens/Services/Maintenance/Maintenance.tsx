import { useNavigate } from "react-router-dom";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";
import { screenList } from "../../../Routing/RoutingList";

export const Maintenance = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div>
         {/* Hero Section */}
         <section className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">
               Wartung der Rechner und Server
            </h1>
            <p className="text-lg text-gray-600">
               Ihre Rechner und Server in sicheren Händen – zuverlässig,
               professionell und effizient.
            </p>
         </section>

         <div className="w-1/4 h-[3px] bg-primaryBlue m-auto" />

         {/* Vorteile der Wartung */}
         <section className="py-12 border-t border-gray-200">
            <h2 className="text-3xl font-semibold text-center mb-8">
               Warum regelmäßige Wartung?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-primaryLightGrey shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                     Maximale Leistung
                  </h3>
                  <p className="text-gray-700">
                     Optimieren Sie die Leistung Ihrer Geräte durch regelmäßige
                     Wartung und verhindern Sie unnötige Ausfallzeiten.
                  </p>
               </div>
               <div className="bg-primaryLightGrey shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                     Längere Lebensdauer
                  </h3>
                  <p className="text-gray-700">
                     Regelmäßige Wartung verlängert die Lebensdauer Ihrer
                     Hardware und spart langfristig Kosten.
                  </p>
               </div>
               <div className="bg-primaryLightGrey shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                     Datensicherheit
                  </h3>
                  <p className="text-gray-700">
                     Schützen Sie Ihre sensiblen Daten durch regelmäßige Updates
                     und Sicherheitschecks.
                  </p>
               </div>
               <div className="bg-primaryLightGrey shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                     Effiziente Arbeitsprozesse
                  </h3>
                  <p className="text-gray-700">
                     Minimieren Sie Unterbrechungen im Arbeitsalltag durch
                     proaktive Wartung Ihrer IT-Systeme.
                  </p>
               </div>
            </div>
         </section>

         {/* Call to Action */}
         <section className="py-20 px-4 bg-primaryPink rounded-md text-center">
            <div className="text-center">
               <h2 className="text-3xl font-semibold mb-6 text-white">
                  Bereit für sichere IT-Systeme?
               </h2>
               <p className="text-lg text-white mb-8">
                  Kontaktieren Sie uns, um mehr über unsere Wartungsservices zu
                  erfahren. Unser Team steht Ihnen zur Seite!
               </p>
               <CustomBtn
                  onClick={() => navigate(screenList.contact.path)}
                  btnText="Jetzt Kontakt aufnehmen"
                  className="w-1/2 min-w-200px font-semibold"
                  bgColor="white"
                  color="primaryPink"
               />
            </div>
         </section>
      </div>
   );
};
