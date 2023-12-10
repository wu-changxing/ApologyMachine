import React, { useState, useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io';

const LaunchPage = () => {
    const [isLaunching, setIsLaunching] = useState(false);
    const [launchStatus, setLaunchStatus] = useState('');

    useEffect(() => {
        if (isLaunching) {
            setLaunchStatus('ThAnks 4 the paymint....');
            setTimeout(() => {
                setLaunchStatus('I Am l@unching the @ttack now 🔫');
            }, 2000);
            setTimeout(() => {
                setLaunchStatus('Pls W8 1 moment...');
            }, 4000);
            setTimeout(() => {
                setLaunchStatus('1100110101102111010');
            }, 6000);
            setTimeout(() => {
                setLaunchStatus('Beep boop meow');
                setIsLaunching(false);
            }, 8000);
        }
    }, [isLaunching]);

    const handleLaunch = () => {
        setIsLaunching(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Operation Cyber Pounce
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-400 font-mono tracking-wider animate-flicker">
                {launchStatus}
            </p>
            <button
                onClick={handleLaunch}
                disabled={isLaunching}
                className={`flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-lg md:text-xl font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${isLaunching && 'opacity-50 cursor-not-allowed'}`}
            >
                <IoIosRocket className="text-2xl mr-3" />
                {isLaunching ? 'Launching...' : 'Initiate Launch Sequence'}
            </button>
            <div className={`absolute inset-0 bg-black bg-opacity-50 ${isLaunching ? 'animate-pulse' : ''}`}></div>
            <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          20% { opacity: 0; }
          40% { opacity: .6; }
          60% { opacity: .2; }
          80% { opacity: .8; }
        }
        .animate-flicker {
          animation: flicker 2s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </div>
    );
};

export default LaunchPage;
