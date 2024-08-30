import React from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

const Succes = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 ">
      <h1 className="text-4xl font-bold text-green-500 ">Payment Successful!</h1>
      <p className="mt-4 text-lg pb-4">
        Thank you for your purchase! Your subscription is now active.
      </p>
      <Button
        pill
        as={Link}
        href="/"
        className="bg-violet hover:bg-darkviolet mr-3 px-6 py-1 "
      >
        Go back to Home
      </Button>
    </div>
  );
};

export default Succes;
