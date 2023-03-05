import React from 'react'
import BlueLogo from '../../assets/images/logo-blue.png'
import facebook from '../../assets/images/social/facebook.png'
import instagram from '../../assets/images/social/instagram.png'
import tikTok from '../../assets/images/social/tik-tok.png'
import twitter from '../../assets/images/social/twitter.png'



const Footer = () => {
  return (
    <div className='mt-48 border-t-2 border-t-[#031442] py-5'>
        <div className='flex justify-center mt-8'>
            <img className='w-60' src={BlueLogo} alt="" />
        </div>
        <div className='text-[#031442] mx-96 grid grid-cols-5 mt-10'>
            <div className='mt-10 text-[1.5rem]'>
                <p className='font-bold pb-4'>Nosotros</p>
                <p className='font-light'>Suscripción</p>
                <p className='font-light'>Tienda</p>
                <p className='font-light'>Formación</p>
                <p className='font-light'>Blog</p>
            </div>
            <div className='mt-10 text-[1.5rem] col-span-2'>
                <p className='font-bold pb-4'>Política</p>
                <p className='font-light'>Política de cooquies</p>
                <p className='font-light'>Más información sobre las cooqies</p>
                <p className='font-light'>Condiciones generales y aviso legal</p>
            </div>
            <div className='mt-10 text-[1.5rem]'>
                <p className='font-bold pb-4'>Company</p>
                <p className='font-light'>Sobre nosotros</p>
                <p className='font-light'>ParnerShips</p>
            </div>
            <div className='mt-10 text-[1.5rem]'>
                <p className='font-bold pb-4'>Social</p>
                <p className='font-light'>Sobre nosotros</p>
                <p className='font-light'>ParnerShips</p>
            </div>
        </div>
        <div className='flex justify-center gap-2 mt-3'>
            <img className='w-10 cursor-pointer' src={facebook} alt="" />
            <img className='w-10 cursor-pointer' src={instagram} alt="" />
            <img className='w-10 cursor-pointer' src={twitter} alt="" />
            <img className='w-10 cursor-pointer' src={tikTok} alt="" />
        </div>
        
    </div>
  )
}

export default Footer