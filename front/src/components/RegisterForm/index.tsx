import React from "react";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  return (
    <form className="max-w-md mx-auto mt-20 mb-36">
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      {/* Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      {/* Phone */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="phone"
          id="phone"
          className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
          required
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone Number
        </label>
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
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block pt-3 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet peer"
            required
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
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
