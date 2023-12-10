import React, { useState } from 'react';

const PopApology = () => {
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');

    // Handle name change in the placeholder
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Handle response selection
    const handleResponse = (responseType) => {
        setResponse(responseType);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="bg-red-200 rounded p-4 text-center mb-4">
                <img src="path-to-your-sorry-image.png" alt="Sorry" className="mx-auto mb-4" />
                <p className="text-gray-700 mb-4">
                    Whoops, I accidentally sent the attack to
                    <input
                        type="text"
                        placeholder="[insert name]"
                        value={name}
                        onChange={handleNameChange}
                        className="mx-1 px-2 py-1 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    />
                    and 5 other randos in the hotspot list :/ Sorry!
                </p>
                <div className="flex space-x-4">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                        onClick={() => handleResponse('No worries :)')}
                    >
                        No worries :)
                    </button>
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                        onClick={() => handleResponse('How dare you!')}
                    >
                        How dare you!
                    </button>
                </div>
            </div>
            {response && (
                <div className="mt-4 p-4 rounded shadow-lg bg-white">
                    <p className="text-gray-800">Your response: <span className="font-semibold">{response}</span></p>
                </div>
            )}
        </div>
    );
};

export default PopApology;
