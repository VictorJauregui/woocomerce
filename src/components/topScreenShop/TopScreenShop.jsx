import React from 'react'
import './TopScreenShop.css'
import imgTopScreen from '../../assets/images/img-top-shop.png'

const TopScreenShop = () => {
  return (
    <div className="full-top-Screen-Shop">
      <div className="left-text">
        <h2 className="first-title">La tienda</h2>
        <h2 className="second-title">de</h2>
        <h2 className="third-title">FÚTBOL</h2>
        <h2 className='first-subtitle'>para</h2>
        <h2 className="second-subtitle">Entrenadores de Fútbol</h2>
      </div>
      <div className='right-img'>
        <img className="img-top-top-screen-shop" src={imgTopScreen} alt="futbolistas luchando por balon" />
      </div>
    </div>

  )
}

export default TopScreenShop