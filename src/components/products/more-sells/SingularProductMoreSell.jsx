import React, { useState } from 'react'
import iconTop from '../../../assets/images/icon-top.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart';

const SingularProductMoreSell = ({product}) => {
    const [choosedProduct, setChoosedProduct] = useState(false)
    const {sell,img, type, name, price } = product;

  return (
    <div className={choosedProduct ? 'grid bg-gray-300  gap-10 w-full mr-10 border-2 rounded-2xl' : 'grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'}>
        <div className='border border-b-white flex justify-center items-center py-4'>
            <img className='w-12 mr-2' src={iconTop} alt="" />
            <p className='ml-2 text-[1.5rem] text-white'>{sell}</p>
        </div>
        <img className={choosedProduct ? 'mx-auto opacity-20 w-[20rem]' : 'mx-auto'} src={img} alt="product" />
        {
            choosedProduct && (
                <button className='bg-green-500 text-black bt-0 pt-0 w-full mx-auto pt-3 pb-3 flex items-center justify-center text-white font-bold'>Producto elegido</button>
            )
        }
        <div className='text-white mx-8'>
            <p className='text-[1.5rem] font-extralight'>{type}</p>
            <p className='text-[1.5rem] font-semibold'>{name}</p>
            <div className='flex flex-wrap my-4 justify-between'>
                <p className='text-[2rem] font-semibold' >{price}€</p>
                <div className='flex justify-end items-center'>
                    <ButtonsAddTocart width='w-[150px]' product={product} choosedProduct={choosedProduct} setChoosedProduct={setChoosedProduct}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingularProductMoreSell