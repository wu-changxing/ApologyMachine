
import React from "react";
import SorryLogo from "../assets/wifi-robot-say-sorry_1.png";
import { FaRobot } from "react-icons/fa";
import NetworkList from "./NetworkList";

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
            <div className="flex flex-row justify-center w-full px-4 mt-6">
                <div className="flex-1">
                    <NetworkList />
                </div>
                <div className="fixed bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                    <button className="py-2 px-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 bottom-0 flex items-center">
                        <FaRobot className="inline-block mr-2" /> Attack!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Landing;

