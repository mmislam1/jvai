'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Star, ChevronLeft, X } from 'lucide-react';
import { submitDeliveryRequest } from '@/app/store/features/customerSlice';
import { useAppDispatch,useAppSelector } from '@/app/store/hooks';
import { useRouter } from 'next/navigation';


export default function DeliveryPage() {
    const router=useRouter()
    const [stage, setStage] = useState<'confirm' | 'finding' | 'driver'>('confirm');
     const dispatch = useAppDispatch();
        const { formData, loading, error, success } = useAppSelector(
            (state) => state.customer.deliveryRequest
        );


    const handleConfirm = async() => {
        await dispatch(submitDeliveryRequest(formData));
        setStage('finding');
        setTimeout(() => setStage('driver'), 2000);
    };

    const handleCancel = () => {
        setStage('confirm');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button className="text-gray-600 hover:text-gray-900">
                        <ChevronLeft size={24} />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-900">
                        Request a Delivery <span className="text-amber-500">#12345</span>
                    </h1>
                    <button
                        onClick={handleCancel}
                        className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                        {stage === 'confirm' ? (
                            <X size={24} />
                        ) : (
                            <span className="text-sm">Cancel Request</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-start max-w-2xl mx-auto w-full px-4 py-8">
                {/* Stage 1: Confirm Price */}
                
                    <div className="w-full flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center mb-8">
                            <span className="text-5xl font-bold text-amber-500">$28</span>
                        </div>
                        <button
                            onClick={handleConfirm}
                            className="w-full sm:w-96 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Confirm Now
                        </button>
                    </div>
                

                {/* Stage 2: Finding Driver */}
                {(stage === 'finding' || stage === 'driver') && (
                    <div className="w-full flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center mb-6 animate-pulse">
                            <MapPin size={40} className="text-amber-500" />
                        </div>
                        <p className="text-xl text-gray-700 text-center">
                            We're <span className="font-semibold text-amber-500">finding</span> a driver for
                            you...
                        </p>
                    </div>
                )}

                {/* Stage 3: Driver Assigned */}
                {stage === 'driver' && (
                    <div className="w-full flex flex-col items-center space-y-8">
                        {/* Driver Acceptance */}
                        <div className="w-full text-center space-y-2">
                            <p className="text-gray-700">
                                Driver <span className="font-semibold text-amber-500">Rahim</span> accept your
                                delivery request
                            </p>
                            <p className="text-sm text-gray-500">Arriving in 10 minutes (2.3 Miles)</p>
                        </div>

                        {/* Driver Card */}
                        <div className="w-full bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center space-y-4">
                            {/* Driver Avatar */}
                            <div className="relative">
                                <div className="w-28 h-28 rounded-full bg-green-200 flex items-center justify-center border-4 border-white shadow-md">
                                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                                        🚐
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bg-amber-500 rounded-full p-2 shadow-lg">
                                    <MapPin size={20} className="text-white" />
                                </div>
                            </div>

                            {/* Driver Info */}
                            <div className="text-center space-y-1">
                                <h2 className="text-2xl font-bold text-gray-900">Abdur Rahim</h2>
                                <p className="text-sm text-gray-600">Toyota</p>
                                <div className="flex items-center justify-center space-x-1">
                                    <Star size={16} className="text-amber-500 fill-amber-500" />
                                    <span className="font-semibold text-gray-900">4.9</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                                    <Phone size={20} />
                                    <span>Call Now</span>
                                </button>
                                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                                    <MessageCircle size={20} />
                                    <span>Message Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}