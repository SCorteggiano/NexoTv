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

  
  const login = async (credentials: ILoginUser) => {
    try {
      const data = await postLogin(credentials);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      setIsLogged(true);

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
    localStorage.removeItem("profilePicture");
    setUser(null);
    setIsLogged(false);
    setIsAdmin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    const userRole = user?.user?.roles;
    if (userRole && userRole.length > 0 && userRole[0] === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

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
