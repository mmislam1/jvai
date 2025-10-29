'use client'

import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Calendar, Clock, CheckSquare, Plus, History, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
    const { todayDeliverers, pendingOrders, completedOrders, activities } = useAppSelector(
        (state) => state.customer.delivery
    );

    const handleCreateRequest = () => {
        console.log('Create new delivery request');
        // Add navigation or modal logic here
    };

    const handleViewHistory = () => {
        console.log('View history');
        // Add navigation logic here
    };

    const handleTrackOrders = () => {
        console.log('Track orders');
        // Add navigation logic here
    };

    const getActivityColor = (index: number): string => {
        const colors = ['bg-green-200', 'bg-green-200', 'bg-pink-200', 'bg-pink-200', 'bg-gray-400', 'bg-gray-400'];
        return colors[index] || 'bg-gray-400';
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-2">
                            <div className="bg-gray-100 p-2 rounded-lg mr-3">
                                <Calendar className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Today's Deliverers</p>
                                <p className="text-3xl font-bold text-gray-800">{String(todayDeliverers).padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-2">
                            <div className="bg-gray-100 p-2 rounded-lg mr-3">
                                <Clock className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending Order</p>
                                <p className="text-3xl font-bold text-gray-800">{String(pendingOrders).padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-2">
                            <div className="bg-gray-100 p-2 rounded-lg mr-3">
                                <CheckSquare className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Completed Order</p>
                                <p className="text-3xl font-bold text-gray-800">{String(completedOrders).padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Delivery</h3>
                        <p className="text-gray-600 mb-6">Create a new delivery request for truck parts</p>
                        <button
                            onClick={handleCreateRequest}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded transition-colors"
                        >
                            Create New Request
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <History className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">History</h3>
                        <p className="text-gray-600 mb-6">View past orders and delivery records</p>
                        <button
                            onClick={handleViewHistory}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded transition-colors"
                        >
                            View History
                        </button>
                    </div>
                </div>

                {/* Track Orders Card */}
                <div className="bg-white rounded-lg shadow p-8 text-center mb-8">
                    <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Track My Orders</h3>
                    <p className="text-gray-600 mb-6">Monitor real-time delivery status and location</p>
                    <button
                        onClick={handleTrackOrders}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded transition-colors"
                    >
                        Track Orders
                    </button>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-4 border-b">Recent Activities</h2>
                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <div key={activity.id} className="flex items-start">
                                <div className={`w-10 h-10 rounded-full ${getActivityColor(index)} flex-shrink-0`}></div>
                                <div className="ml-4 flex-1">
                                    <p className="text-gray-800 font-medium">
                                        Order Id#{activity.orderId}- {activity.status}
                                    </p>
                                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;