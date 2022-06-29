import { createContext, useCallback, useEffect, useState } from "react";

import api from "../../services";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signIn = useCallback(async (formData) => {
    try {
      const { data } = await api.post("/auth", formData);

      setUser(data.user);

      localStorage.setItem("@auth/user", JSON.stringify(data.user));
      localStorage.setItem("@auth/token", JSON.stringify(data.token));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      // await api.delete("/auth");

      setUser({});
      localStorage.removeItem("@auth/user");
      localStorage.removeItem("@auth/token");
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const foundUser = localStorage.getItem("@auth/user");

    if (foundUser) {
      const parsedUser = JSON.parse(foundUser);

      setUser(parsedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
