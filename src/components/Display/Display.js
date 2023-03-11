import React from 'react'

function Display() {
  return (
    <article className='display'>
      <h3>RULES FOR TIC-TAC-TOE:</h3>
      <p>1. The game is played on a grid that's 3 squares by 3 squares.</p>
      <p>2. You are X, your friend is O. Players take turns putting their marks in empty squares.</p>
      <p>3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.</p>
      <p>4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
    </article>
  )
}

export default Display