import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import './SearchInput.css'

function SearchInput() {
  return (
    <div>
      <form className="search__form">
        <div className="searchIcon">
          <SearchIcon />
        </div>
            <input
              type="text"
              placeholder="Type something to start search"
              className="search__input"
              // onChange={(event) => setResult(event.target.value)}
            />
          </form>
    </div>
  )
}

export default SearchInput
