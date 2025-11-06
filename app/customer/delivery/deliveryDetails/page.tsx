"use client";

import React, { useState } from "react";
import { Star, ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateDeliveryRequestFormField,
    resetDeliveryRequestForm,
    submitDeliveryRequest,
} from "../../../store/features/customerSlice";
import { RootState, AppDispatch } from "../../../store/store";
import Image from "next/image";

export default function DeliveryRequestPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { deliveryRequest, delivery } = useSelector(
        (state: RootState) => state.customer
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDriverInfo, setShowDriverInfo] = useState(false);
    const currentActivity = delivery.activities[0];
    const firstDriver = delivery.activities[0]?.driver;
    const { formData, loading, error, success } = deliveryRequest;
    const [rating, setRating] = useState(0);
    const [rateNowClicked, setRateNowClicked] = useState(false);
    const handleInputChange = (field: keyof typeof formData, value: string) => {
        dispatch(updateDeliveryRequestFormField({ field, value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const result = await dispatch(submitDeliveryRequest(formData));
            if (!result.payload.error) {
                setShowDriverInfo(true);
            }
        } catch (err) {
            console.error("Failed to submit delivery request", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        dispatch(resetDeliveryRequestForm());
        setShowDriverInfo(false);
    };

    const handleRateNow = (star: number) => {
        setRating(star);
        if (!rateNowClicked) {
            setRateNowClicked(true);
        }
    };

    return (
        <div className="w-full md:w-4xl min-h-screen bg-gradient-to-br bg-white ">
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
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    📋
                                </span>
                                <input
                                    type="text"
                                    placeholder="#12345"
                                    value={formData.orderId}
                                    onChange={(e) => handleInputChange("orderId", e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Company Name
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    🏢
                                </span>
                                <input
                                    type="text"
                                    placeholder="TruckParts BD"
                                    value={formData.companyName}
                                    onChange={(e) =>
                                        handleInputChange("companyName", e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Description and Amount */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Product Short Description
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    📝
                                </span>
                                <input
                                    type="text"
                                    placeholder="Engine Oil"
                                    value={formData.productDescription}
                                    onChange={(e) =>
                                        handleInputChange("productDescription", e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </div>
                            <span className="text-sm text-gray-400 mt-1 block">
                                (Optional)
                            </span>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Product Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    💰
                                </span>
                                <input
                                    type="text"
                                    placeholder="$1250"
                                    value={formData.productAmount}
                                    onChange={(e) =>
                                        handleInputChange("productAmount", e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </div>
                            <span className="text-sm text-gray-400 mt-1 block">
                                (Optional)
                            </span>
                        </div>
                    </div>

                    {/* Product Weight */}

                    {/* Pickup and Delivery Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Pickup Location
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    📍
                                </span>
                                <input
                                    type="text"
                                    placeholder="Gulshan-1"
                                    value={formData.pickupLocation}
                                    onChange={(e) =>
                                        handleInputChange("pickupLocation", e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">
                                Delivery Location
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    🏠
                                </span>
                                <input
                                    type="text"
                                    placeholder="Badda -1"
                                    value={formData.deliveryLocation}
                                    onChange={(e) =>
                                        handleInputChange("deliveryLocation", e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
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
                                    src={currentActivity.driver.avatar}
                                    alt={currentActivity.driver.name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://via.placeholder.com/96";
                                    }}
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
