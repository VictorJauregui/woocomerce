import React, { useContext } from 'react'
import close from '../../assets/images/close.png'
import items from '../../assets/images/items.png'
import { allContext } from '../../context/Context'




const Modal = () => {
    const { setIsOpen, products } = useContext(allContext)
    
    const closeModal = () => {
        setIsOpen(false)
    }

    // const addToCart = (product) => {
    //     setIsOpen(false)
    //     setCountesCart(prevState => prevState +1)
    //     setProducts([...products, product])
    //     setChoosedProduct(true)
    // }


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/50">
        <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0">
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-4 z-30 w-2/4">
                <div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-[2.2rem] text-[#031442]'>Producto</h2>
                        <img className='w-4 h-4 cursor-pointer' src={close} alt="" onClick={closeModal}/>
                    </div>
                    {
                        products.map((product) => {
                            return (
                            <div>
                                <p className='font-semibold text-[1.5rem] text-[#6366F1] '>{`${product.type} "${product.name}"`}</p>
                                <div className='flex w-full mt-10'>
                                    <div className='mx-center w-2/4'>
                                        <img className='' src={product.img} alt=""/>
                                    </div>
                                    <div className='w-2/4'>
                                        <div className='flex mr-10 mt-5 '>
                                            <img className='w-6 h-6 mr-2' src={items} alt="" />
                                            <p>{product.fistParagraph}</p>
                                        </div>
                                        <div className='flex mr-10 mt-5 '>
                                            <img className='w-6 h-6 mr-2' src={items} alt="" />
                                            <p>{product.secondParagraph}</p>
                                        </div>
                                        <div className='flex mr-10 mt-5 '>
                                            <img className='w-6 h-6 mr-2' src={items} alt="" />
                                            <p>{product.thirdParagraph}</p>
                                        </div>
                                        <div className='flex mr-10 mt-5 '>
                                            <img className='w-6 h-6 mr-2' src={items} alt="" />
                                            <p>{product.fourthParagraph}</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex w-full mt-20'>
                                    <div className='w-2/4 flex justify-center'>
                                        <p className='font-bold text-[#6366F1] text-[2rem]'>{product.price}€</p>
                                    </div>
                                    <div className='flex justify-end w-2/4'>
                                        <button className='bg-[#6366F1] py-2 px-5 text-white text-[1.2rem] flex justify-end rounded-lg'>Añadir al carrito</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal