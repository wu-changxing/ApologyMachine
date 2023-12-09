import React, { useState } from 'react';

const Payment = () => {
  const [compliment, setCompliment] = useState('');

  const handleComplimentChange = (event) => {
    setCompliment(event.target.value);
  };

  const handlePaymentSubmit = () => {
    // Implement your payment or compliment submission logic here
    console.log(compliment);
  };

  return (
    <div className="payment-page-container">
      <div className="payment-card">
        <p>To pay for the attack, pay me a compliment</p>
        <p>e.g. "You're so funny!"</p>
        <input 
          type="text" 
          placeholder="Type compliment here!" 
          value={compliment} 
          onChange={handleComplimentChange} 
        />
        <button onClick={handlePaymentSubmit}>Pay now!</button>
      </div>
    </div>
  );
};

export default Payment;