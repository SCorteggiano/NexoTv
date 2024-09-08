"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";

const AdminNavbar = () => {
  return (
  
  <Sidebar aria-label="Default sidebar example">
    <Sidebar.Items className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/dashboard/admin"
          icon={HiChartPie}
          className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/admin/users"
          icon={HiUser}
          className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/admin/products"
          icon={HiShoppingBag}
          className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
        >
          Products
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>


  );
};

export default AdminNavbar;
