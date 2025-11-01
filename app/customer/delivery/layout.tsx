'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { RootState } from '../../store/store';
import Link from "next/link";

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

    // Fetch customer delivery data from Redux store
    const delivery = useSelector((state: RootState) => state.customer?.delivery);

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
                    <button
                        onClick={() => 1}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                        Cancel Request
                    </button>
                </div>
            </header>

          
                {/* Page Content */}
            <div className="flex items-center justify-center rounded-lg w-full">
                    {children}
                </div>
            </div>
        
    );
}