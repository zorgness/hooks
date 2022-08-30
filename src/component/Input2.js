import React, {useRef, useState, useEffect} from 'react'

const Input2 = () => {

  const [counter, setCounter] = useState(0)

  const setIntervalRef = useRef()

  useEffect(() => {

    setIntervalRef.current = setInterval(() => {

      setCounter(prevCounter => {
        return prevCounter + 1
      })

    }, 1000);
    return () => clearInterval(setIntervalRef.current);
  }, [])

  const stopIncrement = () => {

    clearInterval(setIntervalRef.current)
  }

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={stopIncrement} className="btn btn-primary">Stop</button>
    </div>
  )
}

export default Input2
