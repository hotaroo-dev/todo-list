import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import AnimatedPage from "@/components/common/animatedPage";
import Web3ContextProvider from "@/context/web3Context";

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
        <Web3ContextProvider>
          <>
            <Header />
            <main className="container py-8">
              <AnimatedPage>{children}</AnimatedPage>
            </main>
          </>
        </Web3ContextProvider>
      </body>
    </html>
  );
}
