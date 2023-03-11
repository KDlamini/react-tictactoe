// Logic to determine when the game has been won or if it's a draw and display an appropriate message.
export function calculateWinner(squares) {
  let result = "Draw";

  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
  ]

  combinations.forEach(line => {
    const combination = squares[line[0]] + squares[line[1]] + squares[line[2]];

    if (combination === 'XXX') {
      result = "Winner: X";
    } else if (combination === 'OOO') {
      result = "Winner: O";
    }
  })

  return result;
}

export default calculateWinner
  
  // 1. Define a function (e.g., `calculateWinner`) that takes in the current game state and returns the winner ("X", "O", or `null` if no winner yet).
  // 2. This function can check all possible winning combinations (e.g., rows, columns, diagonals) to see if any player has won.
  // 3. In the `render` method of the `Board` component, call this function with the current game state to determine if there is a winner.
  // 4. If there is a winner, display an appropriate message (e.g., "Winner: X" or "Winner: O").
  // 5. If there is no winner but all squares have been filled (i.e., it's a draw), display an appropriate message (e.g., "Draw").