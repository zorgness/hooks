import React, {useRef, useState} from 'react'

const Input = () => {

  const [name, setName] = useState(null)

  const nameRef = useRef(null)
  // console.log(`%c ${nameRef}`, `color: red`)

  const handleSubmit = (event) => {
    setName(nameRef.current.value)
  }

  return (
    <div>
      <h1>useRef()</h1>
      <input ref={nameRef} type="text" placeholder="Enter your name" />
      <button type="submit" onClick={handleSubmit}>Submit</button>


      <h6>Your name is: {name}</h6>


    </div>
  )
}

export default Input
