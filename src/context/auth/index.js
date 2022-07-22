import { isEmpty } from "lodash";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import api from "../../services";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userType, setUserType] = useState(0);
  const navigate = useNavigate();

  const signIn = useCallback(
    async (formData) => {
      try {
        const { data } = await api.post("/auth", formData);

        if (data.message === "User or password not found") {
          await Swal.fire({
            icon: "error",
            title: data.message,
          });

          return;
        }

        if (data.user) {
          setUser(data.user);

          localStorage.setItem("@auth/user", JSON.stringify(data.user));
          localStorage.setItem("@auth/token", JSON.stringify(data.token));
        }

        navigate("/mypatient");
      } catch (err) {}
    },
    [navigate]
  );

  const signOut = useCallback(async () => {
    try {
      setUser({});
      localStorage.removeItem("@auth/user");
      localStorage.removeItem("@auth/token");
    } catch (err) {}
  }, []);

  useEffect(() => {
    async function loadUserInStorage() {
      try {
        const foundUser = await localStorage.getItem("@auth/user");

        if (!isEmpty(foundUser)) {
          const parsedUser = JSON.parse(foundUser);
          setUser(parsedUser);
        }
      } catch (err) {}
    }

    loadUserInStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, userType, setUserType, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
