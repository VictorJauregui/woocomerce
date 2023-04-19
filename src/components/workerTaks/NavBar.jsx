import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {  useLocation } from "react-router-dom"


const Nav = () => {
  const location = useLocation();
  return (
    <div className='bg-[#031442]'>
        <NavLink to="/">
          <img className='w-72 mx-auto pt-40' src={logo} alt="" />
        </NavLink>
        <div className='flex justify-center gap-10 lg:gap-15 xl:gap-20 2xl:gap-20 text-3xl py-20'>
            <NavLink className={location.pathname === "/" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'}  to="/">Crear tarea</NavLink>
            <NavLink className={location.pathname === "/in-progress" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'} to="/in-progress">En progreso</NavLink>
            <NavLink className={location.pathname === "/completado" ? 'text-[#6366F1] text-xl' : 'text-white text-xl'} to="/completado">Completado</NavLink>
        </div>

    </div>
  )
}

export default Nav