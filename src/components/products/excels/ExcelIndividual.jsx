import React, { useState } from 'react'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const ExcelIndividual = ({excel}) => {
    const [choosedProduct, setChoosedProduct] = useState(false)
    const {type, name, price, img} = excel
  return (
    <div className={choosedProduct ? 'grid bg-gray-300  gap-10 w-full mr-10 border-2 rounded-2xl' : 'grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'}>
        <img className={choosedProduct ? 'mx-auto opacity-20 w-52' : 'mx-auto'} src={img} alt="product" />
        {
            choosedProduct && (
                <button className='bg-green-500 text-black bt-0 pt-0 w-full mx-auto pt-3 pb-3 flex items-center justify-center text-white font-bold'>Producto elegido</button>
            )
        }
        <div className='text-white mx-8'>
            <p className='text-[1.4rem] font-extralight' >{type}</p>
            <p className='text-[1.4rem] font-semibold' >{name}</p>
            <div className='flex items-center'>
                <p className='text-[2rem] font-bold' >{price}€</p>
                <div className='flex justify-end w-full my-5'>
                    <ButtonsAddTocart width="w-[60%]" product={excel} choosedProduct={choosedProduct} setChoosedProduct={setChoosedProduct}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExcelIndividual