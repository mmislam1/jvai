// app/track-order/[orderId]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Star, ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

interface OrderStep {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    completed: boolean;
}

export default function TrackOrderPage( ) {
    const router = useRouter();
    const [rating, setRating] = useState(0);
    const [rateNowClicked, setRateNowClicked] = useState(false);

    const { delivery } = useSelector((state: RootState) => state.customer);

    // Get the most recent activity for this order
    const currentActivity = delivery.activities[0];

    if (!currentActivity) {
        return <div className="flex items-center justify-center min-h-screen">Order not found</div>;
    }

    const steps: OrderStep[] = [
        {
            id: 'placed',
            label: 'Order Placed',
            description: 'Your order has been confirmed',
            icon: '',
            completed: true,
        },
        {
            id: 'picked',
            label: 'Picked Up',
            description: "Your order is on it's way",
            icon: '',
            completed: true,
        },
        {
            id: 'on-way',
            label: 'On the Way',
            description: 'The driver is heading to you',
            icon: '',
            completed: true,
        },
        {
            id: 'delivered',
            label: 'Delivered',
            description: 'Take your parts',
            icon: '',
            completed: true,
        },
    ];

    const handleRateNow = (star: number) => {
        setRating(star);
        if (!rateNowClicked) {
            setRateNowClicked(true);
        }
    };

    return (


        <div className="flex">{/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Completion Status */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Your delivery has been <span className="text-yellow-500">completed!</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">ID: #{currentActivity.orderId}</p>
                </div>

                {/* Main Container */}
                <div className="bg-white flex flex-col md:flex-row gap-6 sm:gap-8 shadow-md rounded-xl md:p-6">
                    {/* Order Timeline - Left Side */}
                    <div className=" flex  ">
                        <div className="rounded-lg p-6 sm:p-8 ">
                            {/* Timeline */}
                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div key={step.id} className="flex gap-4">
                                        {/* Timeline Dot */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                                {step.icon}
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="w-1 h-12 bg-yellow-200 my-2" />
                                            )}
                                        </div>

                                        {/* Step Content */}
                                        <div className="pt-2">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {step.label}
                                            </h3>
                                            <p className="text-gray-600 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Price Card - Right Side */}
                    <div className="flex items-center justify-center ">
                        <div className="rounded-lg p-6 h-fit top-24">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-yellow-500">$28</span>
                                </div>
                                <button
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                                    disabled
                                >
                                    Confirmed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-row items-center justify-center mt-4">
                    <Image src="/arrow_down.png" alt="arrow" width={50} height={70}></Image>
                </div>

                {/* Driver Card */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm mt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {/* Driver Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                            {/* Avatar */}
                            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                <Image
                                    src={currentActivity.driver.avatar}
                                    alt={currentActivity.driver.name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96';
                                    }}
                                />
                            </div>



                            {/* Driver Details */}
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
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
                                            fill={i < 1 ? '#FCD34D' : '#E5E7EB'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Rating Buttons */}
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => setRateNowClicked(false)}
                                className="flex-1 sm:flex-none px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                            >
                                Later
                            </button>
                            <button
                                onClick={() => handleRateNow(5)}
                                className="flex-1 sm:flex-none px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
                            >
                                <Star className="w-5 h-5 fill-white" />
                                Rate Now
                            </button>
                        </div>
                    </div>

                    {/* Rating Input (if Rate Now clicked) */}
                    {rateNowClicked && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-gray-600 mb-4">How was your delivery experience?</p>
                            <div className="flex justify-center gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleRateNow(i + 1)}
                                        className="transition transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-8 h-8 ${i < rating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
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