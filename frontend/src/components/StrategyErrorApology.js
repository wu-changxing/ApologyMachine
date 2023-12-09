import React, { useState } from 'react';

const StrategyErrorApology = () => {
    const [response, setResponse] = useState('');

    // Function to handle user's response
    const handleResponse = (userResponse) => {
        setResponse(userResponse);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="bg-pink-300 rounded-lg p-8 text-center mb-4">
                <div className="mb-4">
                    <img src="path-to-your-sorry-image.png" alt="Sorry" className="mx-auto" />
                </div>
                <div className="mb-4">
                    <p className="text-lg text-gray-800 font-bold">1102101</p>
                    <p className="text-gray-800">
                        g0lly! Your custom ap0ology is lost in transit...
                    </p>
                    <p className="text-gray-800">
                        I @pologise :C!
                    </p>
                    <p className="text-gray-800">
                        We $ent them $pecial $omething dat should make-up for it
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                        onClick={() => handleResponse("It's fine :)")}
                    >
                        It's fine :)
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

export default StrategyErrorApology;
