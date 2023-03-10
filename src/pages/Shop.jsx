import React, { useContext, useState, useEffect } from "react";
import { ButtonsAddTocart } from "../components/buttonsAddToCart/ButtonsAddToCart";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import ModalAddToCart from "../components/modal/ModalAddToCart";
import NavBar from "../components/navBar/NavBar";
import ListBestPrices from "../components/products/bestPrices/ListBestPrices";
import ListEbooks from "../components/products/ebooks/ListEbooks";
import ListExcels from "../components/products/excels/ListExcels";
import ListMoreSells from "../components/products/more-sells/ListMoreSells";
import PlanificacionesList from "../components/products/planificaciones/PlanificacionesList";
import TopScreenShop from "../components/topScreenShop/TopScreenShop";
import { allContext } from "../context/Context";
import search from '../assets/images/search.png'

const Shop = () => {
  const { isOpen, counterCart } = useContext(allContext);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([])
  const [choosedProduct, setChoosedProduct] = useState(false)

  useEffect(() => {
    const getAllProducts = async() =>{
      const res = await fetch("http://localhost:3000/allproducts")
      const data = await res.json()
      setAllProducts(data)
    }
    getAllProducts()
  }, [])
  

  return (
    <div>
      <NavBar setSearchedProducts={setSearchedProducts} allProducts={allProducts}/>
      <TopScreenShop />
      {isOpen && <Modal />}

      {counterCart >= 1 && <ModalAddToCart />}

      {!searchedProducts.length ? (
        <>
          <ListMoreSells />
          <ListBestPrices />
          <ListEbooks />
          <ListExcels />
          <PlanificacionesList />
          <Footer />
        </>
      ): 
      <>

        {
          searchedProducts && (
            <div className="mx-40 mt-32 flex items-center gap-6 ">
              <img className="w-12 h-12" src={search} alt="" />
              <p className=" font-bold text-[2.5rem] text-[#031442] ">Productos encontrados</p>
            </div>
          )
        }

        {
          searchedProducts && (
            <div className="grid grid-cols-5 mx-40 mt-20 w-full gap-10">
              {searchedProducts.map((product)=>{
                return (
                  <div >
                    <div >
                    <div className={choosedProduct ? 'grid bg-gray-300  gap-10 w-full mr-10 border-2 rounded-2xl' : 'grid bg-[#002259] gap-10 w-full mr-10 border-2 rounded-2xl'}>
                    <img className={choosedProduct ? 'mx-auto opacity-20 w-52' : 'mx-auto'} src={product.img} alt="product" />
                    {
                        choosedProduct && (
                            <button className='bg-green-500 text-black bt-0 pt-0 w-full mx-auto pt-3 pb-3 flex items-center justify-center text-white font-bold'>Producto elegido</button>
                        )
                    }
                        <div className='text-white mx-8'>
                            <p className='text-[1.4rem] font-extralight' >{product.type}</p>
                            <p className='text-[1.4rem] font-semibold' >{product.name}</p>
                            <div className='flex items-center'>
                                <p className='text-[2rem] font-bold' >{product.price}€</p>
                                <div className='flex justify-end w-full my-5'>
                                    <ButtonsAddTocart width="w-[60%]" product={product} choosedProduct={choosedProduct} setChoosedProduct={setChoosedProduct}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                )
              })}


            </div>
          )
        }

       {
          searchedProducts && (
            <Footer />
          )
        }
      </>}
    </div>
  );
};

export default Shop;
