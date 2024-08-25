import React from "react";
import Link from "next/link";
import { Button, Navbar, NavbarBrand } from "flowbite-react";

const LogRegButtons = () => {
  return (
    <Navbar fluid className="bg-[#0e0e11] mb-3">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NexoTV
        </span>
      </NavbarBrand>
      <div>
        <Link href="/" className="m-6 hover:border-b-2">
          Home
        </Link>
        <Link href="/pricings" className="m-6 hover:border-b-2">
          Pricings
        </Link>
        <Link href="/about" className="m-6 hover:border-b-2">
          About
        </Link>
      </div>
      <div className="flex md:order-2">
        <Button
          as={Link}
          href="/register"
          className="bg-transparent border-violet hover:bg-darkviolet text-center mr-3"
        >
          Register
        </Button>
        <Button
          as={Link}
          href="/login"
          className="bg-transparent border-violet hover:bg-darkviolet text-center mr-3"
        >
          Login
        </Button>
      </div>
    </Navbar>
  );
};

export default LogRegButtons;
