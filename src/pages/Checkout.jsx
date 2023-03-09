import React, { useContext, useState } from 'react'
import Footer from '../components/footer/Footer';
import rubish from '../assets/images/rubish.png'
import card from '../assets/images/card.png'
import paypal from '../assets/images/paypal.png'
import Counter from '../components/Counter';
import { allContext } from '../context/Context';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';

const Checkout = () => {
  const [visible, setVisible] =useState(false)


  
  const { products, setProducts, setCountesCart } = useContext(allContext)
  const total = products.reduce((acc, current) => acc + current.price * current.qty, 0);
  console.log(products)

  const deleteProduct = (product) => {
    const element = products.filter((element) => 
    element.name !== product.name)
      setProducts(element)  

    setCountesCart(prevState => prevState -1)
  }




  return (
    <div>
    <NavBar />
    <div>
      <div className='flex w-full'>
        <div className='w-2/4 mt-40 ml-40'>
          <h2 className='text-4xl font-bold mb-10 text-[#031442]'>Tu pedido</h2>
          <div className='bg-[#ECECEC] rounded'>
            <div className='pt-10 grid grid-cols-9 font-bold text-[#031442] text-center text-[1.3rem]'>
              <p className='grid col-span-2'></p>
              <p className='grid col-span-3'>Producto</p>
              <p className='grid col-span-2'>Cantidad</p>
              <p>Precio</p>
            </div>
            <div className='max-h-96 overflow-y-scroll'>
            {
              products.sort((a, b) => (a.name > b.name) ? 1: -1).map((product) => {
                return (
                  <div className='mt-5 grid grid-cols-9 items-center text-center text-[#031442] text-[1.2rem] font-light'>
                    <img className='grid col-span-2 w-40' src={product.img} alt="" />
                    <p className='grid col-span-3'>{product.name}</p>
                    <div className='col-span-2'>
                        <Counter product={product}/>
                    </div>
                    <p>{(product.price * product.qty).toFixed(2)}€</p>
                    <div className='flex justify-end'>
                    <img className='w-5 mr-5 cursor-pointer' src={rubish} alt="" onClick={() => deleteProduct(product)}/>
                    </div>
                   </div>
                )
              })
            }
            </div>
            <div className='flex border-t border-t-[#dddddd] grid grid-cols-9 text-center py-8 mt-10 text-[#031442]'>
              <p className='grid col-span-4'></p>
              <p className='grid col-span-1 '></p>
              <h2 className='grid col-span-2  font-bold text-[1.3rem]'>TOTAL</h2>
              <h2 className='font-bold text-[1.3rem]'>{total.toFixed(2)}€</h2>
            </div>
            
          </div>

        </div>
        <div className='w-2/4 mt-40 ml-20 pr-20 mr-40'>
          <h2 className='text-4xl font-bold mb-10 text-[#031442]'>Método de Pago</h2>
          <div>
            <form className='grid grid-cols-2 text-[#031442]' onSubmit={ev =>
              ev.preventDefault()
            } >
              <div className='flex flex-col'>
                <label htmlFor="">Nombre</label>
                <input className='border-2 h-[2rem] rounded mr-10 mt-1' type="text"/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Apellidos</label>
                <input className='border-2 h-[2rem] rounded mr-10 mt-1' type="text" />
              </div>
              <div className='flex flex-col mt-6'>
                <label htmlFor="">Correo Electrónico</label>
                <input className='border-2 h-[2rem] rounded mr-10 mt-1' type="text" />
              </div>
              <div className='flex items-end justify-end'>
                <button className='flex items-center justify-center h-[2rem] bg-[#6366F1] py-2 px-10 rounded-lg text-white text-[1.2rem] mr-10' onClick={()=>setVisible(true)}>Ir a datos bancarios</button>
              </div>
            </form>
          </div>

          {
            visible && (
          <div className='mt-20 '>
            <div className='flex w-full gap-1'>
              <div className='w-2/4 bg-[#ECECEC] flex items-center justify-center gap-3 rounded-t-lg'>
                <img className='w-10' src={card} alt="" />
                <p className='font-bold'>Tarjeta de crédito</p>
              </div>
              <div className='w-2/4 flex justify-center items-center gap-3 border-2 rounded-t-lg'>
                <img className='w-10 ' src={paypal} alt="" />
                <p>Paypal</p>
              </div>
            </div>
            <div className='bg-[#ECECEC] rounded-b-lg'>
              <form className='py-10 mx-10' action="">
                <div className='flex flex-col'>
                  <label htmlFor="">Numero de cuenta</label>
                  <input className='border-2 h-[2rem] rounded  mt-1' type="text" />
                </div>
                <div className='mt-6 flex w-full gap-20'>
                  <div className='flex flex-col w-2/4'>
                    <label htmlFor="">Fecha de Caducidad</label>
                    <input className='border-2 h-[2rem] rounded  mt-1' type="text" />
                  </div>
                  <div className='flex flex-col w-2/4'>
                    <label htmlFor="">Código de verificación</label>
                    <input className='border-2 h-[2rem] rounded  mt-1' type="text" />
                  </div>
                </div>
                <div className='flex justify-end'>
                  <NavLink to='../pedido-realizado'>
                    <button className='mt-8 bg-[#6366F1] py-2 px-10 rounded-lg text-white text-[1.2rem]'>Realizar pago</button>
                  </NavLink>
                </div>
                
              </form>
            </div>

          </div>

            )
          }
        </div> 
      </div>
      <Footer />
    </div>
    </div>
    
    
  )
}

export default Checkout;