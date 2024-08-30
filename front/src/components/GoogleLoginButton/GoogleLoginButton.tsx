/* eslint-disable @next/next/no-img-element */
'use client';
import { signIn } from 'next-auth/react';

const GoogleLoginButton = () => {
  const handleSignIn = () => {
    signIn('google', { callbackUrl: '/' }); // Redirigir al dashboard tras el login
  };

  return (
    <div className="w-fit h-fit p-2 flex border rounded-2xl max-w-md mx-auto mt-2">
      <img
        className="w-6 h-6 m-2"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <button onClick={handleSignIn}>Continue with Google</button>
    </div>
  );
};

export default GoogleLoginButton;
