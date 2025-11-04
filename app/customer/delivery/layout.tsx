"use client";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ArrowLeft, Calendar1Icon, ChevronLeft, Divide } from "lucide-react";
import { ReactNode, useState } from "react";
import { RootState } from "../../store/store";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "../../../components/button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { updateHistoryView } from "@/app/store/features/customerSlice";
import DatePicker from "react-datepicker";

interface DeliveryData {
    id: string;
    status: string;
    address: string;
    date: string;
    // Add other delivery properties as needed
    [key: string]: any;
}

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const view = useAppSelector((state) => state.customer?.historyView);
    const [selectedDate, setSelectedDate] = useState<Date | null>();
    // Fetch customer delivery data from Redux store
    //const delivery = useSelector((state: RootState) => state.customer?.delivery);
    const path = usePathname().substring(19).split("/");
    return (
        <div className="min-h-screen w-full">
            {/* Header */}
            <header className="top-0 z-40 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/orders"
                        className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <ChevronLeft className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Track Order</span>
                    </Link>
                    <div className="flex flex-row items-center justify-center">
                        {path[0] === "picked_up" || path[0] === "confirm" ? (
                            <button
                                onClick={() => 1}
                                className="text-sm font-medium text-red-600 hover:text-red-700"
                            >
                                Cancel Request
                            </button>
                        ) : path[0] === "history" ? (
                            <div className="flex flex-row items-center gap-6 justify-center">
                                <DatePicker
                                        calendarClassName="border border-red-200 shadow-lg rounded-lg p-2"
                                    selected={selectedDate}
                                    onChange={(date: Date | null) => {
                                        setSelectedDate(date);
                                        if (date) {
                                            dispatch(updateHistoryView(date.toISOString()));
                                        } else {
                                            dispatch(updateHistoryView(new Date().toISOString()));
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
                                            {selectedDate?<p>
                                                {selectedDate ? selectedDate.toLocaleDateString() : ""}
                                            </p>:''}
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
                                    onClick={() => dispatch(updateHistoryView("ongoing"))}
                                >
                                    Ongoing
                                </button>
                                <button
                                        className={`px-2 font-semibold rounded-md bg-white ${view === "delivered"
                                            ? "border border-yellow-500 bg-yellow-500 text-white"
                                            : "border border-gray-400 bg-white"
                                        }`}
                                    onClick={() => dispatch(updateHistoryView("delivered"))}
                                >
                                    Delivered
                                </button>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <div className="flex items-center justify-center rounded-lg w-full">
                {children}
            </div>
        </div>
    );
}
