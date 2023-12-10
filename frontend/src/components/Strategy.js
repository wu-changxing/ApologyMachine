import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

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

const strategyDescriptions = {
    'Polite Regret Waltz': "So, I heard I messed up. If that's a big deal to you, my bad. If not, cool. Either way, here's an apology, sort of.",
    'Wonderland': "🙈✨ Heyyyyyy, so, I guess I need to, like, apologize or whatever? 😅 My bad for the thing that happened, or didn't happen... I'm, like, totally not keeping track. 🤷‍♂️ Can you feel the overwhelming insincerity radiating from this emoji extravaganza? 🌈😂 It's like a rainbow of fake apologies. 🌈🤮 Let's sweep this under the rug and move on to a world where sincerity is overrated. 🧹🚶‍♂️",
    'Illusory Elegance': "I suppose I owe you an apology or something. Sorry for... you know, stuff. It's not entirely clear what, but let's just call it even and move on. Cool?",
    'Genuine Facade': "I'm sorry if you're under the illusion that I care deeply about this. Let me assure you, it's an illusion, and I'm not sorry for being indifferent.",
    'Cosmic Lullaby': "Zorblonk flibber-glabber, my fellow blorptoid! Apologorg for the glibberflorp in the zorblat continuum. Glip-glop, wizzle-wazzle, and may our frobnosticators align in the snarfleth dimension. Blork-blork!",
    'Eco': "I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry, I’m sorry...",
    'Sorry Flood Melody': "My bad for that sorry, and my bad for apologising about saying sorry. Actually, my bad for everything, whether it happened or not. Sorry for this text, and sorry for any texts in the future. Just really, sincerely, ridiculously sorry.",
    'Deliberate Cadence': "In accordance with the socio-professional dynamics of the contextual paradigm, I hereby extend my apologies for the inadvertent alignment deviation.",
}

const Strategy = () => {
    const [selectedStrategy, setSelectedStrategy] = useState(null);
    const [customApology, setCustomApology] = useState('');
    const [clickedStrategyDescription, setClickedStrategyDescription] = useState('');
    const [showDescription, setShowDescription] = useState(false);

    const handleStrategySelect = (strategy, event) => {
        event.stopPropagation(); // Prevent the click from propagating to the window
        setSelectedStrategy(strategy);
        setClickedStrategyDescription(strategyDescriptions[strategy]);
        setShowDescription(true);
    };

    const handleCustomApologyChange = (event) => {
        setCustomApology(event.target.value);
    };

    const handleClickOutside = (event) => {
        if (showDescription) {
            setShowDescription(false);
        }
    };

    // Attach the event listener to the window to detect clicks outside
    React.useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, [showDescription]);

    const linkPath = customApology ? "/StrategyErrorApology" : "/PopApology";

    return (
        <div className="min-h-screen bg-bg-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-secondary-500 fixed top-0 left-1/2 transform -translate-x-1/2 w-full">
                    Select an Apology Type
                </h2>
                <div className="pt-20 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {strategies.map((strategy, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-bg-100 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:border-primary-600 focus:ring focus:ring-primary-500 active:bg-primary-700 transition duration-150 ease-in-out ${selectedStrategy === strategy ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                                    onClick={(e) => handleStrategySelect(strategy, e)}
                                >
                                    {selectedStrategy === strategy && <IoMdCheckmarkCircleOutline className="text-lg mr-2 text-bg-100" />}
                                    {strategy}
                                </button>
                            ))}
                        </div>
                        {showDescription && clickedStrategyDescription && (
                            <div className="fixed inset-0 bg-white bg-opacity-50 p-4 border border-gray-200 shadow-md rounded-lg z-10 w-11/12 text-center mx-auto mt-4">
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                        <Link to={linkPath}>
                            Apology Now!
                        </Link>  
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Strategy;
