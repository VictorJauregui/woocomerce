import iconInformation from '../../assets/images/icon-information.png'

export const ButtonsAddTocart = ({size}) => {
    console.log(size)
    return (
        <div className=''>
            <img className='' src={iconInformation} alt="icon more information" />
            <button className="">Añadir</button>
        </div>

    )
}
