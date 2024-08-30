'use client';
import GoogleLoginButton from '@/components/GoogleLoginButton/GoogleLoginButton';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Testpage = () => {
  const { data: session } = useSession();

  if (session) {
    // Vista si el usuario está autenticado
    return (
      <div>
        <p>Hello, {session.user?.name}</p>
        <button onClick={() => signOut()}>Log Out</button>
      </div>
    );
  }

  return (
    // Vista si el usuario no está autenticado
    <div id='wholeContainer' className='m-6'>
      <h1 className='m-4 text-5xl text-center'>Test Page</h1>
      <GoogleLoginButton />
    </div>
  );
};

export default Testpage;
