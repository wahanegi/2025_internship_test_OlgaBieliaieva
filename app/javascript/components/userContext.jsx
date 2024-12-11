import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.headers.common["X-CSRF-Token"] =
  document.querySelector("[name=csrf-token]").content;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/users/current_user", { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
