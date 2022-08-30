import React, { useRef } from 'react'
import FancyInput from './FancyInput'

const FancyContainer = () => {

  const date = new Date();

  const fancyInputRef = useRef()

  const focusInput  = (val) => {

    fancyInputRef.current.focus(val);
    fancyInputRef.current.countMax();

  }

  return (
    <div>
      <h1>imperativeHandle</h1>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => focusInput(date.getDay())}>Click</button>

    </div>
  )
}

export default FancyContainer
