"use client";
import React, { Children, useState } from "react";
import RoundedImage from "../../components/roundedImage";
import Logo from "../../components/logo";
import Image from "next/image";
import Button from "../../components/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({children}:AuthLayoutProps) => {

  const [userType,setUserType]=useState<string>('customer')

  return (
    <div className="flex flex-col w-[1100px] ">
      
      <div className="pt-2 w-full">
        <div className="flex flex-row items-center h-[65px] mb-10">
          <Image src='/arrow.png' alt='arrow' width={48} height={48}></Image>
          <Logo></Logo>
        </div>
      </div>

      
      <div className="w-full flex flex-row gap-[77px]">
        <div className=" flex-1 h-[884px] w-[523px] ">
          <RoundedImage src='/customer.png' height={884} width={523} curvature={100} side='right'></RoundedImage>
        </div>
        <div className=" flex flex-col flex-1 h-[884px] w-[540px]">
          <div className="flex flex-col">
            <h1 className="title1 text-[#D69D21] mb-10"> Form </h1>
            <div className="flex flex-row items-center justify-between">
              <Button backgroundColor={userType!=='customer'?'#E6E6E6':undefined} borderColor="" text="Customer" textColor={userType!=='customer'?'#000000':undefined} onClick={()=>setUserType('customer')} className="text1"></Button>
              <Button backgroundColor={userType!=='driver'?'#E6E6E6':undefined} borderColor="" text="Driver" textColor={userType!=='driver'?'#000000':undefined} onClick={()=>setUserType("driver")} className="text1"></Button>
              <Button backgroundColor={userType!=='company'?'#E6E6E6':undefined} borderColor="" text="Company" textColor={userType!=='company'?'#000000':undefined} onClick={()=>setUserType("company")} className="text1"></Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
