import React, { createContext, useState } from 'react'

export const allContext = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [counterCart, setCountesCart] = useState(0);
    
    
  return (
    <allContext.Provider value={{ products, setProducts, isOpen, setIsOpen, counterCart, setCountesCart }}>
        {children}
    </allContext.Provider>
  )
}
export default Context
