import React, { useState } from 'react';
import WifiLogo from "../assets/confirm-wifi-2.png";

const PopApology = () => {
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');

    // Handle name change in the placeholder
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Handle response selection
    const handleResponse = (responseType) => {
        setResponse(responseType);
        submitUserData();
    };
    const handle_Response = (responseType) => {
        setResponse(responseType);
        submit_UserData();
    };
    
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
    
    // 点击No worries按钮时 使用
    async function submit_UserData() {
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
            const response = await fetch("http://localhost:8000/submit-user-data", {
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
      
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <img src={WifiLogo} alt="Confirm Wifi" className="wifi-logo" />
            <div className="bg-red-200 rounded p-4 text-center mb-4">
                <img src="path-to-your-sorry-image.png" alt="Sorry" className="mx-auto mb-4" />
                <p className="text-gray-700 mb-4">
                    Whoops, I accidentally sent the attack to
                    <input
                        type="text"
                        placeholder="[insert name]"
                        value={name}
                        onChange={handleNameChange}
                        className="mx-1 px-2 py-1 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    />
                    and 5 other randos in the hotspot list :/ Sorry!
                </p>
                <div className="flex space-x-4">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                        onClick={() => handle_Response('No worries')}
                    >
                        No worries :)
                    </button>
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
    );
};

export default PopApology;
