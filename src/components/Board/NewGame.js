import React from 'react'

function NewGame({ clearBoard }) {
  return (
    <button
        className='play-again-btn'
        onClick={() => clearBoard()}
    >
        Play Again
    </button>
  )
}

export default NewGame