import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN } from "./AllRoutes";
import { useAuth } from "../CustomHooks/Auth";
const Protected = ({ children }) => {
  //   const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  console.log(user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (isLoading) return "...loading";
  return children;
};

export default Protected;
