// UserEducation.tsx

import React from 'react';

import './UserEducation.module.css'; // Import your stylesheet

const UserEducation: React.FC = () => {
  return (
    <div className="user-education-container">
      <h2>User Education</h2>
      <p>
        Learn how toll calculations are performed and understand the factors affecting toll costs with our interactive guide.
      </p>
      {/* Add more educational content or tooltips as needed */}
    </div>
  );
};

export default UserEducation;
