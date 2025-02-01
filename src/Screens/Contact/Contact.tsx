import { LandPlot, Mail, Phone, SquareChartGantt } from "lucide-react";
import { contactData } from "./ContactData";
import { ContactForm } from "./MyComponents/ContactForm";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

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
      <div className="flex flex-col gap-5 h-full">
         <div className="flex gap-4">
            <div className="w-2/3">
               <ContactForm />
            </div>

            <MapContainer
               center={[51.567441, 6.738321]}
               zoom={17}
               scrollWheelZoom={false}
               className="rounded-md border-[1px] border-solid border-black w-1/3"
            >
               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
         </div>

         <div className="flex flex-col items-center justify-center gap-2 w-full h-full p-4 rounded-md">
            {paragraphsInContacts.map((paragraphData) => {
               return (
                  <ParagraphWithTitle
                     {...paragraphData}
                     key={paragraphData.text}
                  />
               );
            })}
         </div>
      </div>
   );
};
