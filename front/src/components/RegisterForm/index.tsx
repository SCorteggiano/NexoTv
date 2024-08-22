"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { validateRegister } from "@/helpers/validations";

const RegisterForm: React.FC = () => {
  const { register } = useContext(UserContext);
  const router = useRouter();

  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterValues({ ...registerValues, [name]: value });
    setErrors(validateRegister({ ...registerValues, [name]: value }));
  };

  const handeSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = {
      email: registerValues.email,
      password: registerValues.password,
      first_name: registerValues.first_name,
      last_name: registerValues.last_name,
    };

    // const success = await register(user);
    // if (success) router.push("/home");
    // if (!success) alert("Invalid credentials"); //Agregar manejo de errores
    console.log(user); //log de prueba
  };

  return (
    <form onSubmit={handeSubmit} className="max-w-md mx-auto mt-20 mb-36">
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
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

      {/* First Name */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
          {errors.first_name && (
            <span className="text-red-500 text-xs mt-1">
              {errors.first_name}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
          {errors.last_name && (
            <span className="text-red-500 text-xs mt-1">
              {errors.last_name}
            </span>
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
