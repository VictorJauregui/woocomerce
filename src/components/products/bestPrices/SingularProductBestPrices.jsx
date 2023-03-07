import React, { useState } from 'react'
import iconBestPrices from '../../../assets/images/icon-best-prices.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const SingularProductBestPrices = ({productDescount}) => {
    const [choosedProduct, setChoosedProduct] = useState(false)
    const { sell, type, name, priceBefore, price, img } = productDescount

  return (
    <div className={choosedProduct ? 'grid bg-gray-300  gap-10 w-full mr-10 border-2 rounded-2xl' : 'grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'}>
        <div className='border border-b-white flex justify-center items-center py-4'>
            <img className='w-12 mr-2' src={iconBestPrices} alt="" />
            <p className='ml-2 text-[1.5rem] text-white'>{sell}</p>
        </div>
        <img className={choosedProduct ? 'mx-auto opacity-20 w-[40rem]' : 'mx-auto'} src={img} alt="product" />
        {
            choosedProduct && (
                <button className='bg-green-500 text-black bt-0 pt-0 w-full mx-auto pt-3 pb-3 flex items-center justify-center text-white font-bold'>Producto elegido</button>
            )
        }
        <div className='text-white mx-8'>
          <p className='text-[2rem] font-extralight' >{type}</p>
          <p className='text-[2rem] font-semibold' >{name}</p>
          <div className='flex items-center'>
            <p className='text-[#D43939] line-through text-[1.4rem]' >{priceBefore}€</p>
            <p className='text-[2.8rem] font-bold ml-4' >{price}€</p>
            <div className='flex justify-end w-full my-5'>
              <ButtonsAddTocart width="w-[300px]" product={productDescount} choosedProduct={choosedProduct} setChoosedProduct={setChoosedProduct}/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SingularProductBestPrices