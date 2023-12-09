import React, { useState } from 'react';

// Define the strategies available for selection
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

    // Handle strategy selection
    const handleStrategySelect = (strategy) => {
        setSelectedStrategy(strategy);
    };

    // Handle custom apology change
    const handleCustomApologyChange = (event) => {
        setCustomApology(event.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Select an Apology Type:</h2>
            <div className="grid grid-cols-2 gap-4">
                {strategies.map((strategy, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded ${selectedStrategy === strategy ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => handleStrategySelect(strategy)}
                    >
                        {strategy}
                    </button>
                ))}
            </div>
            <div className="my-4">
                <label htmlFor="customApology" className="block text-sm font-medium text-gray-700">
                    Custom Apology (optional):
                </label>
                <input
                    type="text"
                    id="customApology"
                    value={customApology}
                    onChange={handleCustomApologyChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            {selectedStrategy && (
                <p className="text-lg">
                    Selected Strategy: <span className="font-semibold">{selectedStrategy}</span>
                </p>
            )}
            {customApology && (
                <p className="text-lg">
                    Custom Apology: <span className="font-semibold">{customApology}</span>
                </p>
            )}
        </div>
    );
};

export default Strategy;
