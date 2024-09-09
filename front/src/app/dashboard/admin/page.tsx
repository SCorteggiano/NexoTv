'use client'
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

import React, { useContext, useEffect } from "react";

const AdminDashboard = () => {

  const { isLogged, isAdmin } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged || !isAdmin) {
      router.push("/not-authorized");
    }
  }, [isLogged, isAdmin, router]);

  return isLogged && isAdmin ? (
    <div>
      <AdminNavbar/>
    </div>
  ) : null;
};

export default AdminDashboard;
