import React from 'react'
import './ListBestPrices.css'
import iconBestPrices from '../../../assets/images/icon-best-prices.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart'

const SingularProductBestPrices = ({productDescount}) => {
    const {sell, type, name, priceBefore, priceNow, img} = productDescount
  return (
    <div className='full-product'>
        <div className="div-top-product-best-prices">
            <img className="img-top-product-best-prices" src={iconBestPrices} alt="" />
            <p className="top-text-best-prices">{sell}</p>
        </div>
        <img className="img-singular-product-best-prices" src={img} alt="product" />
        <div className='information-product'>
          <p className='type-product-best-prices' >{type}</p>
          <p className='name-product-best-prices' >{name}</p>
          <div className='prices-and-add-to-cart'>
            <p className='price-before' >{priceBefore}€</p>
            <p className='price-now' >{priceNow}€</p>
            <div className='buttons-add-to-cart'>
              <ButtonsAddTocart size="btn-lg"/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SingularProductBestPrices