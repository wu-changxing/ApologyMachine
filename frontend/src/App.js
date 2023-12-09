import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Import the new Home component
import Blanko from "./components/Blanko"; // Import the new Blanko component
import Slido from "./components/Slido"; // Import the new Slido component
import Tetro from "./components/Tetro"; // Import the new Tetro component
import Landing from "./components/Landing"; // Import the new Landing component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/home" element={<Blanko />} />
            <Route path="/slido" element={<Slido />} />
            <Route path="/tetro" element={<Tetro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
