import React from 'react';
import { Link } from 'react-router-dom';
import Receiver from './Receiver';
import { FaRobot } from 'react-icons/fa';

function Aaa() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', textAlign: 'center' }}>
      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>This is the Receiver Page.</p>
      <Receiver />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/strategy" className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 inline-flex items-center justify-center">
          <FaRobot className="inline-block mr-2" />
          Next
        </Link>
      </div>
    </div>
  );
}

export default Aaa;
