import React from 'react'
import { BestDescount } from '../../../data/bestDescount'
import SingularProductBestPrices from './SingularProductBestPrices';
import './ListBestPrices.css'
import iconBestPrices from '../../../assets/images/icon-best-prices.png'

const ListBestPrices = () => {
  return (
    <div>
      <div className="emoji-and-title">
        <img className="img-best-prices" src={iconBestPrices} alt="" />
        <h2 className="title-best-prices">Mejores <span>ofertas</span></h2>
      </div>
      <div className="product-list-best-prices">
        {BestDescount.map((productDescount, i)=>{
            return (
                <div key={`${productDescount.name}-${i}`}>
                    <SingularProductBestPrices productDescount={productDescount}/>
                </div>
            )
        })}

      </div>
    </div>
  )
}

export default ListBestPrices