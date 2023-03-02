import React from 'react'
import iconTop from '../../../assets/images/icon-top.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart';

const SingularProductMoreSell = ({product}) => {
    const {sell,img, type, name, price} = product;

  return (
    <div className='grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'>
        <div className='border border-b-white flex justify-center items-center py-3'>
            <img className='w-10 mr-2' src={iconTop} alt="" />
            <p className='ml-2 text-[1.3rem] text-white'>{sell}</p>
        </div>
        <img className='' src={img} alt="" />
        <div className='text-white mx-8'>
            <p className='text-[2rem] font-extralight'>{type}</p>
            <p className='text-[2rem] font-semibold'>{name}</p>
            <div className='flex my-4 '>
                <p className='text-[3rem] font-semibold' >{price}€</p>
                <div className='flex justify-end items-center w-full'>
                    <ButtonsAddTocart />
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingularProductMoreSell