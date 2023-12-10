import React, { useState } from 'react';

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the registration logic here
    // This might involve sending a request to your backend server
    console.log(user);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register account for your best friend</h2>
        <div className="input-group">
          <label htmlFor="username">
            <i className="fas fa-user" /> Insert Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">Register now!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
