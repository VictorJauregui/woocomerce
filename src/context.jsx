import React, { Children, createContext, useContext, useState } from 'react'

const context = () => {

    const allContext = createContext();
    const contextProvider = useContext(allContext)
    const [allProducts, setAllProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <contextProvider.Provider value={{allProducts, setAllProducts, isOpen, setIsOpen}}>
            {Children}
        </contextProvider.Provider>
    </div>
  )
}

export default context