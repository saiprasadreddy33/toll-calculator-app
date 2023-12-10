// PolylineDecoding.tsx

import React, { useState, useEffect } from 'react';
import { decode } from '@googlemaps/polyline-codec';
import './PolylineDecoding.module.css'; 

interface PolylineDecodingProps {
  encodedPolyline: string;
}

const PolylineDecoding: React.FC<PolylineDecodingProps> = ({ encodedPolyline }) => {
  const [decodedCoordinates, setDecodedCoordinates] = useState<number[][] | null>(null);

  useEffect(() => {
    decodePolyline();
  }, [encodedPolyline]);

  const decodePolyline = () => {
    try {
      const decoded = decode(encodedPolyline, 5); 
      setDecodedCoordinates(decoded);
    } catch (error) {
      console.error('Error decoding polyline:', error);
    }
  };

  return (
    <div>
      <h2>Decoded Polyline Coordinates:</h2>
      {decodedCoordinates ? (
        <ul>
          {decodedCoordinates.map(([lat, lng], index) => (
            <li key={index}>
              Latitude: {lat}, Longitude: {lng}
            </li>
          ))}
        </ul>
      ) : (
        <p>Decoding in progress...</p>
      )}
    </div>
  );
};

export default PolylineDecoding;
