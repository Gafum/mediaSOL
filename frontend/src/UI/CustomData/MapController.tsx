import { useMap } from "react-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { useEffect } from "react";

export const MapController = () => {
   const map = useMap();

   useEffect(() => {
      map.addHandler("gestureHandling", GestureHandling);
      // @ts-expect-error typescript does not see additional handler here
      map.gestureHandling.enable();
   }, [map]);

   return null;
};
