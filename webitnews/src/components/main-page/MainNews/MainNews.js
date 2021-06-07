import React, { useEffect, useState } from 'react'
import ApiService from '../../services/ApiService.js'
import Item from '../Item/Item'

function MainNews({search, apiQuery}) {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    ApiService.fetchShows(apiQuery).then(value => {
        setItems(value);
    })
  }, [apiQuery])

  const filteredItems = items.filter(news => news.webTitle.toLowerCase().includes(search.toLowerCase()))
  
  const bodyInfo = items.map(news => news.fields.bodyText.slice(0, 40))

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '55px'}}>
      {
        filteredItems.map((news, index) => <Item firstItem={index === 0} news={news} key={index} bodyInfo={bodyInfo}/>)
      }
    </div>
  )
}

export default MainNews
