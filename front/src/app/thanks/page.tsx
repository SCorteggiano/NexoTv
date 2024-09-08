import React from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

const Thanks = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 bg-lightBackground dark:bg-darkBackground">
      <h1 className="text-4xl font-bold text-violet dark:text-violet">
        Registration Successful!
      </h1>
      <p className="mt-4 text-lg text-lightText dark:text-darkText pb-4">
        Thank you for joining us! Explore our content and enjoy your experience.
      </p>
      <div className="flex space-x-4">
        <Button
          pill
          as={Link}
          href="/"
          className="bg-violet hover:bg-darkviolet text-lightText dark:text-darkText px-6 py-1"
        >
          Go back to Home
        </Button>
        <Button
          pill
          as={Link}
          href="/pricings"
          className="bg-violet hover:bg-darkviolet text-lightText dark:text-darkText px-6 py-1"
        >
          View Subscription Plans
        </Button>
      </div>
    </div>
  );
};

export default Thanks;
