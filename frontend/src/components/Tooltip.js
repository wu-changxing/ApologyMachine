// Tooltip.js
import React from 'react';
import './Tooltip.css'; // This imports the CSS from Tooltip.css

const Tooltip = ({ description }) => {
  // Component definition using the styles defined in Tooltip.css
  return (
    <div className="tooltip">
      {description}
    </div>
  );
};

export default Tooltip;
