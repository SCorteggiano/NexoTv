import { IUser, ILoginUser } from "@/interfaces";

export const postRegister = async (user: Omit<IUser, "id">) => {
    const res = await fetch("...", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      return data
}

export const postLogin = async (credentials: ILoginUser) => {
    const res = await fetch("...", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      return data
}