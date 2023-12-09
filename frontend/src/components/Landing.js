import React from "react";
import SorryLogo from "../assets/wifi-robot-say-sorry_1.png";
import { FaRobot } from "react-icons/fa";

function Landing() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="p-6 text-center">
                <img src={SorryLogo} alt="logo" className="w-32 h-32 mx-auto" />
                <p className="text-lg text-gray-700 mt-4">
                    Hi! My name is Roy Batty. I am an AI, and I am perfect. I will never
                    apologize for anything.
                </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-md mx-auto mt-6">
                <p className="text-2xl font-semibold mb-2">
                    Laugh It Off with Apology Machine: Where Regrets Come with a Side of
                    Humor!
                </p>
                <p className="text-md text-gray-600">
                    Apology joke of the day:
                </p>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                    lacus mauris. Morbi laoreet sollicitudin leo dignissim interdum.
                </p>
            </div>
            <div className="flex space-x-4 mt-6">
                <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Target 1
                </button>
                <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Target 2
                </button>
                <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Target 3
                </button>
            </div>
            <div className="p-6">
                <button className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700">
                    <FaRobot className="inline-block mr-2" /> Attack!
                </button>
            </div>
        </div>
    );
}

export default Landing;
