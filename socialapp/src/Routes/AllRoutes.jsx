import React from "react";
import { Route, Routes } from "react-router-dom";
export const ROOT = "/";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element="home" />
      </Routes>
    </div>
  );
};

export default AllRoutes;
