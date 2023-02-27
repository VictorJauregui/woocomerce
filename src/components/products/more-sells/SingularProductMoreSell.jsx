import React from 'react'
import iconTop from '../../../assets/images/icon-top.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart';

const SingularProductMoreSell = ({product}) => {
    const {sell,img, type, name, price} = product;

  return (
    <div className=''>
        <div className=''>
            <img className='' src={iconTop} alt="" />
            <p className=''>{sell}</p>
        </div>

        <img className='' src={img} alt="" />
        <div className=''>
            <p className=''>{type}</p>
            <p className=''>{name}</p>
            <div className=''>
                <p className='' >{price}€</p>
                <div className=''>
                    <ButtonsAddTocart />
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingularProductMoreSell