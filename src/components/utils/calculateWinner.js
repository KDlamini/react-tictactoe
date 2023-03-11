import isGameOver from './isGameOver';

// Logic to determine when the game has been won or if it's a draw and display an appropriate message.
export function calculateWinner(squares) {
  let result = false;

  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
  ]

   // Check all possible winning combinations (e.g., rows, columns, diagonals) to see if any player has won.
  combinations.forEach(line => {
    const combination = squares[line[0]] + squares[line[1]] + squares[line[2]];

    if (combination === 'XXX') {
      result = "Winner: X";
    } else if (combination === 'OOO') {
      result = "Winner: O";
    } else if (isGameOver(squares)) {
      result = "Draw";
    }
  })

  return result;
}

export default calculateWinner