import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Receiver = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [career, setCareer] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCareerChange = (e) => setCareer(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && address && phoneNumber && career) {
      const essids = name + email + address + phoneNumber + career +"Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n" +
          "Apology\n" +
          "Machine\n" +
          "is\n" +
          "a\n" +
          "playful\n" +
          "and\n" +
          "innovative\n" +
          "project\n" +
          "developed\n" +
          "for\n" +
          "the\n" +
          "Terrible\n" +
          "Ideas\n" +
          "Hackathon\n" +
          "It\n" +
          "uses\n" +
          "a\n" +
          "Raspberry\n" +
          "Pi\n" +
          "and\n" +
          "wireless\n" +
          "security\n" +
          "techniques\n" +
          "to\n" +
          "hijack\n" +
          "WiFi\n" +
          "networks\n" +
          "and\n" +
          "broadcast\n" +
          "humorous\n" +
          "apologies\n" +
          "This\n" +
          "project\n" +
          "is\n" +
          "intended\n" +
          "for\n" +
          "educational\n" +
          "and\n" +
          "entertainment\n" +
          "purposes\n" +
          "only\n";

      try {
        const response = await fetch('http://localhost:8000/flood-essid', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name, email, address, phoneNumber, career,essids
          }),
        });

        if (response.ok) {
          console.log('Data successfully sent to the server');
          navigate("/strategy");
        } else {
          console.error('Failed to send data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert("All fields are required!");
    }
  };

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Help us craft the perfect apology for your friend</h2>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Career Input */}
          <div className="mb-4">
            <label htmlFor="career" className="block text-gray-700 text-sm font-bold mb-2">Career</label>
            <input type="text" id="career" name="career" value={career} onChange={handleCareerChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Apology now!
          </button>
        </form>
      </div>
  );
};
const inputStyle = { width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' };

export default Receiver;
