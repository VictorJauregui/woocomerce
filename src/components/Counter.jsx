import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount(prevState => prevState -1 < 1 ? 1 : prevState -1);
         
        
    }

    const increment = () => {
        setCount(prevState => prevState +1)
    }

  return (
    <div className='flex justify-center'>
        <button className='bg-red-500 px-2.5 mx-1 bg-[#dbdbdb] rounded' onClick={() => decrement()}>-</button>
        <p className='border-2 border-gray-300 px-5 rounded'>{count}</p>
        <button className='bg-red-500 px-2 mx-1 bg-[#dbdbdb] rounded' onClick={() => increment()}>+</button>
    </div>
  )
}

export default Counter