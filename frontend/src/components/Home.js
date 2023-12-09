import React, { useEffect, useState } from 'react';

const Home = () => {
    const [gamesWon, setGamesWon] = useState(0);

    useEffect(() => {
        const storedGamesWon = localStorage.getItem('gamesWon');

        if (storedGamesWon === null) {
            fetchInitialScore();
        } else {
            setGamesWon(parseInt(storedGamesWon, 10));
        }
    }, []);

    const fetchInitialScore = async () => {
        try {
            const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json');
            const data = await response.json();
            setGamesWon(data.score);
            localStorage.setItem('gamesWon', data.score);
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch initial score:', error);
        }
    };

    const handleReset = () => {
        fetchInitialScore();
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl text-red-500">Please choose an option from the navbar</h1>
            <h2 className="text-xl">
                Games won: {gamesWon}{' '}
                <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={handleReset}
                >
                    (reset)
                </button>
            </h2>
        </div>
    );
};

export default Home;
