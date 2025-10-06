"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-40 py-4 bg-white shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Logo/>
      </Link>

      <div className="flex gap-8 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`transition-colors duration-200 ${
              pathname === link.href
                ? "text-[#EFB639] font-semibold"
                : "hover:text-[#EFB639]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="px-5 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="buttonColor text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
