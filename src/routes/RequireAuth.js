import { isEmpty } from "lodash";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const userFound = localStorage.getItem("@auth/user");

  if (!isEmpty(userFound)) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default RequireAuth;
