import React, { useContext } from "react";
import { toDoContext } from "../../context/Context";
import { Navigate, Outlet } from "react-router-dom";
import { HOME, LOGIN, PRIVATE } from "../../routes/paths";

const PublicRoute = () => {
  const { isAuthenticated } = useContext(toDoContext);
    console.log(isAuthenticated)
    
  if (isAuthenticated) {
    return <Navigate to={HOME} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
