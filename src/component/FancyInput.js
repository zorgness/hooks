import React, {useState, useRef} from 'react'

const FancyInput = React.forwardRef((props, ref) => {

    const [counter, setCounter] = useState(0)

    const inputRef = useRef()

    const colors = ["red", "green", "yellow", "blue", "pink", "orange"]



    React.useImperativeHandle(ref, () =>({

      focus: (val) =>  {

        const style = `4px solid ${colors[val]}`
        inputRef.current.style.border = style



      },

      countMax: () => {
        counter < 5 && setCounter(counter + 1);
      }

    }))

    return (
      <div>
        <h1>{counter}</h1>
        <input ref={inputRef} type="text" id="counter"/>
      </div>
    )
  }

)
export default FancyInput
