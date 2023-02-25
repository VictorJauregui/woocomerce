import React from 'react'
import iconTop from '../../../assets/images/icon-top.png'
import { ButtonsAddTocart } from '../../buttonsAddToCart/ButtonsAddToCart';

const SingularProductMoreSell = ({product}) => {
    const {sell,img, type, name, price} = product;

  return (
    <div className="singular-product-more-sell">
        <div className="div-top-product">
            <img className="img-top-product" src={iconTop} alt="" />
            <p className="top-text">{sell}</p>
        </div>

        <img className="img-singular-product" src={img} alt="" />
        <div className="product-information">
            <p className="type-product">{type}</p>
            <p className="name-product">{name}</p>
            <div className="price-and-addToCart">
                <p className="price-product">{price}€</p>
                <div className='btns-add-to-cart'>
                    <ButtonsAddTocart />
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingularProductMoreSell