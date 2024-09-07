import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <main className="items-center mt-48 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Login
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl">
          Welcome, please sign in to your account to enjoy all our services
        </p>
      </div>
      <GoogleLoginButton />
      <LoginForm />
    </main>
  );
};

export default Login;
