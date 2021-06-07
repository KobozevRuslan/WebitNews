import React from 'react'

import './BurgerMenu.css'

const BurgerMenu = ({open, onClick}) => {

  return (
    <div>
      <div
      role="button"
      className="burgerBtn"
      onClick={onClick}
      >
        <span className={open ? 'open' : 'close'}/>
        <span className={open ? 'open' : 'close'} />
        <span className={open ? 'open' : 'close'} />
      </div>
    </div>
  )
}

export default BurgerMenu
