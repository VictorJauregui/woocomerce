import React from 'react'
import iconBestPrices from '../../../assets/images/icon-best-prices.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const SingularProductBestPrices = ({productDescount}) => {
    const {sell, type, name, priceBefore, priceNow, img} = productDescount
  return (
    <div className='grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'>
        <div className='border border-b-white flex justify-center items-center py-4'>
            <img className='w-12 mr-2' src={iconBestPrices} alt="" />
            <p className='ml-2 text-[1.5rem] text-white'>{sell}</p>
        </div>
        <img className='mx-auto' src={img} alt="product" />
        <div className='text-white mx-8'>
          <p className='text-[2rem] font-extralight' >{type}</p>
          <p className='text-[2rem] font-semibold' >{name}</p>
          <div className='flex items-center'>
            <p className='text-[#D43939] line-through text-[1.4rem]' >{priceBefore}€</p>
            <p className='text-[2.8rem] font-bold ml-4' >{priceNow}€</p>
            <div className='flex justify-end w-full my-5'>
              <ButtonsAddTocart size="btn-lg"/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SingularProductBestPrices