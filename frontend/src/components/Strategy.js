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
        'Polite Regret Waltz': "So, I heard I messed up. If that's a big deal to you, my bad. If not, cool. Either way, here's an apology, sort of.",
        'Wonderland': "🙈✨ Heyyyyyy, so, I guess I need to, like, apologize or whatever? 😅 My bad for the thing that happened, or didn't happen... I'm, like, totally not keeping track. 🤷‍♂️ Can you feel the overwhelming insincerity radiating from this emoji extravaganza? 🌈😂 It's like a rainbow of fake apologies. 🌈🤮 Let's sweep this under the rug and move on to a world where sincerity is overrated. 🧹🚶‍♂️",
        'Illusory Elegance': "I suppose I owe you an apology or something. Sorry for... you know, stuff. It's not entirely clear what, but let's just call it even and move on. Cool?",
        'Genuine Facade': "I'm sorry if you're under the illusion that I care deeply about this. Let me assure you, it's an illusion, and I'm not sorry for being indifferent.",
        'Cosmic Lullaby': "Zorblonk flibber-glabber, my fellow blorptoid! Apologorg for the glibberflorp in the zorblat continuum. Glip-glop, wizzle-wazzle, and may our frobnosticators align in the snarfleth dimension. Blork-blork!",
        'Eco': "I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry...",
        'Sorry Flood Melody': "My bad for that sorry, and my bad for apologising about saying sorry. Actually, my bad for everything, whether it happened or not. Sorry for this text, and sorry for any texts in the future. Just really, sincerely, ridiculously sorry.",
        'Deliberate Cadence': "In accordance with the socio-professional dynamics of the contextual paradigm, I hereby extend my apologies for the inadvertent alignment deviation.",
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
                                    <div className="tooltip-content">
                                        {hoveredStrategy}
                                    </div>
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
                    {/* ... rest of your component */}
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
