import React from 'react'
import iconBestPrices from '../../../assets/images/icon-best-prices.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const SingularProductBestPrices = ({productDescount}) => {
    const {sell, type, name, priceBefore, priceNow, img} = productDescount
  return (
    <div className=''>
        <div className=''>
            <img className='' src={iconBestPrices} alt="" />
            <p className=''>{sell}</p>
        </div>
        <img className='' src={img} alt="product" />
        <div className=''>
          <p className='' >{type}</p>
          <p className='' >{name}</p>
          <div className=''>
            <p className='' >{priceBefore}€</p>
            <p className='' >{priceNow}€</p>
            <div className=''>
              <ButtonsAddTocart size="btn-lg"/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SingularProductBestPrices