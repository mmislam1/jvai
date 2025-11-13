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

import { useAppDispatch,useAppSelector } from "@/app/store/hooks";
import { updateStatus } from "@/app/store/features/driverSlice";

export default function DeliveryOrder() {
    const dispatch=useAppDispatch()
    const delivery= useAppSelector((store)=>store.driver.activeDelivery)

    const statusUpdate=(curr : "pending" | "accepted" | "pickedup" | "trip" | "reached" | "delivered")=>{
       

        switch (curr) {
            case "pending":
                dispatch(updateStatus("accepted"))
                break;

            case "accepted":
                dispatch(updateStatus("pickedup"))
                break;

            case "pickedup":
                dispatch(updateStatus("trip"))
                break;

            case "trip":
                dispatch(updateStatus("reached"))
                break;

            case "reached":
                dispatch(updateStatus("delivered"))
                break;

            case "delivered":
                break;

            
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-start p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Active Delivery
                </h2>
            </div>
            <div className="w-full md:w-7xl bg-white p-6 rounded-xl mb-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-36">
                    {/* Left Section */}
                    <div className="md:col-span-4 space-y-6 md:pl-3">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                                    Customer: {delivery?.customerName}
                                </h1>
                                <p className="text-blue-600 font-semibold text-lg mb-4">
                                    ID#{delivery?.orderId}
                                </p>
                                <p className="text-gray-700 text-lg">
                                    Package: {delivery?.vehicle} - {(delivery?.weight)&&(delivery?.weight)/1000}kg
                                </p>
                            </div>

                            {/* Contact Icons */}
                            <div className="flex gap-2 bg-pink-500 rounded-2xl p-1">
                                <button className="p-2 hover:bg-pink-600 rounded-lg transition">
                                    <Phone size={24} className="text-white" />
                                </button>
                                <button className="p-2 hover:bg-pink-600 rounded-lg transition">
                                    <MessageCircle size={24} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="space-y-4 mb-8 pl-3">
                            <div className="flex items-start gap-4">
                                <div className="text-blue-600 mt-1">
                                    <Package size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-lg">{delivery?.Pickup}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-red-500 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-lg">{delivery?.dropOff}</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 flex-col md:flex-row">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition text-lg" onClick={() => statusUpdate(delivery?.Status)}>
                                {delivery?.Status}
                            </button>
                            <button className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 rounded-xl transition flex items-center justify-center gap-3 text-lg">
                                <PhoneCall size={20} />
                                Call to company
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Map */}
                    <div className="md:col-span-3">
                        <div className="bg-gray-800 rounded-xl overflow-hidden h-96 md:h-full relative">
                            {/* Map background */}
                            <div className="w-full h-full bg-gradient-to-b from-blue-900 to-slate-900 relative">
                                
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
