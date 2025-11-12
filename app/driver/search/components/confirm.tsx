'use client'
import React, { useState } from 'react';
import { Truck, Home } from 'lucide-react';
import { useAppDispatch,useAppSelector } from '@/app/store/hooks';
import { acceptOrder,declineOrder } from '@/app/store/features/driverSlice';
import { useRouter } from 'next/navigation';


export default function Confirm() {
    const [isAccepted, setIsAccepted] = useState(false);

    const dispatch=useAppDispatch()
    const router=useRouter()
    const handleAccept = () => {
        setIsAccepted(true);
        dispatch(acceptOrder())
        router.push('/driver/activeOrder')

    };

    const handleDecline = () => {
        dispatch(declineOrder())

    };

    return (
        <div className="w-full  bg-white p-8 rounded-xl mb-6">
            <div className="flex flex-col items-center justify-start max-w-6xl mx-auto w-full md:w-7xl">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    New Delivery <span className="text-yellow-500">Request</span>
                </h1>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Left Section */}
                    <div className="space-y-4 md:border-r md:pr-4 border-gray-400">
                        {/* Pickup Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <Truck className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Pickup Location</h2>
                                <p className="text-gray-600 mt-1">Badda -1</p>
                            </div>
                        </div>

                        {/* Drop-off Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <Home className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Drop-off Location</h2>
                                <p className="text-gray-600 mt-1">Gulshan -1</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t-2 border-gray-200 pt-6">
                            {/* Package Details */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Package: Truck Alternator</span>
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
                        <button
                            onClick={handleDecline}
                            className="w-full md:w-[70%] py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Decline
                        </button>

                        <button
                            onClick={handleAccept}
                            className={`w-full md:w-[70%] py-3 px-4 rounded-lg font-semibold text-white transition-colors ${isAccepted
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {'Accept'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}