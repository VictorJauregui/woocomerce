import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/workerTaks/NavBar'
import { Completed } from '../pages/Completed'
import { Home } from '../pages/Home'
import { InProgress } from '../pages/InProgress'

export const PathRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav />
            <Routes >
                <Route path='/' element={<Home />}/>
                <Route path='/completado' element={<Completed />}/>
                <Route path='/in-progress' element={<InProgress />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
