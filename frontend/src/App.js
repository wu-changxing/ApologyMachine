import React from "react";
import SorryLogo from "./assets/wifi-robot-say-sorry_1.png";

import Welcome from "./Components/Welcome.js";

function App() {
  return (
    <>
      <div className="p-6 bg-gray-100">
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
    </>
  );
}

export default App;
