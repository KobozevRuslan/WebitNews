import React, { useEffect, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'

const useStyles = makeStyles({
  btn: {
    position: "fixed",
    left: '80%',
    bottom: 75,
    background: "#2F80ED",
    color: "#fff",
    opacity: 0.3,
    transition: 'all .5s ease',
    '&:hover': {
      background: "#2F80ED",
      opacity: 1
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
    if(window.pageYOffset > 1100) {
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
    <div style={{display: show ? 'block' : 'none'}}>
      <Button className={classes.btn} variant="contained" onClick={handleClick}>
        Scroll to top
        <ArrowUpward className={classes.arrowUp} />
      </Button>
    </div>
  )
}

export default ScrollToTop
