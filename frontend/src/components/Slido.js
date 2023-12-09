import React, { useState, useEffect, useCallback } from 'react';
import shrekImages from '../data/shrek';

const GRID_SIZE = 3;

const Slido = () => {
    const [tiles, setTiles] = useState([]);
    const [win, setWin] = useState(false);
    const [emptyIndex, setEmptyIndex] = useState(-1);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        const shuffledTiles = shuffle([...shrekImages]);
        setTiles(shuffledTiles);
        setEmptyIndex(shuffledTiles.length);
        setStarted(false);
    };

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    // use keyboard to move tiles
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (started) {
                switch (e.key) {
                    case 'ArrowUp':
                        handleTileClick(emptyIndex + GRID_SIZE);
                        break;
                    case 'ArrowDown':
                        handleTileClick(emptyIndex - GRID_SIZE);
                        break;
                    case 'ArrowLeft':
                        handleTileClick(emptyIndex + 1);
                        break;
                    case 'ArrowRight':
                        handleTileClick(emptyIndex - 1);
                        break;
                    default:
                        break;
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [emptyIndex, started]);
    const handleTileClick = (index) => {
        if (!started) {
            setStarted(true);
        }

        const positions = getAdjacentPositions(emptyIndex, GRID_SIZE);

        if (positions.includes(index)) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
            setTiles(newTiles);
            setEmptyIndex(index);

            if (isSolved(newTiles)) {
                setTimeout(() => {
                    alert('Correct!');
                    startNewGame();
                }, 100);
            }
        }
    };

    const getAdjacentPositions = (index, size) => {
        const row = Math.floor(index / size);
        const col = index % size;

        const positions = [];

        if (row > 0) {
            positions.push(index - size);
        }
        if (row < size - 1) {
            positions.push(index + size);
        }
        if (col > 0) {
            positions.push(index - 1);
        }
        if (col < size - 1) {
            positions.push(index + 1);
        }

        return positions;
    };

    const isSolved = (tiles) => {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] !== shrekImages[i]) {
                return false;
            }
        }
        setWin(true)
        return true;

    };

    const solve = () => {
        console.log('solve');
        setTiles([...shrekImages]);
        setEmptyIndex(shrekImages.length);
        setWin(false)
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="grid grid-cols-3 gap-1">
                {tiles.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Shrek ${index}`}
                        className={`w-32 h-32 border border-gray-700 cursor-pointer ${
                            index === emptyIndex ? 'opacity-0' : ''
                        }`}
                        onClick={() => handleTileClick(index)}
                    />
                ))}
            </div>
            <div className="mt-4 flex">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                    onClick={solve}
                    disabled={win}
                >
                    Solve
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={startNewGame}
                    disabled={!started}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Slido;
