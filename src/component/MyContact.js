import React, {useState, useEffect, Fragment} from 'react'
import Search from './Search'
import useUpdateTitle from '../hooks/useUpdateTitle';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/Spinner';
import TableUsers from './TableUsers';

const MyContact = () => {

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  // useEffect(() => {

  //   fetch('https://jsonplaceholder.typicode.com/users/')
  //   .then(response => response.json())
  //   .then(json => {
  //     setUsers(json);
  //     setInterval(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //     return () => clearInterval();

  //   })
  //   .catch(err => { console.log(err.message); });



  // }, [])


  const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users')

  const filterUsers = () => {
    const usersFound = data.filter( user => {
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

  useUpdateTitle(search)

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

      {
        isLoading ? messageDisplay('isLoading', 'green', 'success') :

        <Fragment>

        <Search
        searchStr={search}
        searchHandle={handleChange}/>

        {
            result.length === 0 && search !== ''  ?

            messageDisplay('no results found', 'red', 'danger') :

            search === '' ? null :<TableUsers dataArray={result} />
        }




        </Fragment>

      }



    </div>
  )
}

export default MyContact
