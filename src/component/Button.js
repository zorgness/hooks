import React from 'react'

const Button = ({handleClick, color, increment, children}) => {
  console.log(`button ${children}`)
  return <button className={`btn btn-${color}`}  onClick={() => handleClick(increment)} >+ {increment} %</button>
}

export default React.memo(Button)
