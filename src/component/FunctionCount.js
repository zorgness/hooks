import React, {useEffect, useState} from 'react'

const FunctionCount = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `you have clicked ${counter} times`
  }, [])
  return (
    <div>
      <h1>FunctionCount</h1>
      <input type="text"
      name="name"
      value={name}
      placeholder="given name"
      onChange={e => setName(e.target.value)} />

      <p>{counter}</p>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Add 1</button>
    </div>
  )
}

export default FunctionCount
