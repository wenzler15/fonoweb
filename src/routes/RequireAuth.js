import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import _ from "lodash";

function RequireAuth({ children }) {
  const { user } = useAuth();

  if (_.isEmpty(user)) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

export default RequireAuth;
