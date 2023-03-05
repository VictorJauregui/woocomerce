import React from 'react'
import imgTop from '../../../assets/images/icon-top.png';
import { MoreSellsProduct } from '../../../data/MoreSellsProduct.jsx';
import SingularProductMoreSell from './SingularProductMoreSell';

const ListMoreSells = () => {

  return (
    <div>
      <div className="flex ml-20 items-center mt-40 mb-20">
        <img className="w-20" src={imgTop} alt="" />
        <h2 className="text-[3rem] ml-10 font-bold text-[#031442]">Productos <span className='text-[#6366F1]'>más vendidos</span> este mes</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mx-20">
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