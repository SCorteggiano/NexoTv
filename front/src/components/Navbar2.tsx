import React from "react";
import { Button, Navbar, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <Navbar fluid className="bg-[#0e0e11]">
      <div className="flex md:order-2">
        <Button as={Link} href="/" color="violet" pill>
          Home
        </Button>
        <Button as={Link} href="/movies" color="violet" pill>
          Movies
        </Button>
        <Button as={Link} href="/series" color="violet" pill>
          Series
        </Button>
        <Button as={Link} href="/about" color="violet" pill>
          About
        </Button>
        <Button as={Link} href="/pricings" color="violet" pill>
          Pricings
        </Button>
        <NavbarToggle />  
      </div>
    </Navbar>
  );
};

export default Navbar2;
