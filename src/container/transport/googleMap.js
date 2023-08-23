import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/pro-light-svg-icons';
const AnyReactComponent = ({ icon }) => (
  <div style={{
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  }}>
    <img src={icon} alt="Marker Icon" />
  </div>
);

const GoogleMap = ({ marker }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map && marker) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(marker.lat, marker.lng));
      map.fitBounds(bounds);
      map.setZoom(14);
    }
  }, [map, marker]);

  const handleMapLoaded = (map, maps) => {
    setMap(map);
    const bounds = new maps.LatLngBounds();
    bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    map.fitBounds(bounds);
    const listener = maps.event.addListener(map, 'idle', () => {
     map.setZoom(14);
      setCenter(map.getCenter());
      maps.event.removeListener(listener);
    });
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDqFvKNd_v1cvfYXvO5ojC0H52LWLfDPVE' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => handleMapLoaded(map, maps)}
      >
        <FontAwesomeIcon
          lat={marker.lat}
          lng={marker.lng}
          icon={faTruck}   style={{ fontSize:'35px',color:'#FFD580'  }}
        />
        
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
