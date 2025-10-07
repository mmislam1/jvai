"use client";
import React from "react";
import RoundedImage from "./roundedImage";
import Logo from "./logo";
import Image from "next/image";
import Button from "./button";

const LoginSignupLayout = () => {

  const handleUserType=(e: React.MouseEvent<HTMLButtonElement>)=>{}

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="w-full">
        <div className="flex flex-row items-center h-[65] mb-10">
          <Image src='/arrow.png' alt='arrow' width={48} height={48}></Image>
          <Logo></Logo>
        </div>
      </div>

      
      <div className="w-full flex flex-row gap-[77]">
        <div className=" flex-1 h-[884] w-[523] ">
          <RoundedImage src='/customer.png' height={884} width={523} curvature={100} side='right'></RoundedImage>
        </div>
        <div className=" flex flex-col flex-1 h-[884] w-[540]">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <Button backgroundColor="" borderColor="" text="Customer" textColor="" onClick={handleUserType}></Button>
              <Button backgroundColor="" borderColor="" text="Driver" textColor="" onClick={handleUserType}></Button>
              <Button backgroundColor="" borderColor="" text="Company" textColor="" onClick={handleUserType}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupLayout;
