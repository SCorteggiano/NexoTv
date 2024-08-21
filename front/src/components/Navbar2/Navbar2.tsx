import React from "react";
import { Button, Navbar, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <Navbar fluid className="bg-[#0e0e11] mb-3">
      <div className="flex md:order-2">
        <Button
          as={Link}
          href="/"
          className=" bg-violet hover:bg-darkviolet text-center mr-3"
          pill
        >
          Home
        </Button>
        <Button
          as={Link}
          href="/movies"
          className=" bg-violet hover:bg-darkviolet text-center mr-3"
          pill
        >
          Movies
        </Button>
        <Button
          as={Link}
          href="/series"
          className=" bg-violet hover:bg-darkviolet text-center mr-3"
          pill
        >
          Series
        </Button>
        <Button
          as={Link}
          href="/about"
          className=" bg-violet hover:bg-darkviolet text-center mr-3"
          pill
        >
          About
        </Button>
        <Button
          as={Link}
          href="/pricings"
          className=" bg-violet hover:bg-darkviolet text-center mr-3"
          pill
        >
          Pricings
        </Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
};

export default Navbar2;
