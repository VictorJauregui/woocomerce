import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Completed } from "../pages/Completed";
import { Home } from "../pages/Home";
import { InProgress } from "../pages/InProgress";
import Login from "../pages/Login";
import { COMPLETED, INPROGRESS, LOGIN } from "./paths";
import PublicRoute from "../Typeroutes/PublicRoute";
import PrivateRoute from "../Typeroutes/PrivateRoute";

export const PathRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path={COMPLETED} element={<Completed />} />
            <Route path={INPROGRESS} element={<InProgress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
