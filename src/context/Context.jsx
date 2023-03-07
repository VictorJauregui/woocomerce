import React, { createContext, useEffect, useState } from 'react'

export const allContext = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [isOpen, setIsOpen] = useState(false);
    const [counterCart, setCountesCart] = useState(0);
  
    
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(products))
    }, [products])
  return (
    <allContext.Provider value={{ products, setProducts, isOpen, setIsOpen, counterCart, setCountesCart }}>
        {children}
    </allContext.Provider>
  )
}
export default Context
