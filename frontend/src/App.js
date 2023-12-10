import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./components/Landing"; // Import the new Landing component
import Login from "./components/Login"; // Import the new Login component
import Strategy from "./components/Strategy"; // Import the new Strategy component
import aaa from "./components/aaa"; // Import the new aaa component
import bbb from "./components/bbb"; // Import the new bbb component
import PopApology from "./components/PopApology"; // Import the new PopApology component
import StrategyErrorApology from "./components/StrategyErrorApology"; // Import the new StrategyErrorApology component
import Payment from "./components/Payment" //import the new Payment component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/aaa" element={<aaa />} />
            <Route path="/bbb" element={<bbb />} />
            <Route path="/PopApology" element={<PopApology />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/StrategyErrorApology" element={<StrategyErrorApology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;