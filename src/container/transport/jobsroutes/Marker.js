import React from 'react';
import { Marker as GoogleMapMarker } from 'google-maps-react';

const Marker = props => {
  const { lat, lng, onClick, title, onDragEnd } = props;

  return (
    <GoogleMapMarker
      position={{ lat, lng }}
      onClick={onClick}
      title={title}
      onDragEnd={onDragEnd}
      draggable={true}
    />
  );
};

export default Marker;