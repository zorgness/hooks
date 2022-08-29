import React, {useState, useEffect}from 'react'

const FunctionDisplayKey = () => {

  const [keyCode, setKeyCode] = useState('')

  const handleKeyCode = e => {
    setKeyCode(e.code)
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyCode)
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">{keyCode}</h1>
      </div>
    </div>
  )
}

export default FunctionDisplayKey
