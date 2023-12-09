import React, { useState, useEffect } from 'react';

const NetworkList = () => {
  const [networks, setNetworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Networks updated:", networks);
  }, [networks]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8000/scan')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Response data:", data);
      if (data.network) {
        console.log("Setting networks:", data.network);
        setNetworks(data.network);
      } else {
        console.log("No network field in response. Setting empty array.");
        setNetworks([]);
      }
    })    
    .catch(error => {
      setError(error);
      console.error('There has been a problem with your fetch operation:', error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading networks...</p>;
  }

  if (error) {
    return <p>Error loading networks: {error}</p>;
  }
  

  return (
    <div>
      {setIsLoading && networks.length === 0 ? (
        <p>No networks available.</p>
      ) : (
        networks.map(network => (
          <div key={network.BSSID} style={{ marginBottom: '10px', border: '1px solid gray', padding: '10px' }}>
            <p>SSID: {network.SSID}</p>
            <p>BSSID: {network.BSSID}</p>
            <p>RSSI: {network.RSSI}</p>
            <p>Channel: {network.CHANNEL}</p>
            <p>HT: {network.HT}</p>
            <p>CC: {network.CC}</p>
            <p>Security: {network.SECURITY}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NetworkList;
