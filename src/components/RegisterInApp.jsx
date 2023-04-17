import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import google from '../assets/images/google.png'
import { toDoContext } from '../context/Context'

const RegisterInApp = ({setSignIn}) => {
    const {registerUser} = useContext(toDoContext)
    const [register, setRegister] = useState({
        name: "",
        email: "",
        pass: "",
        repPass: ""
    })

    const handleSignIn = () => {
        setSignIn(true)
    }

    const handleChange = (e) => {
        setRegister({...register, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(register)
    }

  return (
    <div className='flex'>
        <div className='flex w-1/2 items-center'>
            <div className='w-2/5 mx-auto'>
                 <h2 className='font-bold text-4xl text-[#031442]'>Crea tu cuenta</h2> 
                 <form onClick={handleSubmit} className='mt-8' action="">
                    <div className='flex flex-col mt-4'>
                        <label className='text-xl text-[#031442]'>Nombre</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="text"
                        value={register.name}
                        name="name"
                        onChange={handleChange}
                         />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-xl text-[#031442]'>Email</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="email" 
                        value={register.email}
                        name="email"
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-xl text-[#031442]'>Contraseña</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="password" 
                        value={register.pass}
                        name="pass"
                        onChange={handleChange} 
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-xl text-[#031442] '>Repetir Contraseña</label>
                        <input className='border border-[#E2E8F0] h-[2.5rem] rounded' 
                        type="password" 
                        value={register.repPass}
                        name="repPass"
                        onChange={handleChange} 
                        />
                    </div>
                    <div className='flex justify-end mt-5'>
                        <button className='bg-[#6366F1] text-white px-3 py-2 rounded ' type="submit" >Registrarse</button>
                    </div>
                 </form>
                <div className='flex justify-center items-center gap-6 border mt-10 border-[#E2E8F0] h-[2.5rem] rounded cursor-pointer hover:bg-red-300' >
                    <img className='h-4/5' src={google} alt="" />
                    <p className='text-[#031442] '>Registrarse con google</p>
                </div>
                <div className='flex justify-end mt-5'>
                    <p className='text-[#6366F1] cursor-pointer' onClick={handleSignIn}>Volver a inicio de sesión</p>
                 </div>
            </div>
        </div>
        <div className='bg-[#031442] w-1/2 h-screen flex justify-center items-center'>
           <img src={logo} alt="logo" className=' w-1/2 ' />
        </div>
     
    </div>
  )
}

export default RegisterInApp