import React, { useState, useEffect } from "react";

function Map({ source, destination }) {
  const [directions, setDirections] = useState(null);
  const [waypoints, setWaypoints] = useState([]);

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    directionsRenderer.setMap(null);
    directionsRenderer.setMap(window.map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
  }, [source, destination, waypoints]);

  const addMarker = (location, map, isWaypoint) => {
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      draggable: isWaypoint
    });

    if (isWaypoint) {
      marker.addListener("click", () => {
        const index = waypoints.findIndex(
          (waypoint) =>
            waypoint.lat === location.lat() && waypoint.lng === location.lng()
        );
        const newWaypoints = [...waypoints];
        newWaypoints.splice(index, 1);
        setWaypoints(newWaypoints);
      });

      marker.addListener("dragend", () => {
        const latLng = marker.getPosition();
        const lat = latLng.lat();
        const lng = latLng.lng();
        setWaypoints([...waypoints, { lat, lng }]);
      });
    }
  };

  const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
    const waypointsLocations = waypoints.map((waypoint, index) => {
      return {
        location: new window.google.maps.LatLng(waypoint.lat, waypoint.lng),
        stopover: true
      };
    });

    directionsService.route(
      {
        origin: source,
        destination: destination,
        waypoints: waypointsLocations,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (response, status) => {
        if (status === "OK") {
          setDirections(response);
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  const onLoad = (map) => {
    addMarker(source, map, false);
    addMarker(destination, map, false);
    window.map = map;
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDqFvKNd_v1cvfYXvO5ojC0H52LWLfDPVE" }}
        defaultCenter={{ lat: 13.067439, lng: 80.237617 }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => onLoad(map)}
      />
    </div>
  );
}

export default Map;
