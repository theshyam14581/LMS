import React from 'react'
import users from '../../users.json'
const SearchBar = () => {
  return (
    <div className='search-container'>

        <input type="text" onChange={findData} />
        <button onClick={findDataValue}>Search</button>
      
    </div>
  )
}

export default SearchBar
