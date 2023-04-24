import React, { useContext } from "react";
import { toDoContext } from "../context/Context";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../routes/paths";

const PublicRoute = () => {
  const { newValue } = useContext(toDoContext);
  const { isAuthenticated } = newValue;

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
