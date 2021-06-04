import React from 'react'
import MainNews from './MainNews/MainNews';
import BurgerMenu from './BurgerMenu/BurgerMenu'
import SearchInput from './SearchInput/SearchInput';
// import SearchIcon from '@material-ui/icons/Search';

import './MainPage.css'

const MainPage = () => {
  // const [result, setResult] = useState('')

  // const filteredNews = items.filter(news => {
  //   return news.webTitle.toLowerCase().includes(result.toLowerCase())
  // })

  return (
    <div>
      <div className="header">
        <div className="form">
          <h2>News App</h2>
          <SearchInput />
          {/* <form className="search__form">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Type something to start search"
              className="search__input"
              // onChange={(event) => setResult(event.target.value)}
            />
          </form> */}
        </div>
        <BurgerMenu/>
      </div>
      <MainNews name="Alisa" />
    </div>
  )
}


export default MainPage;

