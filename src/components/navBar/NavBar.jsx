import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="bg-alonblue/90 h-[8vh] w-full flex items-center justify-between px-3 fixed top-0">
      <NavLink to="/">
        <img className="w-[230px] ml-8" src={Logo} alt="logo alonbalon" />
      </NavLink>
      <div className="flex items-center gap-20">
        <NavLink to="/shop" className="text-white text-lg font-extralight">
          Tienda
        </NavLink>
        <NavLink to="/pedido-realizado" className="text-white text-lg font-extralight">
          Precios
        </NavLink>
        <NavLink to="/checkout" className="text-white text-lg font-extralight">
          Checkout
        </NavLink>
        <NavLink to="*">
          <button className="bg-alonpurple px-7 py-1 rounded-md text-white mr-8">
            Iniciar Sesión
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
