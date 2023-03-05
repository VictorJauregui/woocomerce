import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const allContext = createContext();

const Context = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("product")) || []);
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect (() => {
        localStorage.setItem("product", JSON.stringify(products))
    }, [products])
    
    
  return (
    <allContext.Provider value={{products, setProducts, isOpen, setIsOpen}}>
        {children}
    </allContext.Provider>

  )
}
export default Context
