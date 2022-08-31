import React, {Fragment} from 'react'

const Search = ({searchStr, searchHandle}) => {
  return (

    <Fragment>
      <input type="text"
        placeholder="Search"
        value={searchStr}
        onChange={searchHandle} />
    </Fragment>

  )
}

export default Search
