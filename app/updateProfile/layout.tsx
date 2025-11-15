"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTokens, logout } from "../store/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "@/components/button";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";

interface MenuItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export default function RootLayout({children}:{children:React.ReactNode}) {
    const dispatch = useAppDispatch();
    const { user, loading } = useSelector((state: RootState) => state.auth);
    const [phone, setPhone] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState("");

    useEffect(() => {
        if (user?.phone) {
            setPhone(user.phone);
        }
    }, [user]);

    const menuItems: MenuItem[] = [
        { label: "Profile Information", href: `/updateProfile/driver`},
        { label: "Change Password", href: "/updateProfile/changePassword" },
        { label: "Terms and Service", href: "/updateProfile/terms&service" },
        { label: "Privacy and Policy", href: "/updateProfile/privacy&policy" },
        { label: "About Us", href: "/updateProfile/about" },
    ];

    const handleSave = async () => {
        setIsSaving(true);
        setSaveMessage("");
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSaveMessage("Profile updated successfully!");
            setTimeout(() => setSaveMessage(""), 3000);
        } catch (error) {
            setSaveMessage("Failed to save changes");
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Please log in to view settings</p>
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-start max-w-7xl min-h-screen w-full md:w-4xl">
            <div className="flex flex-row items-center justify-start max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-4">
                <Link
                    href="/profile"
                    className="flex flex-row items-center justify-center p-2 gap-2 font-semibold"
                >
                    <ArrowLeft></ArrowLeft>
                    <h2>Profile</h2>
                </Link>
            </div>

            <div className="flex flex-row items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8 py-8  w-full">
                
                    {/* Sidebar Menu */}
                <div className=" flex flex-col md:flex-row items-stretch justify-center bg-white w-full rounded-lg p-6">
                    <nav className="min-h-[100%] space-y-1 overflow-hidden border-yellow-300 border-r-[3px] w-full md:w-[30%]">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center justify-start pl-6 px-4 py-3 hover:bg-gray-50 transition-colors group"
                                >
                                    <span className="text-gray-700 font-medium group-hover:text-gray-900">
                                        {item.label}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                                </Link>
                            ))}
                        </nav>
                    <div className="flex flex-col items-center justify-start w-full md:w-[70%]">{children}</div>
                    </div>

                </div>    
            
        </div>
    );
};

