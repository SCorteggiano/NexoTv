"use client";

import { usePathname } from "next/navigation";
import Navbar2 from "@/components/Navbar2/Navbar2";

export default function ConditionalNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNavbar2 = ["/", "/movies", "/series"].includes(pathname);

  return (
    <>
      {showNavbar2 && <Navbar2 />}
      {children}
    </>
  );
}
