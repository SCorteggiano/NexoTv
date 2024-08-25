import React from "react";
import Link from "next/link"; 
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

const Navbar1 = () => {
  return (
    <Navbar fluid className="bg-[#0e0e11]">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NexoTV
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          className="bg-[#0e0e11]"
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" rounded />}
        >
          <DropdownItem as={Link} href="/dashboard/user" className="text-[#efefef]">Dashboard</DropdownItem>
          <DropdownItem className="text-[#efefef]">Logout</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
};

export default Navbar1;
