import React from 'react'
import MainNews from './MainNews/MainNews';
import BurgerMenu from './BurgerMenu/BurgerMenu'
import SearchInput from './SearchInput/SearchInput';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';

import './MainPage.css'

const MainPage = () => {
  // const [result, setResult] = useState('')

  // const filteredNews = items.filter(news => {
  //   return news.webTitle.toLowerCase().includes(result.toLowerCase())
  // })

  return (
    <div>
      <div className="main__wrapper">
        <div className="header">
          <div  className="form">
            <Link className="link" to="/">
              <h2>News App</h2>
            </Link>
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
        <MainNews />
        <ScrollToTop showBellow={5} />
      </div>
      <div className="footer">
        <div className="line"></div>
        <div className="footer__text">
          <h3>News App</h3>
          <span>2021 copyright all rights reserved</span> 
          </div>
      </div>
    </div>
  )
}


export default MainPage;

