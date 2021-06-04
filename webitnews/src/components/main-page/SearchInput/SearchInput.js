import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function SearchInput() {
  return (
    <div>
      <form className="search__form">
            <SearchIcon className="searchIcon" />
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
