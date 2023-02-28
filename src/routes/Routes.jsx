import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Completed from '../pages/Completed';
import Home from '../pages/Home';
import InProgress from '../pages/InProgress';

const PathRoutes = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/inprogress' element={<InProgress />}/>
            <Route path='/completed' element={<Completed />}/>
        </Routes>  
    </BrowserRouter>
  )
}

export default PathRoutes;