"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { validateLogin } from "@/helpers/validations";

const LoginForm: React.FC = () => {
  const { login } = useContext(UserContext);
  const router = useRouter();

  const [loginValues, setLoginValues] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
    setErrors(validateLogin({ ...loginValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // const success = await login(loginValues);
    // if (success) {
    //   router.push("/home");
    // } else {
    //   alert("Invalid credentials");} //Agregar manejo de errores
    console.log(loginValues); // log de prueba
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 mb-36">
      {/* Email */}
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
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      {/* Password */}
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
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="text-white bg-violet hover:bg-darkviolet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign In
        </button>

        <Link href="/register">
          <p className="text-violet hover:underline ml-4">
            Dont have an account? Create one
          </p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
