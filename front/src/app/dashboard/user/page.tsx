'use client'
import NotLogged from "@/components/NotLogged";
import UserCard from "@/components/Usercard/UserCard";
import { UserContext } from "@/context/userContext";
import React, { useContext } from "react";

const UserDashboard = () => {
  const { isLogged } = useContext(UserContext);
  return <>{isLogged ? <UserCard /> : <NotLogged />}</>;
};

export default UserDashboard;
