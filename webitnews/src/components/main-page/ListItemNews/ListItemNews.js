import React from 'react'

import './ListItemNews.css'

function ListItemNews({onSearch, onOpen, setHovered, hovered}) {
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

  return (
    <div>
      {onOpen && (
        <ul className="mainList">
          <li onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
          > 
            <span className="listItemHover">
              Categories
            </span>
            <ul className="listType" style={{display: hovered ? 'flex' : 'none'}}>
              {categories.map(item => 
                <li className="listItem" key={item.id} 
                    onClick={() => onSearch(item.value)}>
                    {item.label}
                </li>
                )}
            </ul>
          </li>
          <li>
            <span className="listItemHover">
              ⚡️ Trending news
            </span>
          </li>
        </ul>)
      }
    </div>
  )
}

export default ListItemNews
