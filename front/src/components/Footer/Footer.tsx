"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="footerContainer"
      className=" p-4 w-full mt-auto bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText"
    >
      <div>
        <p className="text-center text-xl">NexoTV 2024</p>
        <div>
          <p
            onClick={scrollToTop}
            className="text-end cursor-pointer text-violet dark:text-violet"
          >
            Back To Top
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/help" className="m-2 text-violet dark:text-violet">
            Help
          </Link>
          <p className="m-2">|</p>
          <Link href="/about" className="m-2 text-violet dark:text-violet">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
