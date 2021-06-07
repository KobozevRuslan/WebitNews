import React, { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import ListItemNews from '../ListItemNews/ListItemNews';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { Link } from 'react-router-dom';

import './Header.css'

function Header({onSearch, onQueryChange}) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  
  const onSubMenuClick = (query) => {
    onQueryChange(query)
  }
  
  return (
    <div className="header">
      <div className="form">
        <Link className="link" to="/">
          <h2>News App</h2>
        </Link>
        <SearchInput onSearch={onSearch} />
        <ListItemNews onSearch={onSubMenuClick} onOpen={open} setHovered={setHovered} hovered={hovered}/>
      </div>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}/>
    </div>
  )
}

export default Header
