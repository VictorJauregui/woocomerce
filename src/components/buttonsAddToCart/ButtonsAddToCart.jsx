import { useContext } from 'react'
import iconInformation from '../../assets/images/icon-information.png'
import { allContext } from '../../context/Context'

export const ButtonsAddTocart = ({ width, product, setChoosedProduct, choosedProduct }) => {
    const { setIsOpen, setCountesCart, products, setProducts } = useContext(allContext);


    const info = (product) => {
        setIsOpen(true)
        setProducts([product])

    }

    const addToCart = (product) => {
        setProducts([...products, product])
        setCountesCart(prevState => prevState +1)
        setChoosedProduct(true)
        
    }


    return (
        <div className={ `${choosedProduct && "hidden"}  flex items-center justify-end mb-2`}>
            <img className='w-12 border-2 border-[#6366F1] p-1 mr-4 rounded-3xl cursor-pointer' src={iconInformation} alt="icon more information" onClick={() => info(product)} />
            <button className={`bg-[#6366F1] flex justify-center px-5 py-2 rounded-xl text-[1.5rem] ${width}`} onClick={() => addToCart(product)} >Añadir</button>
        </div>

    )
}
