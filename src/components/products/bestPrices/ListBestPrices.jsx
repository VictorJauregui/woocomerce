import React, { useEffect, useState } from 'react'
import SingularProductBestPrices from './SingularProductBestPrices';
import iconBestPrices from '../../../assets/images/icon-best-prices.png';

const ListBestPrices = () => {

  const url = "http://localhost:3000/BestDescount";

  const [bestPrices, setBestPrices] = useState([]);

  useEffect (() => {
    const bestPrices = async () => {
      const response = await fetch(url);
      const json = await response.json();

      return setBestPrices(json)
    } 
     bestPrices()
  }, [])


  return (
    <div>
      <div className="flex ml-20 items-center mt-40 mb-20">
        <img className='w-20' src={iconBestPrices} alt="" />
        <h2 className='text-[3rem] ml-10 font-bold text-[#031442]'>Mejores <span className='text-[#6366F1]'>ofertas</span></h2>
      </div>
      <div className='grid grid-cols-2 gap-20 mx-20'>
        {bestPrices.map((productDescount, i)=>{
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