import React, { useContext } from "react";
import { AuthContext } from "../frontend/context/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Check if user exists and is not empty
  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};
export default RequireAuth;
