import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import google from '../assets/images/google.png'
import { toDoContext } from '../context/Context';

const LoginInApp = ({setSignIn }) => {
    const { loginUser } = useContext(toDoContext);

    const [user, setUser] = useState({
        email: "",
        pass: ""
    })

    
    const handleSignIn = () =>{
        setSignIn(false)
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(user)
        console.log(user)
    }


    
  return (
    <div className='flex'>
        <div className='flex w-1/2 items-center'>
            <div className='w-2/5 mx-auto'>
                 <h2 className='font-bold text-4xl text-[#031442]'>Inicia Sesión</h2> 
                 <form onSubmit={handleSubmit} className='mt-8' action="">
                    <div className='flex flex-col'>
                        <label className='text-xl text-[#031442]'>Email</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="text"
                        value={user.email}
                        name="email"
                        onChange={handleChange} />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-xl text-[#031442] '>Contraseña</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="password"
                        value={user.pass}
                        name="pass"
                        onChange={handleChange} />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-[#6366F1] text-white px-3 py-2 rounded mt-5' type="submit" >Iniciar sesion</button>
                    </div>
                 </form>
                <div className='flex justify-center items-center gap-6 border mt-10 border-[#E2E8F0] h-[2.5rem] rounded cursor-pointer hover:bg-red-300' >
                    <img className='h-4/5' src={google} alt="" />
                    <p className='text-[#031442] '>Entrar con google</p>
                </div>
                <div className='flex justify-end mt-5'>
                    <p>¿Aun no tienes cuenta? <span className='text-[#6366F1] cursor-pointer' onClick={handleSignIn} >Regístrate aquí</span></p>
                </div>
                 
            </div>
        </div>
        <div className='bg-[#031442] w-1/2 h-screen flex justify-center items-center'>
           <img src={logo} alt="logo" className=' w-1/2 ' />
        </div>
    </div>
  )
}

export default LoginInApp