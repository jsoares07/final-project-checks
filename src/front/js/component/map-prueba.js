import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapAPIKEY } from "../../../../secrets.js";

class MapTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverserGeocodeCoordinates = this.reverserGeocodeCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log(position.coords)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverserGeocodeCoordinates()
    }

    reverserGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${GoogleMapAPIKEY}`)
            .then(respond => respond.json())
            .then(data => this.setState({
                userAddress: data.results[0].formatted_address
            }))
            .catch(error => alert(error))
    }

    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert("An unknown error occurred.")
        }
    }

    render() {
        return (
            <div className="container center">
                <div className="MapTest">
                    <h2>
                        React Geolocation example
                    </h2>
                    <button onClick={this.getLocation}> Get coord</button>
                    <h4> HTML Coord</h4>
                    <p>Latitude: {this.state.latitude}</p>
                    <p>Longitude: {this.state.longitude}</p>
                    <h4> Google  Maps Reverse geocoding</h4>
                    <p>Address: {this.state.userAddress}</p>
                    {
                        this.state.latitude && this.state.longitude ?
                            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${GoogleMapAPIKEY}&callback=initMap&v=weekly`} alt="" />
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default MapTest