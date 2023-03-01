import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Nav = () => {
  return (
    <div className='bg-[#031442]'>
        <img className='w-72 mx-auto pt-40' src={logo} alt="" />
        <div className='flex justify-center gap-20 text-3xl py-20'>
            <NavLink className='text-[#6366F1]' to="/">Crear tarea</NavLink>
            <NavLink className='text-white' to="/in-progress">En progreso</NavLink>
            <NavLink className='text-white' to="/completado">Completado</NavLink>
        </div>

    </div>
  )
}

export default Nav