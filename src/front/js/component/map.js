import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { GoogleMapAPIKEY } from "../../../../secrets.js";

export default function MapTest() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleMapAPIKEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []); //useMemo hook basically memorize the result when  we move around the map, performs the calculation once everytime the dependencies which is the array argument at the end. And because there  is no dependendencies (empty array) it will calculate the value we put (exe: { lat: 44, lng: -80 }) and reuse that every time we rerender so it fix a problem in wich the maps reset everynow and then.
  return (
    <div className="container center">
      <h1 className="text-center pt-5">Books Nearby</h1>
      <br></br>
      <div id="map"></div>
      <div className="container center m-5">
        <div class="row">
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
