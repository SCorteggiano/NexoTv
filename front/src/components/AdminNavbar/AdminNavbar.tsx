"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
        <Sidebar.ItemGroup>
          <Link href="/dashboard/admin" passHref>
            <Sidebar.Item
              icon={HiChartPie}
              className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
            >
              Dashboard
            </Sidebar.Item>
          </Link>
          <Link href="/dashboard/admin/users" passHref>
            <Sidebar.Item
              icon={HiUser}
              className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
            >
              Users
            </Sidebar.Item>
          </Link>
          <Link href="/dashboard/admin/products" passHref>
            <Sidebar.Item
              icon={HiShoppingBag}
              className="text-lightText dark:text-darkText hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lightText dark:hover:text-darkText transition-colors duration-300"
            >
              Products
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default AdminNavbar;
