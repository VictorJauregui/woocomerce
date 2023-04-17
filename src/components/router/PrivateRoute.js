import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context'
import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN  } from '../../routes/paths'

const PrivateRoute = () => {
    const{isAuthenticated} = useContext(toDoContext)
    console.log(isAuthenticated)
    
    if(!isAuthenticated){
        return <Navigate to={LOGIN}/>
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoute