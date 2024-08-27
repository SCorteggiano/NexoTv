"use client";
import { createContext, useState, useEffect } from "react";
import {
  IUserContext,
  ILoginUserResponse,
  ILoginUser,
  IUser,
} from "@/interfaces/index";
import { postLogin, postRegister  } from "@/fetching/fetchUsers";
import Swal from "sweetalert2";

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<ILoginUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    setUser(null);
    setIsLogged(false);
  };

  const register = async (user: Omit<IUser, "id">) => {
    try {
      const data = await postRegister(user);
      if (data.id) {
        const succes = await login({
          email: user.email,
          password: user.password,
        });
        return true;
      }
      setError("Registration failed");
      return false;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong in the Register process!",
      });
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, [user]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
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
        setIsLogged,
        login,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
