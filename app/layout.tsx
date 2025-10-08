import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar.tsx";
import ReduxProvider from "./providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JVAI",
  description: "A Delivery App.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
      <body className={`${inter.variable} antialiased flex flex-col items-center`}>
        
        {children}

      </body>
      </ReduxProvider>
    </html>
  );
}
