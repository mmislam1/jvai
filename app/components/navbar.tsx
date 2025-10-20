"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../../components/logo";
import { useDeviceType } from "../hooks/useDeviceType";

const Navbar = () => {


  const pathname = usePathname();
  const isMobile=useDeviceType()
  const navLinks = [
    { name: "Home", href: "/", disabled:false },
    { name: "How it works", href: "/how-it-works", disabled:false },
    { name: "Features", href: "/features", disabled:false },
    { name: "Testimonials", href: "/testimonials", disabled:false },
    { name: "Contact", href: "/contact", disabled:false },
  ];

  return (
    <nav className="w-full flex flex-row justify-between items-center px-40 py-4 bg-white shadow-lg">
      <Link href="/" className="flex items-center gap-2">
        <Logo/>
      </Link>

      {!isMobile &&(<div className="text1 text-[#545454]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`transition-colors duration-200 ${
              pathname === link.href
                ? "text-[#EFB639] font-semibold"
                : "hover:text-[#EFB639]"
            } px-3`}
          >
            {link.name}
          </Link>
        ))}
      </div>)}

      {!isMobile && <div className="flex items-center gap-4">
        <Link
          href="/auth/signin"
          className="text1 px-5 py-2 border border-gray-400 rounded-lg text-[#333333] hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="text1 buttonColor text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Sign Up
        </Link>
      </div>}
      
    </nav>
  );
};

export default Navbar;
