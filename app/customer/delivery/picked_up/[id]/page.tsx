"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { cancelDelivery } from "../../../../store/features/customerSlice";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronLeft,
    MapPin,
    Phone,
    MessageCircle,
    Plus,
    Eye,
} from "lucide-react";
import { useParams } from "next/navigation";

interface OrderTrackingPageProps {
    params: {
        id: string;
    };
}

export default function OrderTrackingPage() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);

    // Mock data - replace with Redux selector
    const orders = useAppSelector((state) => state.customer.delivery.activities);
    const order = orders.find((order) => params.id === order.id) || {
        id: "#12345",
        status: "picked_up",
        driver: {
            name: "Abdur Rahim",
            vehicle: "Toyota",
            rating: 4.9,
            avatar: "/Ellipse 7.png",
            phone: "+880123456789",
        },
        route: {
            current: { lat: 40.7128, lng: -74.006 },
            destination: { lat: 40.758, lng: -73.9855 },
        },
        timestamp: "",
    };

    const statusSteps = [
        {
            key: "placed",
            label: "Order Placed",
            description: "Your order has been confirmed",
            completed: true,
        },
        {
            key: "picked_up",
            label: "Picked Up",
            description: "Your order is on it's way",
            completed: true,
        },
        {
            key: "on_way",
            label: "On the Way",
            description: "The driver is heading to you",
            completed: false,
        },
        {
            key: "delivered",
            label: "Delivered",
            description: "Take your parts",
            completed: false,
        },
    ];

    const handleCancelOrder = async () => {
        dispatch(cancelDelivery("nsjdcs"));
        setShowCancelConfirm(false);
    };

    const isCompleted = (step: string) => {
        const currentIndex = statusSteps.findIndex((s) => s.key === order.id);
        const stepIndex = statusSteps.findIndex((s) => s.key === step);
        return stepIndex <= currentIndex;
    };

    return (
        <div className="min-h-screen  w-full md:w-7xl">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/orders"
                        className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <ChevronLeft className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Track Order</span>
                    </Link>
                    <button
                        onClick={() => setShowCancelConfirm(true)}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                        Cancel Request
                    </button>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Order Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Track My Order{" "}
                        <span className="text-yellow-500">ID: {order.id}</span>
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl">
                    {/* Map Section */}
                    <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-lg ">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-sm opacity-75 mb-2">Live Map Tracking</div>
                                <div className="text-2xl font-bold">🗺️</div>
                            </div>
                        </div>
                        {/* Map Controls */}
                        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                            <button className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition">
                                <Plus className="w-5 h-5 text-gray-700" />
                            </button>
                            <button className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition">
                                <Eye className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="w-full p-6 mb-8">
                        <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
                            Order in <span className="text-yellow-500">Progress</span>
                        </h2>

                        {/* Timeline */}
                        <div className="space-y-6">
                            {statusSteps.map((step, index) => (
                                <div key={step.key} className="flex gap-4">
                                    {/* Status Indicator */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all ${isCompleted(step.key)
                                                    ? "bg-yellow-500 text-white"
                                                    : "bg-gray-300 text-gray-600"
                                                }`}
                                        >
                                            {isCompleted(step.key) ? "✓" : index + 1}
                                        </div>
                                        {index < statusSteps.length - 1 && (
                                            <div
                                                className={`w-1 h-12 md:h-16 my-2 ${isCompleted(statusSteps[index + 1].key)
                                                        ? "bg-yellow-500"
                                                        : "bg-gray-300"
                                                    }`}
                                            />
                                        )}
                                    </div>

                                    {/* Status Content */}
                                    <div className="flex-1 pb-6">
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 mt-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Driver Card */}
                    <div className=" w-full flex flex-col rounded-2xl p-6 md:p-8 border-t border-gray-100 mb-6 md:mb-10">
                        <div className="w-full flex flex-col md:items-center md:justify-between gap-6">
                            {/* Driver Info */}
                            <div className="w-full flex flex-col items-center justify-center gap-4">
                                <div className="flex flex-col items-center justify-center relative w-[130px] h-[130px] md:w-[200px] md:h-[200px]">
                                    <Image
                                        src={order.driver.avatar}
                                        alt={order.driver.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                        {order.driver.name}
                                    </h3>
                                    <div className="flex flex-col items-center justify-center gap-1 mt-1">
                                        <span className="text-sm text-gray-600">
                                            {order.driver.vehicle}
                                        </span>
                                        <span className="text-yellow-500">⭐</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            {order.driver.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    <span>Call Now</span>
                                </button>
                                <button className="flex-1 md:flex-none bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 border border-gray-600">
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Message Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Cancel Confirmation Modal */}
            {showCancelConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 max-w-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Cancel Order?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to cancel order {order.id}?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowCancelConfirm(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition"
                            >
                                Keep Order
                            </button>
                            <button
                                onClick={handleCancelOrder}
                                className="flex-1 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
                            >
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
