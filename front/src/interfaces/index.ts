interface IRegisterUser {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
}

interface ILoginUser {
    email: string,
    password: string,
}

interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    subscription?: boolean,
}

interface IMovie {
    id: number,
    categoryId: number,
    title: string,
    duration: string,
    description: string,
    img: string,
}

interface IMovieCard {
    img: string
    title: string
    description: string
    duration: string
}

interface ISeriesCard {
    img: string
    title: string
    description: string
    episodes: string
}

interface ISeries {
    id: number,
    categoryId: number,
    title: string,
    episodes: string,
    description: string,
    img: string,
}

interface IUserContext {
    user:  Partial <ILoginUserResponse> | null,
    setUser: React.Dispatch<React.SetStateAction<Partial<ILoginUserResponse> | null>>,
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void,
    login:  (credentials: ILoginUser) => Promise<boolean>;
    register:  (user: Omit <IUser, "id">) => Promise<boolean>,
    logout: () => void, 
}

interface ILoginUserResponse{
    login: boolean,
    user: Partial <IUser> | null,
    token: string,
}

interface ILoginValidate {
    email: string;
    password: string;
  }
  
  interface IRegisterValidate {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
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
    IRegisterValidate
}