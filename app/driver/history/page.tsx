"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store"; // Adjust path as needed
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Link from "next/link";
import { Calendar1Icon, ChevronRight, Loader } from "lucide-react";
import DatePicker from "react-datepicker";

interface OrderItem {
    id: string;
    orderId: string;
    status: string;
    timestamp: string;
}

export default function DeliveryOrdersPage() {
    const dispatch = useAppDispatch();
    const deliveries = useAppSelector((state) => state.driver.deliveries);
    const [isLoading, setIsLoading] = useState(true);
    const [view, setView] = useState<"delivered" | "ongoing" | "date">("ongoing");
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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

    function isISODateString(value: string): boolean {
        // Regex to roughly match ISO 8601 datetime strings
        const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

        if (!isoRegex.test(value)) return false;

        // Further check: Date.parse should produce a valid date number
        const timestamp = Date.parse(value);
        return !isNaN(timestamp);
    }

    let content: React.ReactNode[] = [];
    deliveries.map((order) => {
        if (view === "delivered" && order.Status === "delivered") {
            content.push(
                <div
                    key={order.orderId}
                    className="flex flex-row w-full p-2 items-center justify-between bg-[#ddbb1133] rounded-lg"
                >
                    <div className="flex flex-row items-center justify-center gap-6 ">
                        <p className="text-md text-black">ID: {order.orderId}</p>

                        <p className="text-md text-black">
                            {new Date(order.deliveryDate).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                    </div>

                    <button className="shadow-sm rounded-lg">
                        <div className="m-auto p-2 bg-white rounded-lg ">
                            <ChevronRight></ChevronRight>
                        </div>
                    </button>
                </div>
            );
        }
        if (
            view === "date" &&
            new Date(order.deliveryDate).toDateString() ===
            new Date(selectedDate ? selectedDate : "").toDateString()
        ) {
            content.push(
                <div
                    key={order.orderId}
                    className="flex flex-row w-full p-2 items-center justify-between bg-[#ddbb1133] rounded-lg"
                >
                    <div className="flex flex-row items-center justify-center gap-6 ">
                        <p className="text-md text-black">ID: {order.orderId}</p>

                        <p className="text-md text-black">
                            {new Date(order.deliveryDate).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                        <p className="text-md text-black">-</p>
                        <p className="text-md text-yellow-700">{order.Status}</p>
                    </div>

                    <button className="shadow-sm rounded-lg">
                        <div className="m-auto p-2 bg-white rounded-lg ">
                            <ChevronRight></ChevronRight>
                        </div>
                    </button>
                </div>
            );
        }

        if (
            view==='ongoing' &&
            order.Status !== "delivered"
        ) {
            content.push(
                <div
                    key={order.orderId}
                    className="flex flex-row w-full p-2 items-center justify-between bg-[#ddbb1133] rounded-lg"
                >
                    <div className="flex flex-row items-center justify-center gap-6 ">
                        <p className="text-md text-black">ID: {order.orderId}</p>

                        <p className="text-md text-yellow-700">{order.Status}</p>
                    </div>

                    <button className="shadow-sm rounded-lg">
                        <div className="m-auto p-2 bg-white rounded-lg ">
                            <ChevronRight></ChevronRight>
                        </div>
                    </button>
                </div>
            );
        }
    });

    return (
        <>
            <div className="w-full flex flex-row items-center justify-between p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Active Delivery
                </h2>
                <div className="flex flex-row items-center gap-6 justify-center">
                    <DatePicker
                        calendarClassName="border border-red-200 shadow-lg rounded-lg p-2"
                        selected={selectedDate}
                        onChange={(date: Date | null) => {
                            setSelectedDate(date);
                            if (date) {
                                setSelectedDate(date);
                                setView("date");
                            }
                        }}
                        customInput={
                            <button
                                className={`mt-1 flex flex-row items-center font-semibold justify-around gap-2 px-2 rounded-md bg-white p-[.5px] ${view !== "ongoing" && view !== "delivered"
                                        ? "border border-yellow-500 bg-yellow-500 text-white"
                                        : "border border-gray-400 bg-white"
                                    } `}
                            >
                                <Calendar1Icon />
                                {selectedDate ? (
                                    <p>{selectedDate ? selectedDate.toLocaleDateString() : ""}</p>
                                ) : (
                                    ""
                                )}
                            </button>
                        }
                        popperClassName="z-50"
                        showPopperArrow={false}
                    />

                    <button
                        className={`px-2 font-semibold rounded-md  ${view === "ongoing"
                                ? "border border-yellow-500 bg-yellow-500 text-white"
                                : "border border-gray-400 bg-white"
                            }`}
                        onClick={() => setView("ongoing")}
                    >
                        Ongoing
                    </button>
                    <button
                        className={`px-2 font-semibold rounded-md bg-white ${view === "delivered"
                                ? "border border-yellow-500 bg-yellow-500 text-white"
                                : "border border-gray-400 bg-white"
                            }`}
                        onClick={() => setView("delivered")}
                    >
                        Delivered
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-7xl p-4 items-center justify-center bg-white shadow-lg rounded-xl">
                {content.length > 0 ? (
                    content
                ) : (
                    <p className="text-gray-500 text-center py-4">No orders found.</p>
                )}
            </div>
        </>
    );
}
