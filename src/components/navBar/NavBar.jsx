import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <div className="div-navbar">
        <NavLink to="/"><img className="logo-alonbalon" src={Logo} alt="logo alonbalon" /></NavLink>
        <div className="navbar-content">
            <NavLink to='/shop' className="link-navbar">Tienda</NavLink>
            <NavLink to='*' className="link-navbar">Precios</NavLink>
            <NavLink to='/checkout' className="link-navbar">Checkout</NavLink>
            <NavLink to='*' ><button className="button-navbar">Iniciar Sesión</button></NavLink>  
        </div> 
    </div>
  )
}

export default NavBar