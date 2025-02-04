import { ContactForm } from "./MyComponents/ContactForm";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { paragraphsInContacts } from "./ContactData";
import { ParagraphWithTitle } from "./MyComponents/ParagraphWithTitle";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

export const Contact = (): JSX.Element => {
   return (
      <div className="flex flex-col gap-5 h-full">
         <div className="flex gap-4 border-b-2 border-primaryBlue border-solid pb-8">
            <div className="w-2/3">
               <ContactForm />
            </div>

            <MapContainer
               center={[51.567441, 6.738321]}
               zoom={14}
               scrollWheelZoom={false}
               className="rounded-md border-[1px] border-solid border-black w-1/3"
            >
               <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
               <Marker position={[51.567441, 6.738321]}>
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>
         </div>

         <div className="max-w-[1000px] mx-auto mt-5 grid grid-cols-4 justify-items-center items-start gap-2 w-full">
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
