import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    margin: "30px 0",
    boxShadow: '0px 4px 4px rgba(192, 189, 189, 0.25)',
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

  //firstItem

  firstAction: {
    width: 1300,
    height: 300,
    display: 'flex',
  },
  firstImage: {
    width: 600,
    height: '410px',
    order: 1
  },
  firstTitle: {
    width: 600,
    fontWeight: 'bold',
    padding: '0 55px 27px 55px'
  },
  firstBodyInfo: {
    width: 600,
    padding: '0 55px'
  },
  firstActions: {
    width: 600,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 70px'
  }
})

function Item({news, bodyInfo, firstItem}) {
  const classes = useStyles()
  return(
    <div>
      <Card className={classes.root}>
        <CardActionArea className={firstItem ? classes.firstAction : classes.actionArea}>
        <CardMedia
            className={firstItem ? classes.firstImage : classes.media}
            image={news.fields.thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={firstItem ? classes.firstTitle : classes.bold} gutterBottom variant="h5" component="h5">
              {news.webTitle}
            </Typography>
            <Typography className={firstItem ? classes.firstBodyInfo : classes.colorText} variant="body2" component="p">
              {bodyInfo}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={firstItem ? classes.firstActions : classes.actions}>
          <Typography>
            <Moment className={classes.colorText} format="MMM Do YY">
              {news.webPublicationDate}
            </Moment>
          </Typography>
          <Link className="link" to='/news'>
          <Button className={classes.bold}>Read more</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Item
