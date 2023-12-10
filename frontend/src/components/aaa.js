import React from 'react';
import { Link } from 'react-router-dom';
import Receiver from './Receiver';
import { FaRobot } from 'react-icons/fa'; // Ensure FaRobot is imported if you're using it

function Aaa() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <p>This is the Receiver Page.</p>
      <div className="flex flex-row justify-center w-full px-4 mt-6">
        <div className="flex-1">
          <Receiver />
        </div>
      </div>
      
      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <Link to="/strategy" className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700">
          <FaRobot className="inline-block mr-2" />
          Next
        </Link>
      </div>
    </div>
  );
}

export default Aaa;
