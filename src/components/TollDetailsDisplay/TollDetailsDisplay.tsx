
import React from 'react';

import './tollDetailsDisplay.module.css'; 

interface TollDetailsDisplayProps {
  tollDetails: any[]; 
}

const TollDetailsDisplay: React.FC<TollDetailsDisplayProps> = ({ tollDetails }) => {
    return (
        <div>
          <h3>Toll Details Display</h3>
          <ul>
            {tollDetails.map((toll, index) => (
              <li key={index}>
                <strong>Cost:</strong> {toll.cost}, <strong>Additional Details:</strong> {toll.additionalDetails}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default TollDetailsDisplay;
