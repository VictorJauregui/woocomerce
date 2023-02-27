import React from 'react'
import { BestDescount } from '../../../data/bestDescount'
import SingularProductBestPrices from './SingularProductBestPrices';
import iconBestPrices from '../../../assets/images/icon-best-prices.png';

const ListBestPrices = () => {
  return (
    <div>
      <div className=''>
        <img className='' src={iconBestPrices} alt="" />
        <h2 className='' >Mejores <span>ofertas</span></h2>
      </div>
      <div className=''>
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