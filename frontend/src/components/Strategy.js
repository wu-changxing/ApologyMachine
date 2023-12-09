import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const strategies = [
    'Polite Regret Waltz',
    'Wonderland',
    'Illusory Elegance',
    'Genuine Facade',
    'Cosmic Lullaby',
    'Eco',
    'Sorry Flood Melody',
    'Deliberate Cadence',
];

const Strategy = () => {
    const [selectedStrategy, setSelectedStrategy] = useState(null);
    const [customApology, setCustomApology] = useState('');

    const handleStrategySelect = (strategy) => {
        setSelectedStrategy(strategy);
    };

    const handleCustomApologyChange = (event) => {
        setCustomApology(event.target.value);
    };

    return (
        <div className="min-h-screen bg-bg-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-secondary-500">
                    Select an Apology Type
                </h2>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {strategies.map((strategy, index) => (
                            <button
                                key={index}
                                className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-bg-100 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:border-primary-600 focus:ring focus:ring-primary-500 active:bg-primary-700 transition duration-150 ease-in-out ${selectedStrategy === strategy ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                                onClick={() => handleStrategySelect(strategy)}
                            >
                                {selectedStrategy === strategy && <IoMdCheckmarkCircleOutline className="text-lg mr-2 text-bg-100" />}
                                {strategy}
                            </button>
                        ))}
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
                    <div className="mt-2">
                        {selectedStrategy && (
                            <div className="bg-primary-500 border-l-4 border-primary-600 p-4">
                                <p className="text-sm font-medium text-bg-100">
                                    Selected Strategy: <span className="font-semibold text-bg-100">{selectedStrategy}</span>
                                </p>
                            </div>
                        )}
                        {customApology && (
                            <div className="bg-secondary-500 border-l-4 border-secondary-600 p-4 mt-2">
                                <p className="text-sm font-medium text-bg-100"> {/* Assuming text-bg-100 is correctly configured */}
                                    Custom Apology: <span className="font-semibold">{customApology}</span>
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategy;
