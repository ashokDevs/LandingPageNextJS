import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./home/page";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog landing page",
  description: "All in one place for blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="forest" lang="en">
      <body
        className={`${inter.className}
        min-h-screen
        flex
        flex-col
        relative
        pb-20 `}
      >
        {/* <Header /> */}

        <Home />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
