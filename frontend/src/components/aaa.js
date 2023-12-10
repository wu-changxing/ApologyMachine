import React from 'react';
import { Link } from 'react-router-dom';
function Aaa() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      This is Receiver Page
      <div >
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          <Link to="/strategy" >
              Next
          </Link>  
        </button>
      </div>
</div>
  );
};

export default Aaa;
