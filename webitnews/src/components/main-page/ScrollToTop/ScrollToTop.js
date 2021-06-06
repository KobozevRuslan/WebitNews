import React, { useEffect, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'

const useStyles = makeStyles({
  wrapper: {
    textAlign: "end",
    position: 'relative'
  },
  btn: {
    position: "fixed",
    left: '80%',
    bottom: 150,
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

function ScrollToTop() {
  const [show, setShow] = useState(false)
  const classes = useStyles()


  const onScroll = () => {
    if(window.pageYOffset > 500) {
      setShow(true)
    }else {
      setShow(false)
    }
  } 

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: `smooth`})
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
 
  return (
    <div style={{display: show ? 'block' : 'none', position: 'fixed', left: '50px', bottom: '150px', color: 'red'}}>
    testtxcz
      <div className={classes.wrapper}>
        {/* {show && */}
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
