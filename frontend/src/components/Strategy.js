
import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip'; // Ensure this component is created in the same directory

const strategies = [
    'Polite Regret Waltz',
    'Wonderland',
    'Illusory Elegance',
    'Genuine Facade',
    'Cosmic Lullaby',
    'Eco',
    'Sorry Flood Melody',
    'Deliberate Cadence',
    // ... add more strategies as needed
];


const Strategy = () => {
    const [selectedStrategy, setSelectedStrategy] = useState(null);
    const [customApology, setCustomApology] = useState('');
    const [hoveredStrategy, setHoveredStrategy] = useState('');
    const [clickedStrategyDescription, setClickedStrategyDescription] = useState('');
    const strategyDescriptions = {
        'Polite Regret Waltz': "Description for Polite Regret Waltz...",
        'Wonderland': "Description for Wonderland...",
        'Illusory Elegance': "Description for Illusory Elegance...",
        'Genuine Facade': "Description for Genuine Facade...",
        'Cosmic Lullaby': "Description for Cosmic Lullaby...",
        'Eco': "Description for Eco...",
        'Sorry Flood Melody': "Description for Sorry Flood Melody...",
        'Deliberate Cadence': "Description for Deliberate Cadence...",
        // ... add more descriptions as needed
    };

    const handleStrategySelect = (strategy) => {
        setSelectedStrategy(strategy);
        localStorage.setItem('strategy', strategy); // Store the selected strategy
    };

    const handleCustomApologyChange = (event) => {
        setCustomApology(event.target.value);
        localStorage.setItem('message', event.target.value);
    };

    const handleStrategySelect = (strategy) => {
        setSelectedStrategy(strategy);
        setClickedStrategyDescription(strategyDescriptions[strategy]);
        // You might also want to clear the hovered strategy here
        setHoveredStrategy('');
    };

    const handleStrategyHover = (strategy) => {
        setHoveredStrategy(strategyDescriptions[strategy]);
    };

    const handleStrategyMouseLeave = () => {
        setHoveredStrategy('');
    };

    const linkPath = customApology ? "/StrategyErrorApology" : "/PopApology";

    return (
        <div className="min-h-screen bg-bg-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-secondary-500">
                    Select an Apology Type
                </h2>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {strategies.map((strategy, index) => (
                            <div key={index} className="relative" onMouseEnter={() => handleStrategyHover(strategy)} onMouseLeave={handleStrategyMouseLeave}>
                                <button
                                    className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-bg-100 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:border-primary-600 focus:ring focus:ring-primary-500 active:bg-primary-700 transition duration-150 ease-in-out ${selectedStrategy === strategy ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                                    onClick={() => handleStrategySelect(strategy)}
                                >
                                    {selectedStrategy === strategy && <IoMdCheckmarkCircleOutline />}
                                    {strategy}
                                </button>
                                {hoveredStrategy === strategyDescriptions[strategy] && (
                                    <Tooltip content={hoveredStrategy} />
                                )}
                            </div>
                        ))}
                        {/* Display clicked strategy's description */}
                        {clickedStrategyDescription && (
                            <div className="fixed-description">
                                {clickedStrategyDescription}
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="customApology" className="block text-sm font-medium text-secondary-500">
                            Custom Apology (optional)
                        </label>
                        <input
                            type="text"
                            id="customApology"
                            value={customApology}
                            onChange={handleCustomApologyChange}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary-500 placeholder-secondary-500 text-secondary-500 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                            placeholder="Type your apology..."
                        />
                    </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                    <Link to={linkPath}>
                        Apology Now!
                    </Link>  
                </button>
            </div>
        </div>
    );
};

export default Strategy;
