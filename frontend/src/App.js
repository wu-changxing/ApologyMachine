import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Import the new Home component
import Landing from "./components/Landing"; // Import the new Landing component
import Login from "./components/Login"; // Import the new Login component
import Strategy from "./components/Strategy"; // Import the new Strategy component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/strategy" element={<Strategy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
