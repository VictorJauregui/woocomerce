import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN  } from "../config/routes/paths";
import { allContext } from "../context/Context";

export const PrivateRoute = () => {
    const { isAuthenticated } = useContext(allContext)
    console.log(isAuthenticated)

    !isAuthenticated && (
        <Navigate to={LOGIN} />
    )
 
    return (
        <div>
            <Outlet />
        </div>
    )
}