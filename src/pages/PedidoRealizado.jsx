import React, { useContext } from 'react'
import { allContext } from '../context/Context'
import Footer from '../components/footer/Footer';



const PedidoRealizado = () => {
  const { products } = useContext(allContext)



  return (
    <div className='mt-40 text-center text-[#031442]'>
      <h2 className='text-[3rem] font-bold'>¡Enhorabuena, Víctor!</h2>
      <h3 className='text-[2.5rem] font-bold'>Tu pedido se ha realizado correctamente</h3>
      <h4 className='text-[1.8rem] mt-8'>Ya te hemos enviado todo el material a tu correo eléctrónico.</h4>
      <h4 className='text-[1.8rem]'>Aquí tienes los datos de tu compra.</h4>
      <div className='pl-10 bg-[#ECECEC] w-2/4 mx-auto mt-10 rounded pb-10'>
      <div className='pt-10 grid grid-cols-10 font-bold text-[#031442] text-[1.3rem]' >
              <p className='grid col-span-2 justify-end'></p>
              <p className='grid col-span-4'>Producto</p>
              <p className='grid col-span-1'>Cantidad</p>
              <p className='grid col-span-2 justify-end '>Precio</p>
            </div>
      {
              products.sort((a, b) => (a.price > b.price) ? 1: -1).map((product) => {

                return (
                  <div className=' mt-5 grid grid-cols-10 items-center justify-center text-[#031442] text-[1.2rem] font-light'>
                    <img className='grid col-span-2 w-40' src={product.img} alt="" />
                    <p className='grid col-span-4'>{`${product.type} ${product.name}`}</p>
                    <p className='grid col-span-1'>{product.qty}</p>
                    <p className='grid col-span-2 justify-end mr-2'>{product.price * product.qty}€</p>
                   </div>
                )
              })
            }
            <div className='flex border-t border-t-[#dddddd] grid grid-cols-9 text-center pt-10 mt-10 text-[#031442]'>
              <p className='grid col-span-5'></p>
              <h2 className='grid col-span-2  font-bold text-[1.3rem]'>TOTAL</h2>
              <h2 className='grid col-span-2 font-bold text-[1.3rem] mr-6'>99€</h2>
            </div>
      </div>
      <p className='mt-20'>Desde Alonbalon queremos darte las gracias por confiar en nosotros y deseamos que los productos cumplan tus expectativas y te ayuden a ser aún mejor profesional.</p>
      <p>Hasta la próxima furbolero.</p>
        <Footer />
    </div>
    
  )
}

export default PedidoRealizado