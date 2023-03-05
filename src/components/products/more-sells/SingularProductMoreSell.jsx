import React from 'react'
import iconTop from '../../../assets/images/icon-top.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart';

const SingularProductMoreSell = ({product}) => {
    const {sell,img, type, name, price } = product;

  return (
    <div className='grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'>
        <div className=' border-b border-b-white flex justify-center items-center py-3'>
            <img className='w-10 mr-2' src={iconTop} alt="" />
            <p className='ml-2 text-[1.3rem] text-white'>{sell}</p>
        </div>
        <img className='w-[80%] mx-auto' src={img} alt="" />
        <div className='text-white mx-8'>
            <p className='text-[1.5rem] font-extralight'>{type}</p>
            <p className='text-[1.5rem] font-semibold'>{name}</p>
            <div className='flex flex-wrap my-4 justify-between'>
                <p className='text-[2rem] font-semibold' >{price}€</p>
                <div className='flex justify-end items-center'>
                    <ButtonsAddTocart width='w-[150px]' product={product}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingularProductMoreSell