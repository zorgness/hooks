import React, {useState, useEffect, Fragment} from 'react'
import Search from './Search'
import Spinner from 'react-bootstrap/Spinner';
import TableUsers from './TableUsers';
import { fakeUsersGenerator } from '../data/users'

const users = fakeUsersGenerator();

const MyContactFake = () => {


  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);


  const filterUsers = () => {
    const usersFound = users.filter( user => {
      return Object.values(user)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
    })
    setResult(usersFound);
  }

  useEffect(() => {
  // Filter

  if(search !== '') {

      filterUsers();

  } else {
    setResult([]);
  }

  }, [ search])



  const handleChange = e => {
    setSearch(e.target.value)
  }


  const messageDisplay = (msg, color, variant) => {

    return (
      <Fragment>

          <Spinner animation="border" variant={variant}  size="" />
          <p style={{color: color}}>{msg}</p>

      </Fragment>

    )
  }

  return (
    <div>
      <h1>My Contacts</h1>

      <p>Total: <strong className='text-success'>{users.length}</strong> members </p>

      <Search
        searchStr={search}
        searchHandle={handleChange}/>

      {


        <Fragment>



        {/* {
            result.length === 0 && search !== ''  ?

            messageDisplay('no results found', 'red', 'danger') :

            search === '' ? null :<TableUsers dataArray={result} />
        } */}

          {search === '' ? null : <TableUsers dataArray={result} />}


        </Fragment>

      }



    </div>
  )
}

export default MyContactFake;
