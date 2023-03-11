import React, { useState } from 'react'
import Square from '../Square/Square'
import Header from './Header'
import WinnerAlert from '../Notifications/WinnerAlert'
import calculateWinner from '../utils/calculateWinner'

// A `Board` component that renders a 3x3 grid of `Square` components.
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let isWinner = calculateWinner(squares);

  // Keep track of the game state (i.e., which squares have been clicked and by whom) in its state.
  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  // When a `Square` is clicked, update the game state in the `Board` component and re-render the affected `Square`.
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        isWinner={isWinner}
      />
    );
  }

  const boardSize = 3;
  let board = [];

  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push(renderSquare(i * boardSize + j));
    }
    board.push(<div key={i} className="board-row">{row}</div>);
  }

  return (
    <article className='board-container'>
      <Header />
      <div className='board'>{board}</div>
      <WinnerAlert isWinner={isWinner} />
    </article>
  );
}

export default Board