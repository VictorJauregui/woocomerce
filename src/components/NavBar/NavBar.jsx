import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='full-screen' >
        <div className='div-img'>
            <img className='logo' src={logo} alt="logo alonbalon" />
        </div>
        <div className='div-navlinks'>
            <div className='navlinks' >
                <NavLink to="/" className='folder text-todo'>Todo</NavLink>
                <NavLink to="/inprogress" className='folder text-in-progress'>In progress</NavLink>
                <NavLink to="/completed" className='folder text-completed'>Completed</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar