import React, {useState} from 'react'
import Profile2 from './Profile2'

const ProfileContainer = () => {

  const [counter, setCounter] = useState(0)
  console.log(counter)
  return (
    <div className="container">
      <h1>useMemo()</h1>
      <button className="btn btn-info m-3"
       onClick={() => setCounter(counter + 1)}>Increment</button>

      <button className="btn btn-success m-3">Modify</button>

      <Profile2 />
    </div>
  )
}

export default ProfileContainer
