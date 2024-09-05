import HelpForm from '@/components/HelpForm/HelpForm';
import React from 'react';

const Help = () => {
  return (
    <div className="min-h-scree p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-12">
          If you need assistance or have any questions, please reach out to us. We are here to help!
        </p>
        <div>
          <HelpForm/>
        </div>
      </div>
    </div>
  );
};

export default Help;
