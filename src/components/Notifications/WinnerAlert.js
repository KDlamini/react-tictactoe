import React from 'react'
import NewGame from '../Board/NewGame'

function WinnerAlert({ isWinner, clearBoard }) {
  let message = null;

  if (isWinner === "X" || isWinner === "O") {
    message = (
      <div className='winner-alert'>
        <h4>Congratulations !!!🎆</h4>
        <p>🎉 Player {isWinner} 🥳</p>
        <p>You Won!!!🥇</p>
        <NewGame clearBoard={clearBoard}/>
      </div>
    );
  } else if (isWinner === "Draw") {
    message = (
      <div className='winner-alert'>
        <h4>Game Over !!!</h4>
        <p>It's a draw.</p>
        <NewGame clearBoard={clearBoard}/>
      </div>
    );
  }

  return message;
}

export default WinnerAlert