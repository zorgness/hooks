import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Percent = ({ color, value, text }) => {

  console.log(text)
  return (
    <div className="m-3">
      <h1>{value}%</h1>
      <ProgressBar striped variant={color} now={value} />
    </div>
  )
}

export default React.memo(Percent)
