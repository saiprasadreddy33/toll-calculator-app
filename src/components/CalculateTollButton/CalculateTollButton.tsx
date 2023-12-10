// CalculateTollButton.tsx

import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { decode } from '@googlemaps/polyline-codec';
import 'leaflet/dist/images/marker-icon.png';

import './calculateTollButton.module.css';

const CalculateTollButton: React.FC = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [markers, setMarkers] = useState<L.Marker[]>([]);
  const [polyline, setPolyline] = useState<string>('');
  const [tollDetails, setTollDetails] = useState<any[]>([]);

  useEffect(() => {
    if (map) {
      // Initialize the map and add event listener for clicks
      map.on('click', handleMapClick);

      // Clean up event listener on component unmount
      return () => {
        map.off('click', handleMapClick);
      };
    }
  }, [map]);

  const handleMapClick = (event: L.LeafletMouseEvent) => {
    // Get the clicked coordinates
    const { lat, lng } = event.latlng;

    // Create a marker and add it to the map
    const marker = L.marker([lat, lng], { draggable: true }).addTo(map as L.Map);
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    // Update the polyline with the new marker's coordinates
    updatePolyline();
  };

  const updatePolyline = () => {
    const updatedPolyline = markers.map((marker) => marker.getLatLng()).map(({ lat, lng }) => [lat, lng]);
    setPolyline(L.polyline.encode(updatedPolyline));
  };

  const decodePolyline = (encodedPolyline: string) => {
    return decode(encodedPolyline, 5); // Specify precision (e.g., 5)
  };

  const calculateToll = async () => {
    // Use the toll calculation API with the polyline and vehicle details
    const apiKey = 'fH9dp4BG2Q973Fj2JBQ3HhjP64L8g9bN';
    const apiUrl = 'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service';

    const decodedPolyline = decodePolyline(polyline);

    const payload = {
      mapProvider: 'here',
      polyline: decodedPolyline,
      // Add other necessary details from the requirements
    };

    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        handleTollDetails(result);
      } else {
        throw new Error('Failed to fetch toll details');
      }
    } catch (error) {
      console.error('Error fetching toll details:', error);
    }
  };

  const handleTollDetails = (data: any) => {
    setTollDetails(data.tollDetails);

    markers.forEach((marker, index) => {
      const tollInfo = data.tollDetails[index];
      const popupContent = `<b>Toll Details:</b><br>Cost: ${tollInfo.cost}<br>Additional Details: ${tollInfo.additionalDetails}`;
      marker.bindPopup(popupContent).openPopup();
    });
  };

  return (
    <div className="container">
      <button id="calculateToll" onClick={calculateToll}>
        Calculate Toll
      </button>
      <div id="leafletMapContainer" className="leaflet-container" ref={(el) => el && !map && setMap(L.map(el))} />
    </div>
  );
};

export default CalculateTollButton;
