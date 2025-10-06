import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#261B02] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div className="flex flex-col items-end justify-between h-full">
          <Image
            src="/logo.svg"
            alt="Ridero Logo"
            width={44}
            height={44}
            className="object-contain"
          />
          
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            5123 Market St. #22B 
Charlottesville, California 44635
          </p>
        </div>

        <div>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-[#EFB639]">About</Link></li>
            <li><Link href="/features" className="hover:text-[#EFB639]">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-[#EFB639]">Pricing</Link></li>
            <li><Link href="/careers" className="hover:text-[#EFB639]">Careers</Link></li>
          </ul>
        </div>

        <div>
          
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/help" className="hover:text-[#EFB639]">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-[#EFB639]">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-[#EFB639]">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-[#EFB639]">Terms of Service</Link></li>
          </ul>
        </div>

        
        © 2020 Ridero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
