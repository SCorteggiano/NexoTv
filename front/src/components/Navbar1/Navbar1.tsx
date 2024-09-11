"use client";
import React, { useContext, useEffect, useState } from "react";
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
import ThemeButton from "../ThemeButton";
import Image from "next/image";

const Navbar1 = () => {
  const { isLogged, logout, isAdmin } = useContext(UserContext);
  const router = useRouter();
  const { data: session } = useSession();
  const { user } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  // Obtener la imagen de perfil desde el localStorage o el contexto
  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    } else if (user?.user?.userImage?.[0]) {
      setProfilePicture(user.user.userImage[0]);
    }
  }, [user]);

  function handleLogout() {
    logout();
    signOut({ callbackUrl: "/" });
    router.push("/");
  }

  return (
    <Navbar
      fluid
      className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText"
    >
      <Link href="/">
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
        <div className="flex md:order-2 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
          <ThemeButton />
          <Dropdown
        className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText"
        arrowIcon={false}
        inline
        label={
          profilePicture ? (
            <Image
              src={profilePicture}
              alt="User settings"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            // Si no hay imagen, muestra iniciales o avatar predeterminado
            <div className="w-10 h-10 flex items-center justify-center bg-gray-500 rounded-full text-white font-bold">
              {user?.user?.firstName?.charAt(0) || "U"}
            </div>
          )
        }
      >
            <DropdownItem
              as={Link}
              href={isAdmin ? "/dashboard/admin" : "/dashboard/user"}
              className="text-lightText dark:text-darkText"
            >
              Dashboard
            </DropdownItem>
            <DropdownItem
              className="text-lightText dark:text-darkText"
              onClick={handleLogout}
            >
              Logout
            </DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <ThemeButton />
          <Button
            as={Link}
            href="/register"
            className="font-bold bg-violet text-lightText dark:bg-violet dark:text-darkText border-violet hover:bg-darkviolet text-center mr-3"
          >
            Register
          </Button>
          <Button
            as={Link}
            href="/login"
            className="font-bold bg-transparent text-lightText dark:bg-transparent dark:text-darkText border-violet hover:bg-violet text-center mr-3"
          >
            Login
          </Button>
        </div>
      )}
    </Navbar>
  );
};

export default Navbar1;
