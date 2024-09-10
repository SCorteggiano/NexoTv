import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar1/Navbar1";
import ApolloProvider from "@/queries/apolloProvider";
import SessionProvider from "@/queries/sessionProvider";
import client from "@/queries/apolloClient";
import { UserProvider } from "@/context/userContext";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import { PaginationProvider } from "@/context/pageContext";
import Footer from "@/components/Footer/Footer";
import ChatButton from "@/components/ChatButton/ChatButton";
import { SearchProvider } from "@/context/searchContext";
import { ThemeProvider } from "@/context/themeContext";

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
      <body
        className={`${montserrat.className} flex flex-col min-h-screen bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText`}
      >
        <ThemeProvider>
          <SessionProvider>
            <UserProvider>
              <SearchProvider>
                <ApolloProvider client={client}>
                  <PaginationProvider totalPages={10}>
                    <Navbar1 />
                    <ConditionalNavbar>{children}</ConditionalNavbar>
                    <ChatButton />
                    <Footer />
                  </PaginationProvider>
                </ApolloProvider>
              </SearchProvider>
            </UserProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
