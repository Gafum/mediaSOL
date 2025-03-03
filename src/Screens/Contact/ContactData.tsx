import {
   Github,
   LandPlot,
   Mail,
   Phone,
   Play,
   SquareChartGantt,
   Youtube,
} from "lucide-react";

export interface IcontactDataProps {
   title: string;
   text: string;
   icon: JSX.Element;
}

export interface IfollowUsData {
   title: string;
   link: string;
   icon: JSX.Element;
}

export const followUsData: IfollowUsData[] = [
   {
      title: "YouTube",
      link: "https://github.com/Gafum",
      icon: <Youtube width={20} color="#fff" />,
   },
   {
      title: "GitHub",
      link: "https://www.youtube.com/@gafum",
      icon: <Github width={20} color="#fff" />,
   },
   {
      title: "Google Play",
      link: "https://play.google.com/store/apps/dev?id=5298640550031789087",
      icon: <Play width={20} color="#fff" />,
   },
];

export const contactData: IcontactDataProps[] = [
   {
      title: "Adresse",
      text: "Hauptstraße 123, 46535 HaupStadt",
      icon: <LandPlot width={20} color="#ffffff" />,
   },
   {
      title: "Telefon",
      text: "+49 000 00 00000",
      icon: <Phone width={20} color="#ffffff" />,
   },
   {
      title: "E-Mail",
      text: "kontakt@mediasol.de",
      icon: <Mail width={20} color="#ffffff" />,
   },
   {
      title: "Öffnungszeiten",
      text: "Montag - Freitag, 9:00 - 18:00 Uhr",
      icon: <SquareChartGantt width={20} color="#ffffff" />,
   },
];
