import React from 'react'

function WinnerAlert({ isWinner }) {
  let message = null;

  if (isWinner === "X" || isWinner === "O") {
    message = (
      <div className='winner-alert'>
        <h4>Congratulations !!!🎆</h4>
        <p>🎉 Player {isWinner} 🥳</p>
        <p>You Won!!!🥇</p>
      </div>
    );
  } else if (isWinner === "Draw") {
    message = (
      <div className='winner-alert'>
        <h4>Game Over !!!</h4>
        <p>It's a draw.</p>
      </div>
    );
  }

  return message;
}

export default WinnerAlert