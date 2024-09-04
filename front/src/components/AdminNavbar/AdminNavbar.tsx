"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";

const AdminNavbar = () => {
  return (
    <div className="h-screen bg-[#0e0e11]">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items className="bg-[#0e0e11] text-[#efefef]">
          <Sidebar.ItemGroup className="bg-[#0e0e11] text-[#efefef]">
            <Sidebar.Item
              href="/dashboard/admin"
              icon={HiChartPie}
              className="text-[#efefef] hover:bg-[#1a1a1e] hover:text-[#efefef] transition-colors duration-300"
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/dashboard/admin/users"
              icon={HiUser}
              className="text-[#efefef] hover:bg-[#1a1a1e] hover:text-[#efefef] transition-colors duration-300"
            >
              Users
            </Sidebar.Item>
            <Sidebar.Item
              href="/dashboard/admin/products"
              icon={HiShoppingBag}
              className="text-[#efefef] hover:bg-[#1a1a1e] hover:text-[#efefef] transition-colors duration-300"
            >
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminNavbar;
