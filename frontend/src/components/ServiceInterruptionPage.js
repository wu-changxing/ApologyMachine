import React from 'react';
import SorryLogo from "../assets/wifi-robot-say-sorry_1.png";
import WifiLogo from "../assets/confirm-wifi-2.png";

const ServiceInterruptionPage = () => {
  return (
    <div className="service-interruption-page-container">
      <img src={SorryLogo} alt="Sorry Robot" className="sorry-logo" />
      <img src={WifiLogo} alt="Confirm Wifi" className="wifi-logo" />
      <div className="interruption-card">
        <p className="tracking-number">1102101</p>
        <p className="interruption-message">
          Oops! Your custom apology is lost in transit...
          Our apologies for the inconvenience :C
          We've dispatched a special something to make up for it.
        </p>
        <div className="response-buttons">
          <button className="response-btn">It's fine :)</button>
          <button className="response-btn">How dare you!</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceInterruptionPage;
