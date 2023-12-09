import React, { useEffect, useState } from 'react';
import { strs } from '../data/blanko';

const Blanko = () => {
    const [currentStr, setCurrentStr] = useState('');
    const [charBoxes, setCharBoxes] = useState([]);
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        const newStr = strs[Math.floor(Math.random() * strs.length)];
        setCurrentStr(newStr);

        const chars = newStr.split('');
        const hiddenIndexes = getRandomHiddenIndexes(chars);

        setCharBoxes(
            chars.map((char, index) => {
                if (hiddenIndexes.includes(index)) {
                    return { type: 'input', value: char };
                } else {
                    return { type: 'text', value: char };
                }
            })
        );
        setInputs({});
    };

    const getRandomHiddenIndexes = (chars) => {
        const hiddenIndexes = new Set();
        while (hiddenIndexes.size < 3) {
            const index = Math.floor(Math.random() * chars.length);
            if (chars[index] !== ' ') {
                hiddenIndexes.add(index);
            }
        }
        return Array.from(hiddenIndexes);
    };

    const handleInputChange = (index, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [index]: value }));

        if (Object.keys(inputs).length === 2) {
            const newInputs = { ...inputs, [index]: value };
            const isCorrect = charBoxes.every(
                (box, i) => box.type !== 'input' || box.value === newInputs[i]
            );

            if (isCorrect) {
                setTimeout(() => {
                    alert('Correct!');
                    startNewGame();
                    let num = localStorage.getItem('gamesWon');
                    localStorage.setItem('gamesWon', parseInt(num, 10) + 1);
                }, 100);
            }
        }
    };

    const renderCharBox = (box, index) => {
        if (box.type === 'input') {
            return (
                <input
                    key={index}
                    className="w-10 h-10 border border-black text-center flex items-center justify-center"
                    maxLength={1}
                    value={inputs[index] || ''}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    style={{ lineHeight: '10px' }}
                />
            );
        } else {
            return (
                <div
                    key={index}
                    className="w-10 h-10 border border-black text-center flex items-center justify-center"
                    style={{ lineHeight: '10px' }}
                >
                    {box.value === ' ' ? '' : box.value}
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex space-x-2 mb-4">{charBoxes.map(renderCharBox)}</div>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={startNewGame}
            >
                Reset
            </button>
        </div>
    );
};


export default Blanko;
