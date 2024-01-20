import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
   const { isLoaded } = useLoadScript({ 
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
   });

   if (!isLoaded) return <div>Loading...</div>

   return (
      <MapComponent />
   );
}

function MapComponent() {
   const mapContainerStyle = useMemo(() => ({
      width: "100vw",
      height: "100vh",
   }), []);

   const center = useMemo(() => ({
      lat: 36.9914,
      lng: -122.0583,
   }), []);

   // restrict zoom to 15
   const options = useMemo(() => ({
      disableDefaultUI: true,
      zoomControl: true,
      minZoom: 15,
      maxZoom: 20,
   }), []);

   return (
      <GoogleMap 
         mapContainerStyle={mapContainerStyle} 
         zoom={15} 
         center={center} 
         options={options}
      ></GoogleMap>
   );
}
