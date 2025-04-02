import React from "react";
import "./CruiseDeals.css";
import Icon from"../Home/Icon.png";
const CruiseDeals = () => {
  return (
    <div className="cruise-deals">
      <div className="cruise-deals-content">
        <h1>Get Cruise Deals Directly in Your Inbox</h1>
        <p>Sign up to get exclusive offers, discounts, and cruise tips straight to your inbox!</p>
        <div className="email-input-container">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email Address"
          />
          <button className="email-submit-btn">
            <img
              src={Icon}
              alt="Send"
              className="send-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseDeals;
