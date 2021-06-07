import React from 'react'
import Footer from '../Footer/Footer'
import FullItemNews from '../FullItemNews/FullItemNews'
import Header from '../Header/Header'

function ItemNews() {
  return (
    <div>
      <div style={{maxWidth: '1300px', margin: '0 auto'}}>
        <Header />
        <FullItemNews />
      </div>
      <Footer />
    </div>
  )
}

export default ItemNews