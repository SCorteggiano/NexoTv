'use client';
import AllContent from '@/components/AllContent/AllContent';
import React from 'react';

const Testpage = () => {
  return (
    // Vista si el usuario no está autenticado
    <div id='wholeContainer' className='m-6'>
      <h1 className='m-4 text-5xl text-center'>Test Page</h1>
      <AllContent/>
    </div>
  );
};

export default Testpage;
