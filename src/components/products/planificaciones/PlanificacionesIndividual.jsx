import React from 'react'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const PlanificacionesIndividual = ({ planificacion }) => {
    const {type, name, price, img} = planificacion
  return (
    <div className='grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'>
        <img className='mx-auto w-[90%] pt-8' src={img} alt="product" />
        <div className='text-white mx-8'>
            <p className='text-[1.4rem] font-extralight' >{type}</p>
            <p className='text-[1.4rem] font-semibold' >{name}</p>
            <div className='flex items-center'>
                <p className='text-[2rem] font-bold' >{price}€</p>
                <div className='flex justify-end w-full my-5'>
                    <ButtonsAddTocart width="w-[60%]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanificacionesIndividual