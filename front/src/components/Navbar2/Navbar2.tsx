import React from "react";
import { Button, Navbar, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { useSearch } from "@/context/searchContext";

const Navbar2 = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <Navbar fluid className="bg-lightBackground dark:bg-darkBackground mb-3">
      <div className="flex justify-between w-full">
        {/* Botones de navegación */}
        <div className="flex">
          <Button
            pill
            as={Link}
            href="/movies"
            className="font-extrabold bg-violet hover:bg-darkviolet dark:hover:bg-darkviolet dark:bg-violet mr-3 px-6 py-2 text-lightText dark:text-darkText"
          >
            Movies
          </Button>
          <Button
            pill
            as={Link}
            href="/series"
            className="font-extrabold bg-violet hover:bg-darkviolet dark:hover:bg-darkviolet dark:bg-violet mr-3 px-6 py-2 text-lightText dark:text-darkText"
          >
            Series
          </Button>
        </div>
        {/* Buscador y toggle */}
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-48 p-2 text-sm border border-violet dark:border-violet rounded-lg bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText focus:ring-violet focus:border-darkviolet"
          />
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
