import { isEmpty } from "lodash";
import { createContext, useCallback, useEffect, useState } from "react";

import api from "../../services";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userType, setUserType] = useState(0);

  const signIn = useCallback(async (formData) => {
    try {
      const { data } = await api.post("/auth", formData);

      setUser(data.user);

      localStorage.setItem("@auth/user", JSON.stringify(data.user));
      localStorage.setItem("@auth/token", JSON.stringify(data.token));
    } catch (err) {
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setUser({});
      localStorage.removeItem("@auth/user");
      localStorage.removeItem("@auth/token");
    } catch (err) {
    }
  }, []);

  useEffect(() => {
    const foundUser = localStorage.getItem("@auth/user");

    if (!isEmpty(foundUser)) {
      const parsedUser = JSON.parse(foundUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, userType, setUserType, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
