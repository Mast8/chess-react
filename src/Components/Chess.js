// src/ChessGame.js
import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import './Chess.css';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  useEffect(() => {
    setFen(game.fen());
  }, [game]);

  const makeMove = (from, to) => {
    const move = game.move({ from, to });
    if (move) {
      setGame(new Chess(game.fen()));
    }
  };

  const renderSquare = (i) => {
    const piece = game.board()[Math.floor(i / 8)][i % 8];
    return (
      
      <div
        key={i}
/*         className={`square ${((Math.floor(i / 8) + i) % 2 === 0) ? 'light' : 'dark')}`}
 */        className={((Math.floor(i / 8) + i) % 2 === 0) ? 'light' : 'dark'}
        onClick={() => handleSquareClick(i)}
      >
        {piece ? piece.type.toUpperCase() : ''}
      </div>
    );
  };

  const handleSquareClick = (i) => {
    const square = String.fromCharCode(97 + (i % 8)) + (8 - Math.floor(i / 8));
    // Handle piece selection and movement here
    // For now, let's just log the square clicked
    console.log(square);
  };

  return (
    <div className="board">
      {Array.from({ length: 64 }, (_, i) => renderSquare(i))}
    </div>
  );
};

export default Chess;
