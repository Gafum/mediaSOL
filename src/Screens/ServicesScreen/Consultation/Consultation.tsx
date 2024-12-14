import { ServicesScreen } from "../ServicesScreen";

export const ConsultationService = (): JSX.Element => {
   return (
      <ServicesScreen
         ServicesList={[
            {
               title: "Professionelle Beratung für Firmen und Schulen",
               description: "Innovative Lösungen für eine bessere Zukunft",
               button: true,
               bg: "primaryBlue",
            },
            {
               title: "Was wir bieten",
               description:
                  "Wir bieten maßgeschneiderte Beratungsdienste für Firmen und Schulen. Unser Ziel ist es, innovative und praktische Lösungen zuliefern, die den Erfolg unserer Kunden unterstützen.",
            },
            {
               title: "Unsere Dienstleistungen",
               list: [
                  {
                     title: "Schulberatung",
                     description:
                        "Unterstützung bei der Entwicklung moderner Lehrpläne und digitaler Tools.",
                  },
                  {
                     title: "Firmenberatung",
                     description:
                        "Beratung zu Teammanagement, Digitalisierung und Geschäftsoptimierung.",
                  },
                  {
                     title: "Workshops und Seminare",
                     description:
                        "Wir organisieren interaktive Schulungen, um neue Fähigkeiten zu vermitteln.",
                  },
               ],
            },
            {
               title: "Bereit, den nächsten Schritt zu gehen?",
               description:
                  "Lassen Sie uns gemeinsam Ihre Ziele erreichen. Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren.",
               button: true,
               bg: "primaryPink",
            },
         ]}
      />
   );
};
