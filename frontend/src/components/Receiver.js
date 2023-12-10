import React, { useState } from 'react';

const Receiver = () => {
  const [user, setUser] = useState({
    firstname: '',
    nickname: '',
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
    console.log(user);
  };

  return (
    <div className="register-container" style={{ margin: '20px auto', maxWidth: '300px' }}>
      <form onSubmit={handleSubmit} className="register-form" style={{ textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register account for your dearest friend!</h2>        <div className="input-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="firstname" style={{ display: 'block' }}>
          First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="nickname" style={{ display: 'block' }}>
             A.K.A
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={user.nickname}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" className="register-btn" style={{ width: '100%', padding: '8px', backgroundColor: 'blue', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>
          Register now!
        </button>
      </form>
    </div>
  );
};

export default Receiver;
