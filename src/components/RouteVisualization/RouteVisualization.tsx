// RouteVisualization.tsx

import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PolylineDecoding from './PolylineDecoding';
import './RouteVisualization.module.css'; 

interface RouteVisualizationProps {
  encodedPolyline: string; // Pass the encoded polyline as a prop
}

const RouteVisualization: React.FC<RouteVisualizationProps> = ({ encodedPolyline }) => {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!map) {
      // Initialize the map
      setMap(L.map('leafletMapContainer').setView([0, 0], 2)); // Set initial view
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map as L.Map); // Add OSM tile layer
    }

    return () => {
      if (map) {
        map.off(); // Remove all event listeners
        map.remove(); // Remove the map instance
      }
    };
  }, [map]);

  return (
    <div className="container">
      <h2>Route Visualization</h2>
      <div id="leafletMapContainer" className="leaflet-container" />
      <PolylineDecoding encodedPolyline={encodedPolyline} />
    </div>
  );
};

export default RouteVisualization;
