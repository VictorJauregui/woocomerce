import React, { useContext, useEffect } from "react";
import { json, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { allContext } from "../../context/Context";

const NavBar = () => {
  // const { products, setProducts } = useContext(allContext)


    // const handleSubmit = async() => {
    //   const response = await fetch('http://localhost:3000/Ebooks')
    //   const json = await response.json();
    //   return setProducts(json)
    // }
    // handleSubmit()


  

  return (
    <div className="bg-alonblue/90 h-[8vh] w-full flex items-center justify-between px-3 fixed top-0">
      <NavLink to="/">
        <img className="w-[230px] ml-8" src={Logo} alt="logo alonbalon" />
      </NavLink>
      <div className="flex items-center gap-20">
        <NavLink to="/" className="text-white text-lg font-extralight">
          Tienda
        </NavLink>
        <NavLink to="/checkout" className="text-white text-lg font-extralight">
          Checkout
        </NavLink>
        <div ClassName="max-w-md mx-auto my-10">
          <form onSubmit={''}>
            <div className="flex items-center border-b border-b-1 border-[#6366F1] py-1">
              <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
              type="text" 
              placeholder="Buscar"
              // onChange={(event) => setProducts(event.target.value)}
              />
              <button className="flex-shrink-0 bg-[#6366F1] hover:bg-teal-700 border-[#6366F1] hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Buscar
              </button>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default NavBar;
