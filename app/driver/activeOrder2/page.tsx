"use client";
import React, { useState } from "react";
import { Truck, Home } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { acceptOrder, declineOrder } from "@/app/store/features/driverSlice";
import { useRouter } from "next/navigation";


export default function Confirm() {

    const router = useRouter();
    const handleAccept = () => {
        router.push("/driver/search");
    };
    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Active Delivery
                </h2>
            </div>
            <div className="w-full  bg-white p-10 rounded-xl mb-6">
                <div className="flex flex-col items-center justify-start max-w-6xl mx-auto w-full md:w-7xl">
                    

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {/* Left Section */}
                        <div className="space-y-4 md:border-r md:pr-4 border-gray-400">
                            {/* Pickup Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Truck className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Pickup Location
                                    </h2>
                                    <p className="text-gray-600 mt-1">Badda -1</p>
                                </div>
                            </div>

                            {/* Drop-off Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Home className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Drop-off Location
                                    </h2>
                                    <p className="text-gray-600 mt-1">Gulshan -1</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t-2 border-gray-200 pt-6">
                                {/* Package Details */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Package: Truck Alternator
                                        </span>
                                        <span className="font-bold text-gray-800">15 KG</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Distance</span>
                                        <span className="font-bold text-gray-800">12 KM</span>
                                    </div>

                                    <div className="flex justify-between items-center ">
                                        <span className="text-gray-700">Estimate Payment</span>
                                        <span className="font-bold text-gray-800 text-lg">$12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Action Buttons */}
                        <div className="flex flex-col gap-4 justify-start md:justify-center items-center">
                            <h2 className="text-3xl">You Earn From This Trip</h2>
                            <div className="flex items-center justify-center h-35 w-35 rounded-full border-2 border-gray-400 m-6">
                                <h1 className="text-4xl font-semibold text-pink-500">{`$${56}`}</h1>
                            </div>
                            <button
                                onClick={handleAccept}
                                className={`w-full md:w-[50%] py-2 px-4 rounded-lg text-white transition-color bg-blue-600 hover:bg-blue-700
                                    }`}
                            >
                                Take New Delivery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
