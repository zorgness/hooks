import React, {useRef} from 'react'

const Title = () => {

  const h1Render = useRef(0)
  console.log(h1Render.current)

  // setInterval(() => {
  //   h1Render.current++;
  //   console.log(h1Render.current)
  // }, 1000);

  return (
    <div>
      <h1>{h1Render.current} render</h1>
    </div>
  )
}

export default Title
