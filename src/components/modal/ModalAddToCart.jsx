import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import cart from '../../assets/images/cart.png'
import { allContext } from '../../context/Context'

const ModalAddToCart = () => {
    const {  products } = useContext(allContext)

    const totalProducts = products.reduce((acc, current) => acc + current.qty, 0);  return (

            <NavLink to='/checkout' >
                <div className='flex justify-end'>
                    <div className="fixed cursor-pointer bg-[#6366F1] rounded-full shadow-lg p-8 mx-10 mb-20 flex shadow-slate-600">
                        <img className='w-14 h-14' src={cart} alt="" />
                        <p className='bg-[#D43939] text-white p-1 h-5 w-5 rounded-full flex justify-center items-center -ml-4'>{totalProducts}</p>
                    </div>
                </div>
            </NavLink> 
  )
}

export default ModalAddToCart