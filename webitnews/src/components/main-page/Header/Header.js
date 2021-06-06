import React, { useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import SearchInput from '../SearchInput/SearchInput'

function Header({onSearch, onQueryChange}) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const categories = [
    {id: 0, label: 'Sport', value: 'sport'},
    {id: 1, label: 'World', value: 'world'},
    {id: 2, label: 'Covid', value: 'covid'},
    {id: 3, label: 'Business', value: 'business'},
    {id: 4, label: 'Politics', value: 'politics'},
    {id: 5, label: 'Science', value: 'science'},
    {id: 6, label: 'Religion', value: 'religion'},
    {id: 7, label: 'Health', value: 'health'},
  ]

  const onSubMenuClick = (query) => {
    onQueryChange(query)
  }
  


  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <SearchInput onSearch={onSearch} />
      <BurgerMenu open={open} onClick={() => setOpen(!open)}/>
      {open && (
        <ul>
          <li onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Categories
            <ul style={{display: hovered ? 'block' : 'none'}}>
              {categories.map(item => 
                <li key={item.id} 
                    onClick={() => onSubMenuClick(item.value)}>
                    {item.label}
                </li>
                )}
            </ul>
          </li>
          <li>⚡️ Trending news</li>
        </ul>)
      }
    </div>
  )
}

export default Header
