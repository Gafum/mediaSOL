import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapController } from "../../UI/CustomData/MapController";
import { twMerge } from "tailwind-merge";

interface IMainMapProps {
   className?: string;
}

export const MainMap = ({ className }: IMainMapProps): JSX.Element => {
   return (
      <MapContainer
         center={[51.567441, 6.738321]}
         zoom={14}
         scrollWheelZoom={false}
         className={twMerge(
            "rounded-md border-[1px] border-solid border-black z-0",
            className
         )}
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
   );
};
