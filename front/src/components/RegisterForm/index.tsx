"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { validateRegister } from "@/helpers/validations";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const CREATE_USER = gql`
  mutation Signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      token
      user {
        firstName
        lastName
        email
      }
    }
  }
`;

const LOGIN_USER = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

const RegisterForm: React.FC = () => {
  const { setIsLogged, login } = useContext(UserContext);
  const router = useRouter();

  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors(validateRegister({ ...registerValues, [name]: value }));
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await createUser({
        variables: {
          signupInput: registerValues,
        },
      });

      if (result.data?.signup?.token) {
        const loginResult = await loginUser({
          variables: {
            loginInput: {
              email: registerValues.email,
              password: registerValues.password,
            },
          },
        });
        if (loginResult.data?.login?.token) {
          setIsLogged(true);
          localStorage.setItem("token", loginResult.data.login.token);
          localStorage.setItem("user", JSON.stringify(loginResult.data.login.user));
          router.push("/thanks");
        }
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
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
          required
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-red-500 text-xs mt-1">{errors.email}</span>
        )}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
          required
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {errors.password && (
          <span className="text-red-500 text-xs mt-1">{errors.password}</span>
        )}
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="firstName"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
          {errors.firstName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="lastName"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
          {errors.lastName && (
            <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="text-white bg-violet hover:bg-darkviolet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Register
        </button>

        <Link href="/login">
          <p className="text-violet hover:underline ml-4">
            Already have an account? Sign in
          </p>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
