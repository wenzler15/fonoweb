import { useContext } from "react";

import { AuthContext } from "../../context/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Context must be within provider");
  }

  return context;
};
