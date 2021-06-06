import React, {useState} from 'react'
import MainNews from './MainNews/MainNews';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';

import './MainPage.css'
import Header from './Header/Header';

const MainPage = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('sport')

  const setSearchQuery = (val) => {
    setSearch(val)
  }
  
  return (
    <div>
      <div className="main__wrapper">
        <div className="header">
          <div  className="form">
            <Link className="link" to="/">
              <h2>News App</h2>
            </Link>
            <Header onSearch={setSearchQuery} onQueryChange={(val) => setQuery(val)}/>
          </div>
        </div>
        <MainNews query={search} apiQuery={query}/>
        <ScrollToTop />
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
