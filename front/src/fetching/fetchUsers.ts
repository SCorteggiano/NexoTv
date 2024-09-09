import { IUser, ILoginUser } from "@/interfaces";

export const postRegister = async (user: Omit<IUser, "id">) => {
  const res = await fetch("TU_URL_DE_GRAPHQL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation RegisterUser($input: RegisterInput!) {
          registerUser(input: $input) {
            id
            name
            email
            token
          }
        }
      `,
      variables: {
        input: user,
      },
    }),
  });
  const data = await res.json();
  return data.data.registerUser;
};


export const postLogin = async (credentials: ILoginUser) => {
  const res = await fetch("TU_URL_DE_GRAPHQL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation LoginUser($input: LoginInput!) {
          loginUser(input: $input) {
            token
            user {
              id
              name
              email
              userImage
            }
          }
        }
      `,
      variables: {
        input: credentials,
      },
    }),
  });
  const data = await res.json();
  return data.data.loginUser;
};
