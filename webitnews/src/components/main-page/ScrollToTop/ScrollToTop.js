import { Button, makeStyles } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
  test: {
    textAlign: "end"
  },
  btn: {
    // position: "fixed",
    background: "#2F80ED",
    color: "#fff",
    '&:hover': {
      background: "#2F80ED"
    }
  },
  arrowUp: {
    background: "#fff",
    color: "#2F80ED",
    borderRadius: 100,
    marginLeft: 13,
  }
})

function ScrollToTop(showBelow) {
  const classes = useStyles();
  
  // const [show, setShow] = useState(showBelow ? false : true)

  // const handleScroll = () => {
  //   if(window.pageYOffset > showBelow){
  //     if(!show) setShow(true)
  //   }else {
  //     if (show) setShow(false)
  //   }
  // }
  
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth`})
  }

  // useEffect(() => {
  //   if(showBelow) {
  //     window.addEventListener(`scroll`, handleScroll)
  //     return () => window.removeEventListener(`scroll`, handleScroll)
  //   }
  // })


  return (
    <div>
      <div className={classes.test}>
        {/* {show &&  */}
          <Button className={classes.btn} variant="contained" onClick={handleClick}>
            Scroll to top
            <ArrowUpward className={classes.arrowUp} />
          </Button>
        {/* } */}
      </div>
    </div>
  )
}

export default ScrollToTop
