import React, {useId} from 'react'
import MyContactFake from './MyContacFake'

const FakeUserContainer = () => {

  const iD = useId();

  return (
    <div>
      <h1 id={iD}>FakeUserContainer</h1>

      {console.log(iD)}

          <MyContactFake />
    </div>
  )
}

export default FakeUserContainer
