import React, { useContext } from 'react'
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';
import ModalAddToCart from '../components/modal/ModalAddToCart';
import ListBestPrices from '../components/products/bestPrices/ListBestPrices';
import ListEbooks from '../components/products/ebooks/ListEbooks';
import ListExcels from '../components/products/excels/ListExcels';
import ListMoreSells from '../components/products/more-sells/ListMoreSells';
import PlanificacionesList from '../components/products/planificaciones/PlanificacionesList';
import TopScreenShop from '../components/topScreenShop/TopScreenShop';
import { allContext } from '../context/Context';


const Shop = () => {
const { isOpen, counterCart } = useContext(allContext)


  return (
    <div>
     <TopScreenShop />
     { isOpen && 
      <Modal />
     }

      { counterCart >= 1 &&
        <ModalAddToCart />
      }
     
     <ListMoreSells />
     <ListBestPrices />
     <ListEbooks />
     <ListExcels />
     <PlanificacionesList />
     <Footer />

    </div>
  )
}

export default Shop;