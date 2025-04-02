import React from "react";
import "./partners.css";

// Import the asset image
import rectangle1 from '../src/pages/Home/Frame 427320682.png';  // Adjust path if needed

const ValuedPartners = () => {
  return (
    <div className="outer-container">
      <h2 className="header">Valued Partners</h2>
      <div className="inner-container">
        <div className="partners">
          <img
            src={rectangle1}  // Use the imported image here
            alt="Diners Club"
            className="partner-logo"
          />
          {/* Add more images or logos here as needed */}
        </div>
      </div>
    </div>
  );
};

export default ValuedPartners;
