import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  console.log({isLoggedIn});

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn) {
    return children;
  }
};

export default ProtectedRoute;
