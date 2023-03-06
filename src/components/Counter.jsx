import React, {  useContext, useState } from 'react'
import { allContext } from '../context/Context';

const Counter = ({product}) => {
  const { products, setProducts } = useContext(allContext)

  const decrement = () => {
    const findProduct = products.filter((item) => {
      return  product.name !== item.name
    
    })
    const updatedProduct = {...product, qty: product.qty -1}
    setProducts([...findProduct, updatedProduct])

  }

    const increment = () => {
      const findProduct = products.filter((item) => {
        return  product.name !== item.name
      
      })
      const updatedProduct = {...product, qty: product.qty + 1}
      setProducts([...findProduct, updatedProduct])

    }

  return (
    <div className='flex justify-center'>
        <button className='bg-gray-300 px-2.5 mx-1 bg-[#dbdbdb] rounded' onClick={() => decrement()}>-</button>
        <p className='border-2 border-gray-300 px-5 rounded'>{product.qty}</p>
        <button className='bg-gray-300 px-2 mx-1 bg-[#dbdbdb] rounded' onClick={() => increment()}>+</button>
    </div>
  )
}

export default Counter