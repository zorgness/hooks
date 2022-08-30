import React from 'react'

const Profile2 = ({profile}) => {

  const {id, name, username, email} = profile;

  return (
    <div>
      <ul className="list-group">

        <li className="list-group-item"><p className="h2">User id: {id} </p></li>
        <li className="list-group-item"><strong>Name:</strong> {name}</li>
        <li className="list-group-item"><strong>Username:</strong> {username}</li>
        <li className="list-group-item"><strong>Email: </strong> {email}</li>


      </ul>
    </div>
  )
}

export default Profile2
