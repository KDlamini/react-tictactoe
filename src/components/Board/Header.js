import React from 'react'

function Header() {
  return (
    <div className="board-header">
        <h3>
        Player 1:
        <span className="green"> X</span> 
        &nbsp; &nbsp; &nbsp; 
        Player 2:
        <span className="orange"> O</span>
        </h3>
        <p>Get 3 marks in a row (up, down, across, or diagonally) to win the game.</p>
    </div>
  )
}

export default Header