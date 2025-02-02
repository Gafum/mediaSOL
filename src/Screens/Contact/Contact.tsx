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
   text,
}: Omit<IParagraphWithTitleProps, "title">): JSX.Element => {
   return (
      <div className="flex flex-col items-center text-center w-full max-w-[150px]">
         <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primaryBlue">
            {icon}
         </div>
         <span className="mt-4 text-black text-sm">{text}</span>
      </div>
   );
};

const paragraphsInContacts: IParagraphWithTitleProps[] = [
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

         <div className="grid grid-cols-4 justify-items-center items-start  gap-2 w-full max-w-800px m-auto mt-8">
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
