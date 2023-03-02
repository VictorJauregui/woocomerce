import React from 'react'
import { BestDescount } from '../../../data/bestDescount'
import SingularProductBestPrices from './SingularProductBestPrices';
import iconBestPrices from '../../../assets/images/icon-best-prices.png';

const ListBestPrices = () => {
  return (
    <div>
      <div className="flex ml-20 items-center mt-40 mb-20">
        <img className='w-20' src={iconBestPrices} alt="" />
        <h2 className='text-[3rem] ml-10 font-bold text-[#031442]' >Mejores <span className='text-[#6366F1]'>ofertas</span></h2>
      </div>
      <div className='grid grid-cols-2 gap-5 mx-5'>
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