import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Error from '../pages/Error'
import PedidoRealizado from '../pages/PedidoRealizado'

const PathRoutes = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/shop' element= {<Shop />} />
            <Route path='/checkout' element= {<Checkout />} />
            <Route path='/pedido-realizado' element= {<PedidoRealizado />} />
        </Routes>
    </BrowserRouter>
  )
}

export default PathRoutes;