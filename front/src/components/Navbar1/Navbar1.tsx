'use client'
import React, { useContext } from "react";
import Link from "next/link";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Navbar1 = () => {
  const { isLogged, logout } = useContext(UserContext);
  const router = useRouter();
  const { data: session } = useSession();

  function handleLogout() {
    logout();
    signOut({ callbackUrl: "/" })
    router.push("/");
  }

  return (
    <Navbar fluid className="bg-[#0e0e11]">
      <Link href='/'>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NexoTV
        </span>
      </Link>
      <div>
        <Link href="/" className="m-6 hover:border-b-2">
          Home
        </Link>
        <Link href="/pricings" className="m-6 hover:border-b-2">
          Pricings
        </Link>
      </div>

      {isLogged || session ? (
        <div className="flex md:order-2">
          <FavoriteButton/>
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
