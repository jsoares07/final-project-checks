import React, { useState, useEffect, useContext } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { GoogleMapAPIKEY } from "../../../../secrets.js";
import { Circle } from '@react-google-maps/api';
import { Rectangle } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import Card from "./card.js";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";


export default function MapTest() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleMapAPIKEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
}

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { store, actions } = useContext(Context);

  const list = [
    {
      id: 1,
      title: "Jose",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3229436, lng: -6.2772334 }
    },
    {
      id: 2,
      title: "We",
      title2: "by Yevgeny Zamyatin",
      imageUrl: 'we.jpg',
      description:
        "We is set in the twenty-sixth century AD in the OneState: a totalitarian society completely based on rationality and mathematics.",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3279736, lng: -6.2772734 }
    },

  ];
  const listOfCards = list.map((cardItem) => {
    return (
      <Card
        id={cardItem.id}
        title={cardItem.title}
        title2={cardItem.title2}
        description={cardItem.description}
        buttonLabel={cardItem.buttonLabel}
      />
    );
  });

  console.log('hola', store.userPosition)

  const { latitude, longitude } = store.userPosition;
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []); //useMemo hook basically memorize the result when  we move around the map, performs the calculation once everytime the dependencies which is the array argument at the end. And because there  is no dependendencies (empty array) it will calculate the value we put (exe: { lat: 44, lng: -80 }) and reuse that every time we rerender so it fix a problem in wich the maps reset everynow and then.

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
  }

  const handleActiveMarker = (list) => {
    if (list === activeMarker) {
      return;
    }
    setActiveMarker(list);
  };

  return (
    <div className="container center">
      <h1 className="text-center pt-5">Books Nearby</h1>
      <br></br>
      <div id="map"></div>
      <div className="container center m-5">
        <div class="row">
          <GoogleMap
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
          >
            {
              list.map(({ id, position }) => (
                <Marker
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                >
                  {activeMarker === id ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{listOfCards}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            }
            {/* <Marker position={{ lat: 44.015, lng: -80.005 }} />
            <Marker position={{ lat: 44.016, lng: -80.006 }} /> */}
            <Circle center={center} radius={10000} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
