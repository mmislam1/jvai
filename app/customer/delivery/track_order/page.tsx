"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store"; // Adjust path as needed
import Link from "next/link";
import { ChevronRight, Loader } from "lucide-react";

interface OrderItem {
    id: string;
    orderId: string;
    status: string;
    timestamp: string;
}

export default function DeliveryOrdersPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { delivery } = useSelector((state: RootState) => state.customer);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetch or dispatch actions if needed
        setIsLoading(false);
    }, [dispatch]);

    const getStatusColor = (status: string): string => {
        const statusMap: Record<string, string> = {
            Processing: "bg-amber-50 text-amber-700 border-amber-200",
            "Delivered Successfully": "bg-green-50 text-green-700 border-green-200",
            Pending: "bg-blue-50 text-blue-700 border-blue-200",
            Cancelled: "bg-red-50 text-red-700 border-red-200",
        };
        return statusMap[status] || "bg-gray-50 text-gray-700 border-gray-200";
    };

    const getStatusBadgeColor = (status: string): string => {
        const badgeMap: Record<string, string> = {
            Processing: "text-amber-600",
            "Delivered Successfully": "text-green-600",
            Pending: "text-blue-600",
            Cancelled: "text-red-600",
        };
        return badgeMap[status] || "text-gray-600";
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    const orders: OrderItem[] = delivery.activities.map((activity) => ({
        id: activity.id,
        orderId: activity.orderId,
        status: activity.status,
        timestamp: activity.timestamp,
    }));

    return (
        <div className="flex flex-col gap-2 w-4xl p-4 items-center justify-center bg-white shadow-lg rounded-xl m-2">
            {orders.map((order) => {
                return (
                    <div  key={order.orderId} className="flex flex-row w-full p-2 items-center justify-between bg-[#ddbb1133] rounded-lg">
                        <div className="flex flex-row items-center justify-around w-[75%] md:w-[35%]">
                            <p className="text-md text-black">ID: {order.orderId}</p>
                            <p className="text-md text-yellow-700">{order.status}</p>
                        </div>

                        <button className="shadow-sm rounded-lg">
                            <div className="m-auto p-2 bg-white rounded-lg ">
                                <ChevronRight></ChevronRight>
                            </div>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
