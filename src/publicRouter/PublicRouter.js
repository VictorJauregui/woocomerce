import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME  } from "../config/routes/paths.js";
import { allContext } from "../context/Context";

export const PublicRoute = () => {
    const {isAuthenticated} = useContext(allContext)
    console.log(isAuthenticated)

    isAuthenticated && (
        <Navigate to={HOME} />
    )


    return (
        <div>
            <Outlet />
        </div>
    )
}