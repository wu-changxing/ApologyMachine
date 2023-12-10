// Tooltip.js

// This import is necessary to use JSX
import React from 'react';

// The Tooltip component definition
const Tooltip = ({ description }) => {
  return (
    <div className="tooltip-content" style={{ position: 'absolute', backgroundColor: 'white', border: '1px solid black', padding: '5px' }}>
      {description}
    </div>
  );
};

export default Tooltip;
