import React, { useContext, useEffect } from "react";
import { json, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { allContext } from "../../context/Context";
import signOut from '../../assets/images/sign-out.png'

const NavBar = ({ setSearchedProducts, allProducts }) => {
  const { value } = useContext(allContext);

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const foundProducts = allProducts.filter((prd) => {
      return prd.name.includes(searchValue);
    });

    if (foundProducts.length === allProducts.length) {
      setSearchedProducts([]);
    } else {
      setSearchedProducts(foundProducts);
    }
  };

  const handleGoOut = () => {
    console.log("hola")
    value.logout()
  }

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
        <div className="max-w-md mx-auto my-10">
          <div className="flex items-center border-b border-b-1 border-[#6366F1] py-1">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Buscar"
              onChange={handleSearch}
            />
          </div>
        </div>
        <img className="w-7 mr-10 cursor-pointer" onClick={handleGoOut}  src={signOut} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
