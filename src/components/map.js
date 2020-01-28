import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.location.lat, lng: props.location.lon }}
  >
    <Marker position={{ lat: props.location.lat, lng: props.location.lon }} />
  </GoogleMap>
))

export default Map
