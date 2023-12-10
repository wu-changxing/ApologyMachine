// import React, { useState } from "react";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";
// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Example POST request to FastAPI backend
//     const response = await fetch("http://localhost:8000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();
//     console.log(data); // Handle the response data
//   };

//   return (
//       <div className="min-h-screen mt-8 flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
//           <h3 className="text-3xl font-semibold text-center mb-6">Register your account</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div className="flex items-center border rounded-md p-2">
//                 <FaEnvelope className="text-gray-400 mr-2" />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     id="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="flex-grow py-2 px-2 outline-none"
//                 />
//               </div>
//               <div className="flex items-center border rounded-md p-2">
//                 <FaLock className="text-gray-400 mr-2" />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     id="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="flex-grow py-2 px-2 outline-none"
//                 />
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
//                 <Link to="/Landing" >
//                 Apologise!
//                 </Link>  
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// }

// export default LoginPage;
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
    if (!username) {
      alert("Username cannot be empty!"); // 显示提示框
      return; // 阻止进一步处理
    }

    // 将 email 和 password 保存到 localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/Landing"); // 导航到 Landing 页面
  };

  return ( /*min-h-screen --> may need to add again. */
    <div className="mt-8 items-center justify-center bg-gray-100">
      {/* <p>djsfhadsjj</p> */}

      {/* Adding the navigation bar section*/}



      {/* Adding the image and empty div section*/}



      <div className="bg-white flex justify-between items-center">
        <img src="https://media.discordapp.net/attachments/1180824813921648660/1182541926965190726/wifi-robot-say-sorry_1.png?ex=658512fd&is=65729dfd&hm=5ed2b745bfa74188ebb229a0870b7cdcaf4f5e626e1189ed71fa8e0754795c8e&=&format=webp&quality=lossless&width=625&height=625"
          style={{ border: '2px solid #333', borderBottomLeftRadius: '80px', width: '50%', height: '50%' }} />
        <div style={{ minWidth: '300px' }}>

        </div>
      </div>


      <div className="bg-white p-8 rounded-lg">
        <h3 className="text-3xl font-semibold text-center mb-6">You want to say sorry?</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">




            <div className="flex items-center border-b p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setUsername(e.target.value)}
                className="flex-grow py-2 px-2 outline-none"
              />
            </div>




            <div className="flex items-center border-b p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow py-2 px-2 outline-none"
              />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mx-auto">
                Apologise!
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
