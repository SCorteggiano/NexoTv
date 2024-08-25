import React, { useContext } from "react";
import Link from "next/link";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const Navbar1 = () => {
  const { isLogged, logout } = useContext(UserContext);
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <Navbar fluid className="bg-[#0e0e11]">
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

      {isLogged ? (
        <div className="flex md:order-2">
          <Dropdown
            className="bg-[#0e0e11]"
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" rounded />}
          >
            <DropdownItem
              as={Link}
              href="/dashboard/user"
              className="text-[#efefef]"
            >
              Dashboard
            </DropdownItem>
            <DropdownItem className="text-[#efefef]" onClick={handleLogout}>
              Logout
            </DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
      ) : (
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
      )}
    </Navbar>
  );
};

export default Navbar1;
