'use client'
import React,{useState} from 'react'
import { useAppDispatch,useAppSelector } from '@/app/store/hooks';
import { HomeIcon,Star } from 'lucide-react';
import Image from 'next/image'

const DeliveryDetails = ({ id }: { id: any }) => {
    const dispatch = useAppDispatch();
    const currentActivity = useAppSelector(
        (state) => state.customer.delivery.activities[1]
    );


    const [rating, setRating] = useState(0);
    const [rateNowClicked, setRateNowClicked] = useState(false);


    const handleRateNow = (star: number) => {
        setRating(star);
        if (!rateNowClicked) {
            setRateNowClicked(true);
        }
    };

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
                                    TEST
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
                                    TEST
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
                                    TEST
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
                                    TEST
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
                                    TEST
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
                                    TEST
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Driver Card */}
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

                            {/* Driver Details */}
                            <div className="flex flex-col items-center justify-center text-center sm:text-left ">
                                <div className="flex flex-col items-center justify-center sm:justify-start gap-2 mb-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                        {currentActivity.driver.name}
                                    </h3>
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-gray-700 font-medium">
                                        {currentActivity.driver.rating}
                                    </span>
                                </div>

                                {/* Star Rating */}
                                <div className="flex items-center justify-center sm:justify-start gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-gray-300"
                                            fill={i < 1 ? "#FCD34D" : "#E5E7EB"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Rating Buttons */}
                        <div className="w-full md:w-[50%] flex flex-row gap-3">
                            <button
                                onClick={() => setRateNowClicked(false)}
                                className="flex-1  px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                            >
                                Later
                            </button>
                            <button
                                onClick={() => handleRateNow(5)}
                                className="flex-1  px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
                            >
                                <Star className="w-5 h-5 fill-white" />
                                Rate Now
                            </button>
                        </div>
                    </div>

                    {/* Rating Input (if Rate Now clicked) */}
                    {rateNowClicked && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-gray-600 mb-4">
                                How was your delivery experience?
                            </p>
                            <div className="flex justify-center gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleRateNow(i + 1)}
                                        className="transition transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-8 h-8 ${i < rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                                } cursor-pointer`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeliveryDetails