import React, {useDeferredValue} from 'react'
import '../styles/TableUser.css'

const TableUsers = ({dataArray}) => {

  const deferedValue = useDeferredValue(dataArray);

  return (
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>


        {
          deferedValue.map(({id, name, username, email, address,}) => {
            return (
              <tr key={id}>

                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address.city}</td>


              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TableUsers
