"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";

const HelpForm = () => {
  const [state, handleSub] = useForm("mpwaeapw");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  if (state.succeeded) {
    Swal.fire("Message Sent Successfully!");
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSub}
      className="p-6 rounded-lg shadow-md bg-lightBackground dark:bg-darkBackground"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-lg font-medium mb-2 text-lightText dark:text-darkText"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-black bg-white dark:bg-gray-800 dark:text-lightText"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-lg font-medium mb-2 text-lightText dark:text-darkText"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black bg-white dark:bg-gray-800 dark:text-lightText"
          rows={4}
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default HelpForm;
