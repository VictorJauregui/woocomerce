import React from 'react'
import imgTop from '../../../assets/images/icon-top.png';
import { MoreSellsProduct } from '../../../data/MoreSellsProduct.jsx';
import SingularProductMoreSell from './SingularProductMoreSell';

const ListMoreSells = () => {

  return (
    <div>
      <div className="">
        <img className="" src={imgTop} alt="" />
        <h2 className="">Productos <span>más vendidos</span> este mes</h2>
      </div>
      <div className="">
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