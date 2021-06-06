import React, { useEffect, useState } from 'react'
import {makeStyles} from '@material-ui/core'
import ApiService from '../../services/ApiService.js'
// import {Link} from 'react-router-dom' 
import Item from '../Item/Item'

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})

function MainNews({query, apiQuery}) {
  const [items, setItems] = useState([])
  const classes = useStyles()
  
  useEffect(() => {
    ApiService.fetchShows(apiQuery).then(value => {
        setItems(value);
    })
  }, [apiQuery])

  const filteredItems = items.filter(news => news.webTitle.toLowerCase().includes(query.toLowerCase()))
  
  const bodyInfo = items.map(news => news.fields.bodyText.slice(0, 40))

  return (
    <div>
      <div className={classes.wrapper}>
        {
          filteredItems.map((news, index) => <Item firstItem={index === 0} news={news} key={index} bodyInfo={bodyInfo}/>)
        }
      </div>
    </div>
  )
}

export default MainNews
