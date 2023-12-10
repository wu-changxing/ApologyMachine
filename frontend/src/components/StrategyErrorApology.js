import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import warning from "../assets/warning.png";
const StrategyErrorApology = () => {
    const [response, setResponse] = useState('');
    async function submitUserData() {
        // 从 localStorage 获取数据
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const receiverName = localStorage.getItem("receiverName");
        const receiverEmail = localStorage.getItem("receiverEmail");
        const message = localStorage.getItem("message");
        const strategy = localStorage.getItem("strategy");
        // 构造要发送的数据
        const userData = {
          username: username,
          email_address: email,
          receiver: receiverName,
          receiver_email_address: receiverEmail,
          message: message,
          strategy: strategy
        };
        console.log(userData);
        try {
          const response = await fetch("http://localhost:8000/flood-victim", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          });
      
          const data = await response.json();
          console.log(data); // 处理或显示响应数据
        } catch (error) {
          console.error("There was an error!", error);
        }
      }
      
    // Function to handle user's response
    const handleResponse = (userResponse) => {
        setResponse(userResponse);
        submitUserData();
    };

    return (
        <div
            style={{
                backgroundImage: `url(${warning})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // This ensures the background covers the full screen height
            }}
        >
         <div className="flex flex-col items-center justify-center h-full p-4" style={{ backgroundColor: 'rgba(255, 192, 203, 0.85)' }}> {/* Adjust the rgba for pink transparency */}
            <div className="bg-pink-300 rounded-lg p-8 text-center mb-4">
      
                <div className="mb-4">
                    <p className="text-lg text-gray-800 font-bold">1102101</p>
                    <p className="text-gray-800">
                        g0lly! Your custom ap0ology is lost in transit...
                    </p>
                    <p className="text-gray-800">
                        I @pologise :C!
                    </p>
                    <p className="text-gray-800">
                        We $ent them $pecial $omething dat should make-up for it
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link to="/PopApology" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                        It's fine :)
                    </Link>
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                        onClick={() => handleResponse('How dare you!')}
                    >
                        How dare you!
                    </button>
                </div>
            </div>
            {response && (
                    <div className="mt-4 p-4 rounded shadow-lg bg-white">
                        <p className="text-gray-800">Your response: <span className="font-semibold">{response}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};


export default StrategyErrorApology;
