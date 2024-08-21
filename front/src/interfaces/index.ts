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
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    suscribtion: boolean,
}

interface IMovie {
    id: number,
    categoryId: number,
    title: string,
    duration: string,
    description: string,
    img: string,
    rating: string,
}

interface ISeries {
    id: number,
    categoryId: number,
    title: string,
    duration: string,
    cap: string,
    description: string,
    img: string,
    rating: string,
}

export type {
    IRegisterUser,
    ILoginUser,
    IUser,
    IMovie,
    ISeries
}