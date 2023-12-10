import React, { useState } from 'react';
// Import necessary for routing
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [compliment, setCompliment] = useState('');
  const navigate = useNavigate(); // This is to navigate after submitting the compliment if needed

  const handleComplimentChange = (event) => {
    setCompliment(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the compliment submission to the backend
    console.log(compliment);
    // Optionally navigate to another page or display a message
    // navigate('/thank-you'); // Redirect to a thank-you page, for example
  };

  return (
    <div className="payment-page-container bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <form className="bg-white p-6 rounded-md shadow-md text-center" onSubmit={handlePaymentSubmit}>
        <p className="text-lg font-semibold mb-4">To pay for the attack, pay me a compliment</p>
        <p className="mb-4 italic">e.g. "You’re so funny!"</p>
        <input 
          type="text" 
          placeholder="Type compliment here!" 
          className="border-2 border-gray-200 rounded-md p-2 mb-4 w-full"
          value={compliment} 
          onChange={handleComplimentChange} 
          required // Make sure the input is not empty
        />
        <button 
          type="submit"
          className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 w-full"
        >
          Pay now!
        </button>
      </form>
    </div>
  );
};

export default Payment;
