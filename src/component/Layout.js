import React, {useState, useEffect, useLayoutEffect} from 'react'

const Layout = () => {

  const [counter, setCounter] = useState(0)


  useEffect(() => {
    console.log(`%c useEffect`, `color: green`)
  }, [counter])

  useLayoutEffect(() => {
    console.log(`%c useLayoutEffect`, `color: purple`)
  }, [counter])


  console.log(`%c render`, `color: blue`)
  return (
    <div>
      <h2>{counter}</h2>
      <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-primary">+ 1
          </button>
    </div>
  )
}

export default Layout;
