import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <main className="items-center mt-48">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl">
          Login
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Welcome, please sign in to your account to enjoy all our services
        </p>
      </div>
      <LoginForm />
    </main>
  );
};

export default Login;
