import React from 'react'
import iconTop from '../../../assets/images/icon-top.png'

const SingularProductMoreSell = ({product}) => {
    const {sell,img, type, name, price} = product;
    console.log(sell)

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
            <p className="price-product">{price}€</p>
        </div>

    </div>
  )
}

export default SingularProductMoreSell