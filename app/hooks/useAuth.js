import React, { useContext, useState } from "react";
import jwtDecode from "jwt-decode";

import authContext from "../auth/context";
import authStorage from "../auth/authStorage";
import authApi from "../auth/auth";

export default useAuth = () => {
  const { user, setUser } = useContext(authContext);
  const [error, setError] = useState(false);

  const login = async ({ email, password }) => {
    const response = await authApi.login({ email, password });

    if (!response.ok) return setError(true);

    const authToken = response.data;
    await authStorage.store(authToken);
    setUser(jwtDecode(authToken));
  };

  const logOut = async () => {
    await authStorage.delete();
    setUser(null);
  };

  return { login, error, user, logOut };
};
