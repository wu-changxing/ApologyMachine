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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('receiverName', name);
    localStorage.setItem('receiverEmail', email);
    localStorage.setItem('receiverAddress', address);
    localStorage.setItem('receiverPhoneNumber', phoneNumber);
    localStorage.setItem('receiverCareer', career);

    if (name && email && address && phoneNumber && career) {
      navigate("/strategy");
    } else {
      alert("All fields are required!");
    }
  };

  return (
      <div className="register-container" style={{ margin: '20px auto', maxWidth: '300px' }}>
        <form onSubmit={handleSubmit} className="register-form" style={{ textAlign: 'left' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>we will use these info to help you have a better apology to your best friend!</h2>

          {/* Name Input */}
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block' }}>Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} style={inputStyle} />
          </div>

          {/* Email Input */}
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block' }}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={inputStyle} />
          </div>

          {/* Address Input */}
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="address" style={{ display: 'block' }}>Address</label>
            <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} style={inputStyle} />
          </div>

          {/* Phone Number Input */}
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="phoneNumber" style={{ display: 'block' }}>Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} style={inputStyle} />
          </div>

          {/* Career Input */}
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="career" style={{ display: 'block' }}>Career</label>
            <input type="text" id="career" name="career" value={career} onChange={handleCareerChange} style={inputStyle} />
          </div>

          <button type="submit" className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 inline-flex items-center justify-center">
            Apology now!
          </button>
        </form>
      </div>
  );
};

const inputStyle = { width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' };

export default Receiver;
