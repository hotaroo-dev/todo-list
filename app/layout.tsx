import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import AnimatedPage from "./_components/common/animatedPage";

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
        <Header />
        <main className="container py-10">
          <AnimatedPage>{children}</AnimatedPage>
        </main>
      </body>
    </html>
  );
}
