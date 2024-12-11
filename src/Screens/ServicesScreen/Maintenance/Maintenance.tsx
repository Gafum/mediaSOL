import { useNavigate } from "react-router-dom";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";
import { screenList } from "../../../Routing/RoutingList";
import { ServicesScreen } from "../ServicesScreen";

export const Maintenance = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <ServicesScreen
         ServicesList={[
            {
               title: "Wartung der Rechner und Server",
               description:
                  "Ihre Rechner und Server in sicheren Händen – zuverlässig, professionell und effizient.",
            },
            {
               title: "Warum regelmäßige Wartung?",
               list: [
                  {
                     title: "Maximale Leistung",
                     description:
                        "Optimieren Sie die Leistung Ihrer Geräte durch regelmäßige Wartung und verhindern Sie unnötige Ausfallzeiten.",
                  },
                  {
                     title: "Längere Lebensdauer",
                     description:
                        "Regelmäßige Wartung verlängert die Lebensdauer Ihrer Hardware und spart langfristig Kosten.",
                  },
                  {
                     title: "Datensicherheit",
                     description:
                        "Schützen Sie Ihre sensiblen Daten durch regelmäßige Updates und Sicherheitschecks.",
                  },
                  {
                     title: "Effiziente Arbeitsprozesse",
                     description:
                        "Minimieren Sie Unterbrechungen im Arbeitsalltag durch proaktive Wartung Ihrer IT-Systeme.",
                  },
               ],
            },
            {
               title: "Bereit für sichere IT-Systeme?",
               description:
                  "Kontaktieren Sie uns, um mehr über unsere Wartungsservices zu erfahren. Unser Team steht Ihnen zur Seite!",
               bg: "primaryPink",
               button: true,
            },
         ]}
      />
   );

   return (
      <div>
         <div className="w-1/4 h-[3px] bg-primaryBlue m-auto" />

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
