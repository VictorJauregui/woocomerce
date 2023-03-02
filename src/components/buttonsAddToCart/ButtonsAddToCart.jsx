import iconInformation from '../../assets/images/icon-information.png'

export const ButtonsAddTocart = ({size}) => {
    console.log(size)
    return (
        <div className='flex items-center justify-end mb-2'>
            <img className='w-12 border-2 border-[#6366F1] p-1 mr-4 rounded-3xl' src={iconInformation} alt="icon more information" />
            <button className="bg-[#6366F1] px-7 py-2 rounded-xl text-[1.5rem]">Añadir</button>
        </div>

    )
}
