import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function PrivateRoute({ isAuthenticated, children }) {
  const [auth, setAuth] = useAuth();
  if (!auth) {
    return <Navigate to="login" replace />;
  }
  return children;
}

export default PrivateRoute;
