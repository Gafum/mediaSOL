import { LandPlot, Mail, Phone, SquareChartGantt } from "lucide-react";

export interface IParagraphWithTitleProps {
   title: string;
   text: string;
   icon: JSX.Element;
}

export const contactData = {
   telephone: "+49 000 00 00000",
   email: "kontakt@mediasol.de",
   address: "Hauptstraße 123, 46535 HaupStadt",
   openTime: "Montag - Freitag, 9:00 - 18:00 Uhr",
};

export const paragraphsInContacts: IParagraphWithTitleProps[] = [
   {
      title: "Adresse",
      text: contactData.address,
      icon: <LandPlot width={20} color="#ffffff" />,
   },
   {
      title: "Telefon",
      text: contactData.telephone,
      icon: <Phone width={20} color="#ffffff" />,
   },
   {
      title: "E-Mail",
      text: contactData.email,
      icon: <Mail width={20} color="#ffffff" />,
   },
   {
      title: "Öffnungszeiten",
      text: contactData.openTime,
      icon: <SquareChartGantt width={20} color="#ffffff" />,
   },
];
