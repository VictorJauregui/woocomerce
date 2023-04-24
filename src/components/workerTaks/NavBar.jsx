import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {  useLocation } from "react-router-dom"
import { toDoContext } from '../../context/Context'


const Nav = () => {
  const {setIsAuthenticated} = useContext(toDoContext)
  const location = useLocation();
  return (
    <div className='bg-[#031442]'>
        <NavLink className="flex" to="/">
          <img className='w-72 mx-auto pt-40' src={logo} alt="" />
          {/* <img className='rounded-full w-20 h-20' src={googleUser.photoURL} alt="" /> */}
        </NavLink>
        <div className='flex justify-center gap-10 lg:gap-15 xl:gap-20 2xl:gap-20 text-3xl py-20'>
            <NavLink className={location.pathname === "/" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'}  to="/">Inicio</NavLink>
            <NavLink className={location.pathname === "/in-progress" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'} to="/in-progress">Progreso</NavLink>
            <NavLink className={location.pathname === "/completado" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'} to="/completado">Completado</NavLink>
            <NavLink to="/login" className="text-white text-xl" onClick={()=> setIsAuthenticated(false)} >Salir</NavLink>         
        </div>

    </div>
  )
}

export default Nav