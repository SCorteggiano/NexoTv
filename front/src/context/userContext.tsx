"use client";

import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { IUserContext, ILoginUserResponse, ILoginUser, IUser } from "@/interfaces/index";
import { postLogin, postRegister } from "@/fetching/fetchUsers";

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  isLogged: false,
  isAdmin: false,
  setIsLogged: () => {},
  setIsAdmin: () => {},
  login: async () => false,
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<ILoginUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: ILoginUser) => {
    try {
      const data = await postLogin(credentials);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      setIsLogged(true);

      // Verifica si el usuario tiene rol de admin
      if (user?.user?.roles === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials!",
      });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsLogged(false);
    setIsAdmin(false); // Resetea el estado de admin al hacer logout
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUser(parsedUser);

      // Verifica el rol en el almacenamiento local
      if (parsedUser.roles && parsedUser.roles.includes("admin")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      return;
    }
    setUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        isAdmin,
        setIsLogged,
        setIsAdmin,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
