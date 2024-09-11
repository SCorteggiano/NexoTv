"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { validateRegister } from "@/helpers/validations";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import LoadingSpinner from "@/components/Loading/Loading";


const CREATE_USER = gql`
  mutation Signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      token
      user {
        firstName
        lastName
        email
        userImage
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
        userImage
        roles
      }
    }
  }
`;

const RegisterForm: React.FC = () => {
  const { setIsLogged, setUser } = useContext(UserContext);
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

      if (result && result.data) {
        const loginResult = await loginUser({
          variables: {
            loginInput: {
              email: registerValues.email,
              password: registerValues.password,
            },
          },
        });

        if (loginResult.data?.login?.token) {
          const userData = loginResult.data.login.user;
          const token = loginResult.data.login.token;
          setUser(userData);          
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLogged(true);

          console.log('UserContext after login:', userData);
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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center pt-5">
        <LoadingSpinner />
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 mb-36">
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
  <input
    type="email"
    name="email"
    id="email"
    className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorde border-darkBorder focus:border-violet dark:focus:border-violet"
    placeholder=" "
    required
    onChange={handleChange}
  />
  <label
    htmlFor="email"
    className="absolute text-xl text-gray-600 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:peer-focus:text-violet peer-valid:scale-75 peer-valid:-translate-y-6"
  >
    Email
  </label>
  {errors.email && (
    <span className="text-red-500 text-xs mt-1">{errors.email}</span>
  )}
</div>


      {/* Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorde border-darkBorder focus:border-violet dark:focus:border-violet"
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
          <span className="text-red-500 text-xs mt-1">{errors.password}</span>
        )}
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        {/* First Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorder border-darkBorder focus:border-violet dark:focus:border-violet"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="firstName"
            className="absolute text-xl text-gray-600 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:peer-focus:text-violet peer-valid:scale-75 peer-valid:-translate-y-6"
            >
            First Name
          </label>
          {errors.firstName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.firstName}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block pt-3 px-0 w-full text-lg bg-transparent p-2 border-lightText dark:border-darkText border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 dark:bg-transparent dark:border-darkBorder border-darkBorder focus:border-violet dark:focus:border-violet"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="lastName"
            className="absolute text-xl text-gray-600 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:peer-focus:text-violet peer-valid:scale-75 peer-valid:-translate-y-6"
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
          className="text-white bg-violet hover:bg-darkviolet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 dark:bg-violet dark:hover:bg-darkviolet"
        >
          Register
        </button>

        <Link href="/login">
          <p className="text-blue-600 hover:underline ml-4 dark:text-blue-600 dark:hover:underline">
            Already have an account? Sign in
          </p>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
