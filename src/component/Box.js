import React, {useState, useRef, useLayoutEffect} from 'react';
import Content from '../component/Content'

const Box = () => {

  const [height, setHeight] = useState(100)

  const boxRef = useRef(null)


  useLayoutEffect(() => {

    // if(boxRef.current.getBoundingClientRect().height) {
    //   console.log(boxRef.current.getBoundingClientRect().height);
    // }

    if (boxRef.current.offsetHeight < 150) {

      setHeight(height + 100)

    }

  }, [height])

  const boxStyle = {
    width: '400px',
    height: `${height}px`,
    margin: '20px auto',
    backgroundColor: height < 120 ? 'red' : 'green',
  }

  return (
    <div ref={boxRef} style={boxStyle}>
      <Content />
    </div>
  )
}

export default Box
