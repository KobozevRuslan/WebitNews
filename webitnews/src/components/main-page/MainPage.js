import React, {useState} from 'react'
import Header from './Header/Header';
import MainNews from './MainNews/MainNews';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Footer from './Footer/Footer';

import './MainPage.css'

const MainPage = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('sport')

  const setSearchQuery = (val) => {
    setSearch(val)
  }
  
  return (
    <div>
      <div className="main__wrapper">
        <Header onSearch={setSearchQuery} onQueryChange={(val) => setQuery(val)}/>
        <MainNews search={search} apiQuery={query}/>
        <ScrollToTop />
      </div>
        <Footer />
    </div>
  )
}

export default MainPage;
