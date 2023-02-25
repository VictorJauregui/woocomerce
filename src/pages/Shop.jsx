import React from 'react'
import ListBestPrices from '../components/products/bestPrices/ListBestPrices';
import ListMoreSells from '../components/products/more-sells/ListMoreSells';
import TopScreenShop from '../components/topScreenShop/TopScreenShop';


const Shop = (title) => {
  return (
    <div>
     <TopScreenShop />
     <ListMoreSells />
     <ListBestPrices />
    </div>
  )
}

export default Shop;