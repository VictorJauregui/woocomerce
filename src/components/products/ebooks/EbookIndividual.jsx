import React from 'react'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const EbookIndividual = ({ebook}) => {
    const {type, name, price, img} = ebook
  return (
    <div className='grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'>
        <img className='mx-auto' src={img} alt="product" />
        <div className='text-white mx-8'>
            <p className='text-[1.4rem] font-extralight' >{type}</p>
            <p className='text-[1.4rem] font-semibold' >{name}</p>
            <div className='flex items-center'>
                <p className='text-[2rem] font-bold' >{price}€</p>
                <div className='flex justify-end w-full my-5'>
                    <ButtonsAddTocart width="w-[60%]" product={ebook}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EbookIndividual