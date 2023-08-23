import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const GOOGLE_MAPS_API_KEY = "AIzaSyDqFvKNd_v1cvfYXvO5ojC0H52LWLfDPVE";

const Map = () => {
  const [source, setSource] = useState("Everwin Public School, 3rd Main Road,Everwin Public School, 3rd Main Road, Ayyavu");
  const [destination, setDestination] = useState("Virugambakkam");
  const [waypoints, setWaypoints] = useState(["koyambedu"]);
  const [markers, setMarkers] = useState([]);

  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };

  const handleApiLoaded = (map, maps) => {
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer({
      map,
    });

    const waypointsList = waypoints.map((waypoint) => ({
      location: waypoint,
      stopover: true,
    }));
    let request = {
      origin: source,
      destination: destination,
      optimizeWaypoints: true,
      waypoints : waypointsList,
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        const distance = result.routes[0].legs.reduce((acc, leg) => {
          return acc + leg.distance.value;
        }, 0);
        console.log("resuktmap",((distance/1000)+'KMS'));
        directionsRenderer.setDirections(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  const handleMarkerDragEnd = (markerIndex, { lat, lng }) => {
    const newMarkers = [...markers];
    newMarkers[markerIndex] = { lat, lng };
    setMarkers(newMarkers);
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            onDragEnd={(e) => handleMarkerDragEnd(index, e)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
