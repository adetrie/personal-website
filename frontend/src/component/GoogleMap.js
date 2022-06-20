import {GoogleApiWrapper, Map} from "google-maps-react";

const GoogleMap = ({ google, locations = [] }) => {
    return (
        <Map
            google={google}
            zoom={14}
            initialCenter={{lat: 49.611621, lng: 6.1319346}}
        >

        </Map>
    )
};
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCu6xEFbN0BP7IkcAWXHc0QpDPiK2JCjOI")
})(GoogleMap)