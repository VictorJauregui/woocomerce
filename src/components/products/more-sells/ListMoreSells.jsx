import React from 'react'
import imgTop from '../../../assets/images/icon-top.png';
import './ListMoreSells.css'
import { MoreSellsProduct } from '../../../data/MoreSellsProduct.jsx';
import SingularProductMoreSell from './SingularProductMoreSell';

const ListMoreSells = () => {

  return (
    <div>
      <div className="emoji-and-title">
        <img className="img-top-sells" src={imgTop} alt="" />
        <h2 className="title-top-sells">Productos <span>más vendidos</span> este mes</h2>
      </div>
      <div className="product-list-more-sells">
      {MoreSellsProduct.map((product, i)=>{
          return(
            <div key={`${product.name}-${i}`}>
              <SingularProductMoreSell product={product}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ListMoreSells;