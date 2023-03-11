import React, { useState } from 'react'
import Square from '../Square/Square'
import calculateWinner from '../utils/calculateWinner'

// A `Board` component that renders a 3x3 grid of `Square` components.
export class Board1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  // Keep track of the game state (i.e., which squares have been clicked and by whom) in its state.
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  // When a `Square` is clicked, update the game state in the `Board` component and re-render the affected `Square`.
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const boardSize = 3;
    let squares = [];

    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(i * boardSize + j));
      }
      squares.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
      <div>{squares}</div>
    );
  }
}

// A `Board` component that renders a 3x3 grid of `Square` components.
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

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
        isGameOver={calculateWinner(squares)}
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
    <div>{board}</div>
  );
}

export default Board