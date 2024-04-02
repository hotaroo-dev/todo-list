import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveLink from "./components/common/activeLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todos",
  description: "Todo List in Solidity and ReactJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="container py-6">
          <ul className="flex gap-4">
            <ActiveLink href="/" className="rounded px-4 py-2">
              Home
            </ActiveLink>
            <ActiveLink href="/progress" className="rounded px-4 py-2">
              Progress
            </ActiveLink>
          </ul>
        </header>
        <main className="container min-h-screen py-10">{children}</main>
      </body>
    </html>
  );
}
