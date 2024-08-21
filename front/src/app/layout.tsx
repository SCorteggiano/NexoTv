import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexo TV",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        <Navbar1 />
        <Navbar2 />
        {children}

      </body>
    </html>
  );
}
