import React from "react";
import { Button, Navbar, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <Navbar fluid className="bg-[#0e0e11] mb-3">
      <div className="flex justify-between w-full">
        <div className="flex">
          <Button
            as={Link}
            href="/movies"
            className="bg-violet hover:bg-darkviolet text-center mr-3 px-6 py-2 rounded-lg text-2xl font-bold"
          >
            Movies
          </Button>
          <Button
            as={Link}
            href="/series"
            className="bg-violet hover:bg-darkviolet text-center mr-3 px-6 py-2 rounded-lg text-2xl font-bold"
          >
            Series
          </Button>
        </div>
        <div className="flex">
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
