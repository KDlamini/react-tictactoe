import React from 'react'
import GridBox from '../GridBox/GridBox'
import './Grid.css'

function Grid() {
  return (
    <section className="grid-container">
      {Array.from(Array(9).keys()).map((val) => <GridBox key={val}/>)}
    </section>
  )
}

export default Grid