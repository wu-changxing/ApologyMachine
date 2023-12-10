import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./components/Landing"; // Import the new Landing component
import Login from "./components/Login"; // Import the new Login component
import Strategy from "./components/Strategy"; // Import the new Strategy component
import Aaa from "./components/Aaa"; // Import the new aaa component
import Bbb from "./components/Bbb"; // Import the new bbb component
import PopApology from "./components/PopApology"; // Import the new PopApology component
import StrategyErrorApology from "./components/StrategyErrorApology"; // Import the new StrategyErrorApology component
import Payment from "./components/Payment" //import the new Payment component
import Receiver from "./components/Receiver";
import ServiceInterruptionPage from "./components/ServiceInterruptionPage";
function App() {
  return (
<<<<<<< HEAD
    <>
      <div className="header">
        <div className="headers">
          <div className="flex items-center space-x-4">
            <img src={SorryLogo} alt="logo" className="w-24 h-24" />
            <p className="text-lg text-gray-700">
              Hi! my name is Roy Batty. I am an AI and I am perfect. I will never
              apologise for anything.
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xl font-semibold">
            Laugh It Off with Apology Machine: Where Regrets Come with a Side of
            Humor!
          </p>
          <p className="mt-2 text-md">Apology joke of the day:</p>
          <p className="mt-1 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            lacus mauris. Morbi laoreet sollicitudin leo dignissim interdum.
          </p>
        </div>
        <div className="flex p-6 space-x-4">
          <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            target 1
          </button>
          <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            target 2
          </button>
          <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            target 3
          </button>
        </div>
        <div className="p-6">
          <button className="py-2 px-4 font-bold text-white bg-red-500 rounded hover:bg-red-700">
            Attack!
          </button>
        </div>
      </div>
    </>
=======
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/aa" element={<Aaa />} />
            <Route path="/bb" element={<Bbb />} />
            <Route path="/PopApology" element={<PopApology />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Receiver" element={<Receiver />} />
            <Route path="/ServiceInterruptionPage" element={<ServiceInterruptionPage />} />
            <Route path="/StrategyErrorApology" element={<StrategyErrorApology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
>>>>>>> 8933b389d9e382bd1aead668dee5bc69ddb7794a
  );
}

export default App;