import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Receiver = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 将数据存储到 localStorage
    localStorage.setItem('receiverName', name);
    localStorage.setItem('receiverEmail', email);
    console.log('Name and Email saved to localStorage');

    // 检查 email 是否已输入
    if (name && email) {
      navigate("/strategy"); // 如果 email 已输入，进行导航
    } else {
      alert("Name an email address cannot be empty!"); // 如果 email 为空，显示提示
    }
  };

  return (
    <div className="register-container" style={{ margin: '20px auto', maxWidth: '300px' }}>
      <form onSubmit={handleSubmit} className="register-form" style={{ textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register account for your dearest friend!</h2>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
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
            value={email}
            onChange={handleEmailChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 inline-flex items-center justify-center">
          Register now!
        </button>
      </form>
    </div>
  );
};

export default Receiver;
