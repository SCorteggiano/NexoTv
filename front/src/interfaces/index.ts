import { ReactNode } from "react";

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscription?: boolean;
}

interface IMovie {
  id: number;
  category: string[];
  title: string;
  duration: string;
  description: string;
  image: string;
  contentUrl: string[];
}

interface IMovieCard {
  id: number;
  image: string;
  title: string;
  description: string;
  duration: string;
}

interface ISeriesCard {
  id: number,
  title: string;
  image: string,
  description: string;
  episodes?: string;
}

interface ISeries {
  id: number;
  category: string[];
  title: string;
  episodes: string;
  description: string;
  image: string;
}

interface IUserContext {
  user: Partial<ILoginUserResponse> | null;
  setUser: React.Dispatch<
    React.SetStateAction<Partial<ILoginUserResponse> | null>
  >;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  login: (credentials: ILoginUser) => Promise<boolean>;
  register: (user: Omit<IUser, "id">) => Promise<boolean>;
  logout: () => void;
}

interface ILoginUserResponse {
  login: boolean;
  user: Partial<IUser> | null;
  token: string;
}

interface ILoginValidate {
  email: string;
  password: string;
}

interface IRegisterValidate {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface ICategory {
  id: number;
  name: string;
}

interface IPaginationContextProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

interface IPaginationProviderProps {
  totalPages: number;
  children: ReactNode;
}

export type {
  IRegisterUser,
  ILoginUser,
  IUser,
  IMovie,
  ISeries,
  IMovieCard,
  ISeriesCard,
  ILoginUserResponse,
  IUserContext,
  ILoginValidate,
  IRegisterValidate,
  ICategory,
  IPaginationContextProps,
  IPaginationProviderProps,
};
