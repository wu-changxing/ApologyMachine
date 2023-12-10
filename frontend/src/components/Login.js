
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate 钩子

function LoginPage() {
  const [username, setUsername] = useState(""); // 添加 username 状态
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 创建 navigate 函数实例

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // 检查 email 是否为空
    if (!(username && email && password)) {
      alert("Username, email and password cannot be empty!"); // 显示提示框
      return; // 阻止进一步处理
    }

    // 将 email 和 password 保存到 localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/Landing"); // 导航到 Landing 页面
  };

  return (
    <div className="min-h-screen mt-8 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-center mb-6">Register your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center border rounded-md p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="flex-grow py-2 px-2 outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow py-2 px-2 outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md p-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="flex-grow py-2 px-2 outline-none"
              />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Apologise!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
