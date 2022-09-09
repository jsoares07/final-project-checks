import React, { useState, useEffect, useContext } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


import { Circle } from '@react-google-maps/api';
import { Rectangle } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import Card from "./card.js";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";


export default function MapTest() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
}

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { store, actions } = useContext(Context);

  const { latitude, longitude } = store.userPosition;
  const center = { lat: latitude, lng: longitude }

  const list = [
    {
      id: 1,
      title: "The Ghost Sequences",
      author: "A. C. Wise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra pulvinar. Integer gravida arcu turpis, et lacinia lectus finibus quis.",
      buttonLabel: "Find Out More!",
      position: { lat: 42.110053, lng: -8.836440 }
    },
    {
      id: 2,
      title: "We",
      author: "by Yevgeny Zamyatin",
      imageUrl: 'we.jpg',
      description:
        "We is set in the twenty-sixth century AD in the OneState: a totalitarian society completely based on rationality and mathematics.",
      buttonLabel: "Find Out More!",
      position: { lat: 42.119510, lng: -8.851057 }
    },
    {
      id: 3,
      title: "Tyll-ebook",
      author: "Daniel Kehlmann",
      imageUrl: 'we.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra pulvinar. Integer gravida arcu turpis, et lacinia lectus finibus quis. In sit amet aliquam libero, et convallis magna.",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3379936, lng: -6.2575734 }
    },
    {
      id: 4,
      title: "Nature and Value",
      author: "Akeel Bilgrami",
      imageUrl: 'we.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra pulvinar. Integer gravida arcu turpis, et lacinia lectus finibus quis. In sit amet aliquam libero, et convallis magna.",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3279736, lng: -6.2372734 }
    },
    {
      id: 5,
      title: "The Everlasting",
      author: "Katy Simpson Smith",
      imageUrl: 'we.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra pulvinar. Integer gravida arcu turpis, et lacinia lectus finibus quis.",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3479736, lng: -6.2792734 }
    },
    {
      id: 6,
      title: "Hamlet",
      author: "William Shakespeare",
      imageUrl: 'we.jpg',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra pulvinar. Integer gravida arcu turpis, et lacinia lectus finibus quis. In sit amet aliquam libero, et convallis magna. Etiam vulputate maximus libero, in fermentum turpis laoreet eget. Integer lobortis auctor cursus.",
      buttonLabel: "Find Out More!",
      position: { lat: 53.3179736, lng: -6.2972734 }
    },

  ];

  const handleActiveMarker = (list) => {
    if (list === activeMarker) {
      return;
    }
    setActiveMarker(list);
  };

  const handleOnClick = async () => {
    actions.getUserPosition()
  }




  return (
    <div className="container center">
      <h1 className="text-center pt-5">Books Nearby</h1>
      <br></br>
      <div class="col-md-12 text-center m-5">
      <button 
        className="btn btn-primary text-center"
        onClick={() => handleOnClick()}> Get coord</button>
            </div>
      <div id="map"></div>

      <div className="container center my-5">
        
        <div class="row">
          <GoogleMap
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
          >
            {
              list.map(({ id, title, author, description, buttonLabel, position }) => (
                <Marker
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                >
                  {activeMarker === id ? (
                    <InfoWindow onCloseClick={() => setActiveMarker([])}>
                      <div>
                        <Card
                          id={id}
                          title={title}
                          author={author}
                          description={description}
                          buttonLabel={buttonLabel}
                        />
                      </div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            }
            {/* <Marker position={{ lat: 44.015, lng: -80.005 }} />
            <Marker position={{ lat: 44.016, lng: -80.006 }} /> */}
            <Circle center={center} radius={5000} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
