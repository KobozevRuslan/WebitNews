import React, { useState } from 'react'

import './BurgerMenu.css'

const BurgerMenu = () => {
  const [status, setStatus] = useState('close')
  
  return (
    <div>
      <nav>
        <div
        role="button"
        className="burgerBtn"
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
        >
          <span className={status} />
          <span className={status} />
          <span className={status} />
        </div>
      </nav>
    </div>
  )
}

export default BurgerMenu