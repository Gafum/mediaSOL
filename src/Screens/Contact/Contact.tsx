import { LandPlot, Mail, Phone, SquareChartGantt } from "lucide-react";
import { contactData } from "./ContactData";
import { ContactForm } from "./MyComponents/ContactForm";

interface IParagraphWithTitleProps {
   title: string;
   text: string;
   icon: JSX.Element;
}

export const ParagraphWithTitle = ({
   icon,
   title,
   text,
}: IParagraphWithTitleProps): JSX.Element => {
   return (
      <p className="w-full flex justify-start gap-2">
         <strong className="flex gap-1">
            {icon}
            {title}:
         </strong>
         <span>{text}</span>
      </p>
   );
};

const paragraphsInContacts: IParagraphWithTitleProps[] = [
   {
      title: "Adresse",
      text: contactData.address,
      icon: <LandPlot width={20} />,
   },
   {
      title: "Telefon",
      text: contactData.telephone,
      icon: <Phone width={20} />,
   },
   {
      title: "E-Mail",
      text: contactData.email,
      icon: <Mail width={20} />,
   },
   {
      title: "Öffnungszeiten",
      text: contactData.openTime,
      icon: <SquareChartGantt width={20} />,
   },
];

export const Contact = (): JSX.Element => {
   return (
      <div className="grid w-full gap-4 grid-cols-2">
         <div className="flex flex-col items-center justify-center gap-2 w-full bg-primaryBlue h-full p-4 rounded-md">
            <p className="text-left">
               Wir freuen uns, von Ihnen zu hören! Ob technische Beratung,
               individuelle Angebote oder einfach nur eine Frage – unser
               Support-Team hilft Ihnen gerne weiter.
            </p>
            {paragraphsInContacts.map((paragraphData) => {
               return (
                  <ParagraphWithTitle
                     {...paragraphData}
                     key={paragraphData.text}
                  />
               );
            })}
         </div>

         <div className="w-full bg-primaryPink p-4 rounded-md">
            <ContactForm />
         </div>
      </div>
   );
};
