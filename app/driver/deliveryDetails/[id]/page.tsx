"use client";

import React, { useState,use } from "react";
import { Star, ArrowLeft, HomeIcon, DropletIcon, PinIcon, MapPin } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
    updateDeliveryRequestFormField,
    resetDeliveryRequestForm,
    submitDeliveryRequest,
} from "../../../store/features/customerSlice";
import { RootState, AppDispatch } from "../../../store/store";
import Image from "next/image";

interface Props {
    params: { id: string };
}


export default function DeliveryRequestPage({params}:Props) {
    const dispatch = useAppDispatch();
    const item = useAppSelector(
        (state) => state.driver.deliveries
    ).find((item)=>item.orderId===params.id);
  
    return (
        <div className="w-full md:w-4xl min-h-screen bg-gradient-to-br bg-white rounded-xl overflow-hidden mb-6">
            <div className=" mx-auto">
                <div className="bg-white p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        Delivery Request
                    </h1>

                    {/* Order ID and Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Order ID
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">
                                
                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.orderId}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Company Name
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">

                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.Company}
                                </p>
                            </div>
                        </div>
                    

                    {/* Product Description and Amount */}
                    
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Product Short Description
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">

                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.Description}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Product Amount
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">

                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.weight/1000} Kg
                                </p>
                            </div>
                        </div>
                    

                    {/* Product Weight */}

                    {/* Pickup and Delivery Location */}
                    
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Pickup Location
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">

                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.Pickup}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Delivery Location
                            </label>
                            <div className="flex flex-row items-center justify-center h-12 rounded-xl bg-[#FDF7E9] p-4 mb-4">

                                <p className="w-full flex flex-row items-center justify-start gap-4 text-md text-#545454">
                                    <HomeIcon strokeWidth={1}></HomeIcon>
                                    {item?.dropOff}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Card */}
                <div className="flex flex-col items-center justify-center bg-white mt-6 md:mt-10 p-6 sm:p-8  mt-8 border-t border-gray-200 ">
                    <div className="w-full flex flex-col items-center justify-between gap-6">
                        {/* Driver Info */}
                        <div className="flex flex-col items-center gap-4 flex-1">
                            {/* Avatar */}
                            <div className="relative w-50 h-50 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src='/ellipse 7.png'
                                    alt='driver'
                                    fill
                                    className="object-cover"
                                    
                                />
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <MapPin stroke-width={1}/>
                                <p className="text-md">{`${item?.Pickup} to`}</p>
                                <MapPin stroke-width={1}/>
                                <p className="text-md">{`${item?.dropOff}`}</p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-6">
                                
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
