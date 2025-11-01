'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { RootState } from '../../store/store';

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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                            aria-label="Go back"
                        >
                            <ArrowLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Track Order
                        </h1>
                    </div>
                </div>
            </div>

          
                {/* Page Content */}
                <div className="bg-white rounded-lg shadow-sm">
                    {children}
                </div>
            </div>
        
    );
}