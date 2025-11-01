'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import {
    updateDeliveryRequestFormField,
    resetDeliveryRequestForm,
    submitDeliveryRequest,
} from '../../store/features/customerSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DeliveryRequestPage() {
    const router=useRouter()
    const dispatch = useAppDispatch();
    const { formData, loading, error, success } = useAppSelector(
        (state) => state.customer.deliveryRequest
    );
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        dispatch(updateDeliveryRequestFormField({ field: name as any, value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/customer/confirm_delivery')
    };

    const handleReset = () => {
        dispatch(resetDeliveryRequestForm());
        setSubmitted(false);
    };

    return (
        <div className="flex flex-col items-center max-w-2xl md:max-w-5xl justify-center w-full min-h-screen p-2 sm:p-2 lg:p-6">
            <div className="flex flex-col items-center justify-center w-full">
                {/* Header */}
                <Link
                        href="/"
                        className="flex mr-auto h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-600 shadow-md transition-all hover:shadow-lg active:scale-95"
                        aria-label="Go back"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </Link>
                <div className="w-full mb-8 flex items-center justify-center gap-4">
                    
                    <h1 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                        Delivery Request
                    </h1>
                </div>

                <p className="mb-8 text-center text-gray-700">
                    Fill in the details below to schedule your delivery
                </p>

                {/* Success Message */}
                {success && submitted && (
                    <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                        <p className="font-semibold">Success!</p>
                        <p>Your delivery request has been submitted.</p>
                        <button
                            onClick={handleReset}
                            className="mt-3 text-sm font-medium underline hover:no-underline"
                        >
                            Create another request
                        </button>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
                        <p className="font-semibold">Error</p>
                        <p>{error}</p>
                    </div>
                )}

                {/* Form */}
                {!success || !submitted ? (
                    <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-xl bg-white p-6 shadow-lg sm:p-8">
                        {/* Order ID */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Order ID
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">📋</span>
                                <input
                                    type="text"
                                    name="orderId"
                                    value={formData.orderId}
                                    onChange={handleInputChange}
                                    placeholder="eg: #12345"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Company Name
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">🏢</span>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder="Enter company name"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Product Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Short Description{' '}
                                <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">📝</span>
                                <textarea
                                    name="productDescription"
                                    value={formData.productDescription}
                                    onChange={handleInputChange}
                                    placeholder="Write product description"
                                    rows={3}
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Product Weight */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Weight <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">⚖️</span>
                                <input
                                    type="text"
                                    name="productWeight"
                                    value={formData.productWeight}
                                    onChange={handleInputChange}
                                    placeholder="Write here"
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Product Amount */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Amount <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">💰</span>
                                <input
                                    type="text"
                                    name="productAmount"
                                    value={formData.productAmount}
                                    onChange={handleInputChange}
                                    placeholder="Write the amount"
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Pickup Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Pickup Location
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">📍</span>
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleInputChange}
                                    placeholder="Enter pickup address"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Delivery Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Delivery Location
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">🏠</span>
                                <input
                                    type="text"
                                    name="deliveryLocation"
                                    value={formData.deliveryLocation}
                                    onChange={handleInputChange}
                                    placeholder="Enter delivery address"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-amber-50 px-4 py-3 pl-10 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    Processing...
                                </span>
                            ) : (
                                'Request a Driver'
                            )}
                        </button>
                    </form>
                ) : null}
            </div>
        </div>
    );
}