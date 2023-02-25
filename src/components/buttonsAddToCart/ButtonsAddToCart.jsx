import './ButtonsAddToCart.css';
import iconInformation from '../../assets/images/icon-information.png'

export const ButtonsAddTocart = ({size}) => {
    console.log(size)
    return (
        <div className='div-btns-add-to-cart'>
            <img className='icon-more-information' src={iconInformation} alt="icon more information" />
            <button className={`btn-add-to-cart ${size}`}>Añadir</button>
        </div>

    )
}
