import React, {useState} from 'react'

const FunctionState = () => {

  const [counter, setCounter] = useState(0)

  // const addOne = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <div>
      <p>FunctionState</p>

      <p>{counter}</p>

      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Add 1</button>
    </div>
  )
}

export default FunctionState
