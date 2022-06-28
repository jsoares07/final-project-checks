import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapAPIKEY } from "../../../../secrets.js";

function Prueba() {
    const [latitude, setLatitud] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitud(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log(position.coords)
        })
    }, [])

    return (
        <div className="container center">
            <div className="prueba"></div>
        </div>
    );
}

export default Prueba