import React from 'react'
import ListBestPrices from '../components/products/bestPrices/ListBestPrices';
import ListEbooks from '../components/products/ebooks/ListEbooks';
import ListExcels from '../components/products/excels/ListExcels';
import ListMoreSells from '../components/products/more-sells/ListMoreSells';
import TopScreenShop from '../components/topScreenShop/TopScreenShop';


const Shop = (title) => {
  return (
    <div>
     <TopScreenShop />
     <ListMoreSells />
     <ListBestPrices />
     <ListEbooks />
     <ListExcels />
    </div>
  )
}

export default Shop;