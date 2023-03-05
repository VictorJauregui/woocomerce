import React, { createContext, useState } from 'react'

export const allContext = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    
    
  return (
    <allContext.Provider value={{ products, setProducts, isOpen, setIsOpen }}>
        {children}
    </allContext.Provider>
  )
}
export default Context
