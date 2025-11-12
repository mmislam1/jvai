"use client";

import React from "react";
import {
    Phone,
    MessageCircle,
    MapPin,
    Package,
    PhoneCall,
    Plus,
    Minus,
} from "lucide-react";

export default function DeliveryOrder() {
    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Welcome Back, Rahim
                </h2>
            </div>
            <div className="w-full md:w-7xl bg-white p-6 rounded-xl mb-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Left Section */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Customer: Ruhul Amin
                                </h1>
                                <p className="text-blue-600 font-semibold text-lg mb-4">
                                    ID#12345
                                </p>
                                <p className="text-gray-700 text-lg font-semibold">
                                    Package: Truck Alternator - 15kg
                                </p>
                            </div>

                            {/* Contact Icons */}
                            <div className="flex gap-3 bg-pink-500 rounded-2xl p-3">
                                <button className="p-2 hover:bg-pink-600 rounded-lg transition">
                                    <Phone size={24} className="text-white" />
                                </button>
                                <button className="p-2 hover:bg-pink-600 rounded-lg transition">
                                    <MessageCircle size={24} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="text-blue-600 mt-1">
                                    <Package size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-lg">Badd -1</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-red-500 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-lg">Gulshan -1</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 flex-col md:flex-row">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition text-lg">
                                Picked Parcel
                            </button>
                            <button className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 rounded-xl transition flex items-center justify-center gap-3 text-lg">
                                <PhoneCall size={20} />
                                Call to company
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Map */}
                    <div className="md:col-span-2">
                        <div className="bg-gray-800 rounded-xl overflow-hidden h-96 md:h-full relative">
                            {/* Map background */}
                            <div className="w-full h-full bg-gradient-to-b from-blue-900 to-slate-900 relative">
                                {/* Street labels */}
                                <div className="absolute inset-0 text-xs text-blue-200 opacity-40 p-4 overflow-hidden">
                                    <p className="transform -rotate-45">8th St NW</p>
                                    <p className="absolute top-1/4 right-1/4 transform rotate-12">
                                        9th St NW
                                    </p>
                                    <p className="absolute bottom-1/3 left-1/4">7th St NW</p>
                                </div>

                                {/* Route visualization */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 400 300"
                                >
                                    {/* Route line */}
                                    <polyline
                                        points="80,60 200,180 320,120"
                                        stroke="rgba(59, 130, 246, 0.8)"
                                        strokeWidth="3"
                                        fill="none"
                                    />

                                    {/* Points */}
                                    <circle cx="80" cy="60" r="6" fill="rgba(239, 68, 68, 1)" />
                                    <circle
                                        cx="320"
                                        cy="120"
                                        r="4"
                                        fill="rgba(255, 255, 255, 0.8)"
                                    />
                                </svg>

                                {/* Zoom controls */}
                                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                                    <button className="bg-white hover:bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition">
                                        <Plus size={20} className="text-gray-700" />
                                    </button>
                                    <button className="bg-white hover:bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition">
                                        <Minus size={20} className="text-gray-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
