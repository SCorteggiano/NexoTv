'use client'
import GoogleLoginButton from '@/components/GoogleLoginButton/GoogleLoginButton';
import React from 'react';

const Testpage = () => {

  return (
    <div id='wholeContainer' className='m-6'>
      <h1 className='m-4 text-5xl text-center'>Test Page</h1>
      <div>
        <GoogleLoginButton/>
      </div>
    </div>
  );
};

export default Testpage;
