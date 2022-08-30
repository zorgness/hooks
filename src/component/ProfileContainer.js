import React, {useState, useEffect, useMemo} from 'react'
import Profile2 from './Profile2'
import axios from 'axios'


const ProfileContainer = () => {

  const [counter, setCounter] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${counter}`)
    .then((resp) => {
        setProfile(resp.data);
        // console.log(resp.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [counter])

  const memoizedValue = useMemo(() => {
    console.log('memoizedValue')
      return counter > 10
  }, [counter])

  // const isOver10 = () => {
  //   console.log('isOver10')
  //   return counter > 10
  // }

  const darkMode = () => {
    console.log('darkMode')
    setDark(!dark)
    const container = document.querySelector('.profile')
    if(!dark) {
      container.classList.add('bg-secondary')
    } else {
      container.classList.remove('bg-secondary')
    }
  }

  const btnTheme = dark ? 'btn-light' : 'btn-dark';
  const btnName = dark ? 'light-mode' : 'dark-mode';

  return (

    <div className="container profile">

    { memoizedValue && <div className="text-danger">no more profile</div> }

      <h1>useMemo()</h1>
      <button className="btn btn-info m-3"
       onClick={() => setCounter(counter + 1)}>Increment</button>

      <button className={`btn ${btnTheme} m-3`}onClick={darkMode}>{btnName}</button>

      <Profile2 profile={profile}/>
    </div>
  )
}

export default ProfileContainer
