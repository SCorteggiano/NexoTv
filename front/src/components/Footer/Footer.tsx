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
      className="border-t p-4 w-full mt-auto"
    >
      <div>
        <p className="text-center text-xl">NexoTV 2024</p>
        <div>
          <p
            onClick={scrollToTop}
            className="text-end cursor-pointer text-blue-600"
          >
            Back To Top
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/help" className="m-2 text-blue-600">
            Help
          </Link>
          <p className="m-2">|</p>
          <Link href="/faq" className="m-2 text-blue-600">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
