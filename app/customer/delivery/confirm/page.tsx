'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Star, ChevronLeft, X } from 'lucide-react';
import { submitDeliveryRequest } from '@/app/store/features/customerSlice';
import { useAppDispatch,useAppSelector } from '@/app/store/hooks';
import { useRouter } from 'next/navigation';
import Image from 'next/image';



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
        <div className="min-h-screen bg-gray-50 flex w-full max-w-2xl md: max-w-7xl p-2 md: w-7xl flex-col">
            {/* Header */}
            <div className="w-full bg-white shadow-lg border-gray-200 sticky top-0 z-10">
                <div className=" w-full mx-auto px-4 py-4 flex items-center justify-between">
                    <button className="w-full text-gray-600 hover:text-gray-900">
                        <ChevronLeft size={24} />
                    </button>
                    <h1 className="w-full text-lg font-semibold text-gray-900">
                        Request a Delivery <span className="text-yellow-500">#12345</span>
                    </h1>
                    <button
                        onClick={handleCancel}
                        className="w-full text-gray-600 hover:text-gray-900 font-medium"
                    >
                        {stage === 'confirm' ? (
                            <X size={24} />
                        ) : (
                                <span className="w-full text-sm">Cancel Request</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full flex-1 flex flex-col items-center justify-start max-w-2xl mx-auto w-full px-4 py-8">
                {/* Stage 1: Confirm Price */}
                
                    <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg p-10">
                        <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center mb-8">
                            <span className="text-5xl font-bold text-yellow-500">$28</span>
                        </div>
                        <button
                            onClick={handleConfirm}
                            className="w-full sm:w-96 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Confirm Now
                        </button>
                    </div>
                

                {/* Stage 2: Finding Driver */}
                {(stage === 'finding' || stage === 'driver') && (<div className="flex flex-col w-full gap-6 items-center justify-center py-6"><div className="flex justify-center items-center">
                    <Image src={'/arrow_down.png'} alt={'dh'} height={100} width={60}></Image>
                </div>
                    <div className="w-full flex flex-col items-center mt-4 bg-white rounded-lg shadow-lg p-10">
                        <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center mb-6 animate-pulse">
                            <MapPin size={40} className="text-amber-500" />
                        </div>
                        <p className="text-xl text-gray-700 text-center">
                            We're <span className="font-semibold text-yellow-500">finding</span> a driver for
                            you...
                        </p>
                    </div>
                </div>)}

                {/* Stage 3: Driver Assigned */}
                {stage === 'driver' && (<div className="flex flex-col w-full gap-6 items-center justify-center py-6"><div className="flex justify-center items-center">
                    <Image src={'/arrow_down.png'} alt={'dh'} height={100} width={60}></Image>
                </div>
                    <div className="w-full flex flex-col items-center space-y-8">
                        

                        {/* Driver Card */}
                        <div className="w-full bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center space-y-4 shadow-lg">
                        <div className="w-full text-center space-y-2">
                            <p className="text-gray-700">
                                Driver <span className="font-semibold text-amber-500">Rahim</span> accept your
                                delivery request
                            </p>
                            <p className="text-sm text-gray-500">Arriving in 10 minutes (2.3 Miles)</p>
                        </div>
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
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
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
                    </div>
                )}
            </div>
        </div>
    );
}