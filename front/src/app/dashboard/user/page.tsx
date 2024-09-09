"use client";
import NotLogged from "@/components/NotLogged";
import UserCard from "@/components/Usercard/UserCard";
import { UserContext } from "@/context/userContext";
import React, { useContext } from "react";
import { useSession } from "next-auth/react";

const UserDashboard = () => {
  const { data: session } = useSession();
  const { isLogged } = useContext(UserContext);
  return <>{isLogged || session ? <UserCard /> : <NotLogged />}</>;
};

export default UserDashboard;
