import React, { useContext, useState } from "react";
import logo from "../assets/images/logo.png";
import { allContext } from "../context/Context";

const Login = () => {
  const { value, user, setUser,  password, setPassword } = useContext(allContext);
  const { login } = value;


  const handleInputChange = (event) => {
    setUser(event.target.value);
  };

  const handleInputChangeTwo = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === "assembler" && password === "alonbalon") {
      login();
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="w-2/4">
        <div className="w-2/4 mx-auto flex flex-col justify-center h-screen">
          <h2 className="text-[1.7rem] font-bold text-[#031442]">
            Inicia Sesión
          </h2>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col text-[#031442]">
              <label htmlFor="">Usuario</label>
              <input
                value={user}
                onChange={handleInputChange}
                className="border border-gray-200 rounded h-[2rem] w-3/4 mb-5"
                type="text"
              />
            </div>
            <div className="flex flex-col text-[#031442]">
              <label className="text-[#031442]" htmlFor="">
                Contraseña
              </label>
              <input
                value={password}
                onChange={handleInputChangeTwo}
                className="border border-gray-200 rounded h-[2rem] w-3/4 mb-5"
                type="password"
              />
            </div>
            <div>
              <input className="mr-2" type="checkbox" />
              <label htmlFor="">Recordar contraseña</label>
            </div>
            <button
              type="submit"
              className="bg-[#6366F1] mt-5 px-5 py-2 text-white rounded"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-5">
            Has olvidado tu contraseña?
            <span className="text-[#6366F1] cursor-pointer"> Pincha aquí</span>
          </p>
        </div>
      </div>
      <div className="w-2/4 bg-[#031442] flex justify-center items-center">
        <img className="w-2/4" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Login;
