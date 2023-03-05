import { useContext } from 'react'
import iconInformation from '../../assets/images/icon-information.png'
import { allContext } from '../../context/Context'

export const ButtonsAddTocart = ({ width, product }) => {
    const { setIsOpen } = useContext(allContext)

    const info = () => {
        setIsOpen(true)
    }

    return (
        <div className='flex items-center justify-end mb-2'>
            <img className='w-12 border-2 border-[#6366F1] p-1 mr-4 rounded-3xl cursor-pointer' src={iconInformation} alt="icon more information" onClick={info} />
            <button className={`bg-[#6366F1] flex justify-center px-5 py-2 rounded-xl text-[1.5rem] ${width}`} >Añadir</button>
        </div>

    )
}
