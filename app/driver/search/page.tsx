'use client'

import React from "react";
import Image from "next/image";
import { useDeviceType } from "@/app/hooks/useDeviceType";
import { useAppDispatch,useAppSelector } from "@/app/store/hooks";
import { BadgeDollarSign, MessageSquare, MessageSquareIcon, Plus } from "lucide-react";
import Confirm from './components/confirm'


const page = () => {
    const isMobile=useDeviceType()
    const driver=useAppSelector((store)=>store.driver)
    const dispatch= useAppDispatch()

    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Welcome Back, Rahim
                </h2>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="w-full flex md:flex-1 flex-row items-center justify-center rounded-xl shadow-lg p-4 px-8 gap-4 bg-white">
                    <div className="flex items-center justify-center bg-gray-300 h-15 w-15 rounded-lg"></div>
                    <div className="flex flex-1 flex-col items-start justify-between h-22 px-3">
                        <p className="text-2xl">
                            Total Earnings
                        </p>
                        <h1 className="text-5xl font-semibold">
                            $212
                        </h1>
                    </div>
                </div>
                <div className="w-full flex md:flex-1 flex-row items-center justify-center rounded-xl shadow-lg p-4 px-8 gap-4 bg-white">
                    <div className="flex items-center justify-center bg-gray-300 h-15 w-15 rounded-lg"></div>
                    <div className="flex flex-1 flex-col items-start justify-between h-22 px-3">
                        <p className="text-2xl">
                            Pending Deliveries
                        </p>
                        <h1 className="text-5xl font-semibold">
                            $212
                        </h1>
                    </div>
                </div>
                <div className="w-full flex md:flex-1 flex-row items-center justify-center rounded-xl shadow-lg p-4 pl-8 gap-4 bg-white">
                    <div className="flex items-center justify-center bg-gray-300 h-15 w-15 rounded-lg"></div>
                    <div className="flex flex-1 flex-col items-start justify-between h-22 px-3">
                        <p className="text-2xl">
                            Completed Deliveries
                        </p>
                        <h1 className="text-5xl font-semibold">
                            $212
                        </h1>
                    </div>
                </div>
            </div>

            { /*Actions Section */ }

            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">Actions</h2>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="w-full flex md:flex-1 flex-col items-center justify-center rounded-xl shadow-lg p-4 bg-white">
                    <Plus></Plus>
                    <p className="text-3xl mt-6">
                        Deliveries History
                    </p>
                </div>
                <div className="w-full flex md:flex-1 flex-col items-center justify-center rounded-xl shadow-lg p-4 bg-white">
                    <BadgeDollarSign/>
                    <p className="text-3xl mt-6">
                        My Earnings
                    </p>
                </div>
                <div className="w-full flex md:flex-1 flex-col items-center justify-center rounded-xl shadow-lg p-4 bg-white">
                    <MessageSquare/>
                    <p className="text-3xl mt-6">
                        Messages
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Wait for delivery request
                </h2>
            </div>

            { /*Searching Section */}


            {true!==true?(<div className="w-full flex flex-col gap-4 items-center justify-center bg-white rounded-xl mb-6 py-10 h-[500px]">
                <div className="w-full flex flex-row gap-2 items-center justify-center p-4">
                    <h2 className="flex flex-row text-xl md:text-3xl text-black font-semibold">
                        We're
                    </h2>
                    <h2 className="text-xl md:text-3xl text-purple-600 font-semibold">
                        Searching
                    </h2>
                    <h2 className="flex flex-row gap-2 text-xl md:text-3xl text-black font-semibold">
                        a order for you…
                    </h2>
                </div>
                <div className="w-full flex flex-col items-center justify-center p-6 mb-8">
                    <Image
                        src="/search.png"
                        alt="search icon"
                        width={isMobile==='d'?200:150}
                        height={isMobile === 'd' ? 200 : 150}
                    ></Image>
                </div>
            </div>):<Confirm></Confirm>}
        </div>
    );
};

export default page;
