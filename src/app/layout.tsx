import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Application from "src/modules/Application";
import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Application>
          <html lang="en">
              <body className={inter.className}>{children}</body>
          </html>
      </Application>
  );
}
