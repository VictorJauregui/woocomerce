import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from '../pages/Checkout'
import Shop from '../pages/Shop'
import PedidoRealizado from '../pages/PedidoRealizado'
import Login from '../pages/Login'
import { CHECKOUT, PEDIDO_REALIZADO } from '../config/routes/paths'
import { PublicRoute } from '../publicRouter/PublicRouter'
import { PrivateRoute } from '../privateRoute/PrivateRoute'

const PathRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<PublicRoute />} >
            <Route index element= {<Login/>} />
          </Route>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element= {<Shop />} />
            <Route path={CHECKOUT} element= {<Checkout />} />
            <Route path={PEDIDO_REALIZADO} element= {<PedidoRealizado />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default PathRoutes;