import React from 'react'
import logo from '../assets/images/logo.png'

const Login = () => {
  return (
    <div className='w-full flex h-screen'>
        <div className='w-2/4'>
            <div className='w-2/4 mx-auto flex flex-col justify-center h-screen'>
                <h2>Inicia Sesión</h2>
                <form action="">
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                </form>
            </div>
        </div>
        <div className='w-2/4 bg-[#031442] flex justify-center items-center'>
            <img className='w-2/4' src={logo} alt="" />

        </div>
    </div>
  )
}

export default Login