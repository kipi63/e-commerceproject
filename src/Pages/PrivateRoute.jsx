import React from "react";
import { Navigate } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
