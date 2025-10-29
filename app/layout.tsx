import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ReduxProvider from "./providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JVAI",
  description: "A Delivery App.",
  viewport: "width=device-width, initial-scale=1.0", 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${inter.variable} antialiased flex flex-col items-center w-full overflow-x-hidden`}>
        
        {children}

      </body>
      </ReduxProvider>
    </html>
  );
}
