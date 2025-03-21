import { ContactForm } from "./MyComponents/ContactForm";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { contactData, followUsData } from "./ContactData";
import { ParagraphWithTitle } from "./MyComponents/ParagraphWithTitle";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { MapController } from "../../UI/CustomData/MapController";

export const Contact = (): JSX.Element => {
   return (
      <div className="flex flex-col h-full min-h-[86vh]">
         <div className="flex gap-4 mt-5">
            <div className="w-2/3">
               <ContactForm />
            </div>

            <MapContainer
               center={[51.567441, 6.738321]}
               zoom={14}
               scrollWheelZoom={false}
               className="rounded-md border-[1px] border-solid border-black w-1/3 z-0"
            >
               <MapController />
               <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
               <Marker position={[51.567441, 6.738321]}>
                  <Popup>
                     <div className="text-center">
                        MediaSOL
                        <br /> ist da!
                     </div>
                  </Popup>
               </Marker>
            </MapContainer>
         </div>

         <div className="h-[3px] w-full bg-primaryBlue rounded-[3px] mt-12" />

         <SectionWithHeadline className="mt-4" title="Unsere Kontakte ">
            <div className="max-w-[1200px] mx-auto grid grid-cols-4 justify-items-center items-start gap-2 w-full mt-6">
               {contactData.map((paragraphData) => {
                  return (
                     <ParagraphWithTitle
                        {...paragraphData}
                        key={paragraphData.text}
                     />
                  );
               })}
            </div>
         </SectionWithHeadline>

         <div className="h-[3px] w-full bg-primaryBlue rounded-[3px] mt-20" />

         <SectionWithHeadline
            className="mt-6 mb-3"
            title="Folge uns auf Social Media"
         >
            <div className="grid grid-cols-3 justify-items-center gap-3 mt-8">
               {followUsData.map((paragraphData) => {
                  return (
                     <a
                        key={paragraphData.title}
                        href={paragraphData.link}
                        target="_blank"
                        className="w-full"
                     >
                        <CustomBtn
                           btnText={
                              <div className="flex gap-3 justify-center  text-white text-lg items-center">
                                 {paragraphData.icon}
                                 {paragraphData.title}
                              </div>
                           }
                           className="w-full"
                        />
                     </a>
                  );
               })}
            </div>
         </SectionWithHeadline>
      </div>
   );
};
