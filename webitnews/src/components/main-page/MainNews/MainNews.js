import React, { useEffect, useState } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Moment from 'react-moment'
import ApiService from '../../services/ApiService.js'

import '../MainPage.css'

const useStyles = makeStyles({
  root: {
    margin: "10px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, .5)"
  },
  actionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 400,
    height: 550
  },
  media: {
    width: "100%",
    height: 300
  },
  bold: {
    fontWeight: 600
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px"
  }
})

function MainNews() {
  const [items, setItems] = useState([])
  const [result, setResult] = useState('')
  const classes = useStyles()
  
  useEffect(() => {
    ApiService.fetchShows().then(value => {
        setItems(value);
    })
  }, [])

  const filteredNews = items.filter(news => news.webTitle.toLowerCase().includes(result.toLowerCase()))

  const bodyInfo = items.map(news => news.fields.bodyText.slice(0, 40))

  // const newDate = 

  return (
    <div>
      <div className="main__wrapper">
        {
          filteredNews.map((news, index) => {
            return (
              <div key={index}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.actionArea}>
                    <CardMedia
                      className={classes.media}
                      image={news.fields.thumbnail}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography className={classes.bold} gutterBottom variant="h5" component="h4">
                        {news.webTitle}
                      </Typography>
                      <Typography className={classes.text} variant="body2" component="p">
                        {bodyInfo}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.actions}>
                    <Typography>
                      <Moment format="MMM Do YY">
                        {news.webPublicationDate}
                      </Moment>
                    </Typography>
                    <Button className={classes.bold}>Read more</Button>
                  </CardActions>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MainNews
