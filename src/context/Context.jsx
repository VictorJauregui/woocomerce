import React, { Children, createContext, useContext, useState } from 'react'

const allContext = createContext();

const Context = ({children}) => {
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

