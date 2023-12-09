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
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="py-6 px-8 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <div className="flex items-center mt-1">
                <FaEnvelope className="mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-4 w-full rounded-md border focus:ring-1 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <div className="flex items-center mt-1">
                <FaLock className="mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 px-4 w-full rounded-md border focus:ring-1 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <button className="py-2 px-6 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
