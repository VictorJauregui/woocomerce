import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../config/routes/paths.js";
import { allContext } from "../context/Context";

export const PublicRoute = () => {
  const { value } = useContext(allContext);
 
  if (value.isAuthenticated) {
    console.log("here public");
    return <Navigate to={HOME} replace={true} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
