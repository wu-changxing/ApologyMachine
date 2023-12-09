import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Tetro.css';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 12;
const BLOCKS = [
    { shape: [[1, 1], [1, 1]] },
    { shape: [[1], [1]] },
    { shape: [[1]] },
];

const Tetro = () => {
    const [board, setBoard] = useState([]);
    const [currentBlock, setCurrentBlock] = useState(null);
    const [active, setActive] = useState(false);
    const [filledRows, setFilledRows] = useState(0);
    const moveLeftRef = useRef();
    const moveRightRef = useRef();
    const dropDownRef = useRef(() => {});

    useEffect(() => {
        setBoard(createEmptyBoard());
    }, []);

    const createEmptyBoard = () => {
        const newBoard = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            newBoard.push(new Array(BOARD_WIDTH).fill(false));
        }
        return newBoard;
    };

    const startGame = () => {
        setActive(true);
        spawnBlock();
    };

    const spawnBlock = () => {
        const block = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
        setCurrentBlock({ ...block, x: 0, y: 0 });
    };

    const moveDown = () => {
        if (!currentBlock) return;

        const newY = currentBlock.y + 1;
        const newX = currentBlock.x;
        if (!isCollision(currentBlock.shape, newX, newY)) {
            setCurrentBlock({ ...currentBlock, y: newY, x: newX });
        } else {
            lockBlock(currentBlock);
            checkRows();
            spawnBlock();
        }
    };


    moveLeftRef.current = useCallback(() => {
        if (!currentBlock) return;
        const newX = currentBlock.x - 1;
        const newY = currentBlock.y;
        if (!isCollision(currentBlock.shape, newX, newY)) {
            setCurrentBlock({ ...currentBlock, x: newX, y: newY });
        }
    }, [currentBlock, board]);

    moveRightRef.current = useCallback(() => {
        if (!currentBlock) return;
        const newX = currentBlock.x + 1;
        const newY = currentBlock.y;
        if (!isCollision(currentBlock.shape, newX, newY)) {
            setCurrentBlock({ ...currentBlock, x: newX, y: newY });
        }
    }, [currentBlock, board]);

    const isCollision = (shape, x, y) => {
        if (x < 0 || x + shape[0].length > BOARD_WIDTH || y + shape.length > BOARD_HEIGHT) {
            return true;
        }

        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if (shape[row][col] && board[y + row][x + col]) {
                    return true;
                }
            }
        }

        return false;
    };

    const lockBlock = (blockToLock) => {
        const newBoard = [...board];
        for (let row = 0; row < blockToLock.shape.length; row++) {
            for (let col = 0; col < blockToLock.shape[row].length; col++) {
                if (blockToLock.shape[row][col]) {
                    newBoard[blockToLock.y + row][blockToLock.x + col] = true;
                }
            }
        }
        setBoard(newBoard);

        if (blockToLock.y < 7) {
            alert('Failed');
            resetGame();
        }
    };

    const checkRows = () => {
        const newBoard = [...board];
        let filledRowCount = 0;

        for (let row = 0; row < BOARD_HEIGHT; row++) {
            if (newBoard[row].every(cell => cell)) {
                filledRowCount++;
            }
        }

        if (filledRowCount === 5) {
            alert('Congrats!');
            resetGame();
            return;
        }

        setBoard(newBoard);
    };

    const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentBlock(null);
    setActive(false);
    setFilledRows(0);
};
    dropDownRef.current = useCallback(() => {
        if (!currentBlock) return;

        let newY = currentBlock.y;
        while (!isCollision(currentBlock.shape, currentBlock.x, newY + 1)) {
            newY++;
        }

        setCurrentBlock((prevBlock) => {
            const updatedBlock = { ...prevBlock, y: newY };
            return updatedBlock;
        });

        setTimeout(() => {
            setCurrentBlock((prevBlock) => {
                lockBlock(prevBlock);
                checkRows();
                spawnBlock();
                return prevBlock;
            });
        }, 0);
    }, [currentBlock, board]);


    const handleKeyDown = useCallback(
    event => {
        if (!active) return;

        switch (event.key) {
            case 'ArrowLeft':
                moveLeftRef.current();
                break;
            case 'ArrowRight':
                moveRightRef.current();
                break;
            case 'ArrowDown':
                dropDownRef.current();
                break;
            default:
                break;
        }
    },
    [active]
);

useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
}, [handleKeyDown]);

useEffect(() => {
    if (active) {
        const interval = setInterval(() => {
            moveDown();
        }, 500);
        return () => clearInterval(interval);
    }
}, [active, currentBlock]);

const handleClick = () => {
    if (!active) {
        startGame();
    }
};

return (
    <div>
        <div className="board" onClick={handleClick}>
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`cell ${cell ? 'green' : ''}`}
                    ></div>
                ))
            )}
            {currentBlock &&
                currentBlock.shape.map((row, rowIndex) =>
                    row.map(
                        (cell, colIndex) =>
                            cell && (
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className="block"
                                    style={{
                                        left: `${(currentBlock.x + colIndex) * 10}%`,
                                        top: `${(currentBlock.y + rowIndex) * 8.333}%`,
                                    }}
                                ></div>
                            )
                    )
                )}
        </div>
        <button
            className="reset-button"
            onClick={resetGame}
            style={{
                display: 'block',
                margin: '20px auto',
                padding: '10px',
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '5px',
            }}
        >
            Reset
        </button>
    </div>
);
};

export default Tetro;

