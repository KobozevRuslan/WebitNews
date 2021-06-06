import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  root: {
    margin: "10px 0",
    boxShadow: "0 3px 3px 0 rgba(0, 0, 0, .25)"
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
  },
  colorText: {
    color: "#718096"
  },
  first: {
    display: 'block !important',
    width: '100% !important',
    border: '10px solid'
    // color: 'red !important'
  }
})

function Item({news, bodyInfo, firstItem}) {
  const classes = useStyles()

  return(
    <div className={classes.wrapper}>
      <Card className={firstItem ? classes.first : classes.root}>
        <CardActionArea className={classes.actionArea}>
        
        <CardMedia
            className={classes.media}
            image={news.fields.thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.bold} gutterBottom variant="h5" component="h5">
              {news.webTitle}
            </Typography>
            <Typography className={classes.colorText} variant="body2" component="p">
              {bodyInfo}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Typography>
            <Moment className={classes.colorText} format="MMM Do YY">
              {news.webPublicationDate}
            </Moment>
          </Typography>
          <Link to="/asd">
          <Button className={classes.bold}>Read more</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Item
