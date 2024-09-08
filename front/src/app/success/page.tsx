import React from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 bg-lightBackground dark:bg-darkBackground">
      <h1 className="text-4xl font-bold text-violet dark:text-violet">
        Payment Successful!
      </h1>
      <p className="mt-4 text-lg text-lightText dark:text-darkText pb-4">
        Thank you for your purchase! Your subscription is now active.
      </p>
      <Button
        pill
        as={Link}
        href="/"
        className="bg-violet hover:bg-darkviolet text-lightText dark:text-darkText mr-3 px-6 py-1"
      >
        Go back to Home
      </Button>
    </div>
  );
};

export default Success;
