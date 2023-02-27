import React from "react";
import imgTopScreen from "../../assets/images/img-top-shop.png";

const TopScreenShop = () => {
  return (
    <div className="bg-alonblue flex items-center justify-between h-[85vh]">
      <div>
        <h2 className="text-[7vw] leading-none ml-16 text-white">
          La Tienda <br />
          <span className="font-extralight"> de</span> <br />{" "}
          <span className="font-bold bg-alonpurple"> FÚTBOL </span>
        </h2>
        <h2 className="text-[2vw] ml-16 text-white mt-4">
          Para <span className="text-alonpurple"> Entrenadores de Fútbol </span>
        </h2>
      </div>
      <div className="h-full">
        <img
          className="h-full flex items-end justify-end"
          src={imgTopScreen}
          alt="futbolistas luchando por balon"
        />
      </div>
    </div>
  );
};

export default TopScreenShop;
