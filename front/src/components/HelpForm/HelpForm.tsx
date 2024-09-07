'use client'
import React, { useState } from 'react';

const HelpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default HelpForm;
