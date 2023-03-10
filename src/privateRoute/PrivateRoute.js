import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../config/routes/paths";
import { allContext } from "../context/Context";

export const PrivateRoute = () => {
  const { value } = useContext(allContext);
  
  if (!value.isAuthenticated) {
    return <Navigate to={LOGIN} replace={true} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};