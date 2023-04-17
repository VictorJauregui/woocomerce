import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context'
import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN  } from '../../routes/paths'

const PrivateRoute = () => {
    const { newValue } = useContext(toDoContext)
    const {isAuthenticated} = newValue;
    console.log(isAuthenticated)

    if(!isAuthenticated){
        console.log("MIQUEL")
        return <Navigate to={LOGIN}/>
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoute