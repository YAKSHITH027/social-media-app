import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Dashboard from "../Components/Dashboard/Dashboard";
import Protected from "./Protected";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const DASHBOARD = "/dashboard";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element="home" />
        <Route path={REGISTER} element={<Register />} />
        <Route path={LOGIN} element={<Login />} />
        <Route
          path={DASHBOARD}
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
