"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { validateLogin } from "@/helpers/validations";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const LOGIN_USER = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        id
        email
        firstName
        lastName
        userImage
        roles
      }
    }
  }
`;

const LoginForm: React.FC = () => {
  const { setIsLogged, setUser } = useContext(UserContext);
  const router = useRouter();

  const [loginValues, setLoginValues] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors(validateLogin({ ...loginValues, [name]: value }));
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await loginUser({
        variables: {
          loginInput: loginValues,
        },
      });

      if (result && result.data) {
        const userData = result.data.login;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", userData.token);
        setIsLogged(true);
        router.push("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 mb-36">
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorder border-darkBorder focus:border-violet dark:focus:border-violet"
          required
          placeholder=" "
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="absolute text-xl text-gray-600 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:peer-focus:text-violet peer-valid:scale-75 peer-valid:-translate-y-6"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      {/* Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorder border-darkBorder focus:border-violet dark:focus:border-violet"
          required
          placeholder=" "
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          className="absolute text-xl text-gray-600 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:peer-focus:text-violet peer-valid:scale-75 peer-valid:-translate-y-6"
        >
          Password
        </label>
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="text-white bg-violet hover:bg-darkviolet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 dark:bg-violet dark:hover:bg-darkviolet"
        >
          Sign In
        </button>

        <Link href="/register">
          <p className="text-blue-600 hover:underline ml-4 dark:text-blue-600 dark:hover:underline">
            Dont have an account? Create one
          </p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
