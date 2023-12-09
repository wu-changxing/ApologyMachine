import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example POST request to FastAPI backend
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data); // Handle the response data
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h3 className="text-3xl font-semibold text-center mb-6">Login to your account</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center border rounded-md p-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow py-2 px-2 outline-none"
                />
              </div>
              <div className="flex items-center border rounded-md p-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow py-2 px-2 outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                Login
              </button>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
