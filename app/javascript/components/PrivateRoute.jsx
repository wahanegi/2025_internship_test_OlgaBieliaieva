import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./userContext";
import Loader from "./Loader";

const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};
export default PrivateRoute;
