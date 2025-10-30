'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchNotifications, deleteNotification, clearAllNotifications } from '../../../app/store/features/customerSlice'
import { ChevronLeft } from 'lucide-react';
import NotificationCard from '@/components/notificationCard';

export default function NotificationsPage() {
    const dispatch = useAppDispatch();
    const  loading  = useAppSelector(state => state.auth.loading);
    const items =useAppSelector(state=> state.customer.notifications)

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    const handleDelete = (id: string) => {
        dispatch(deleteNotification(id));
    };

    const handleClearAll = () => {
        dispatch(clearAllNotifications());
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6">
            <div className="max-w-3xl md:min-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>
                    <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                        Notification
                    </h1>
                </div>

                {/* Notifications List */}
                <div className="space-y-3">
                    {loading ? (
                        <div className="flex justify-center items-center py-16">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-blue-500"></div>
                        </div>
                    ) : items.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-xl border border-slate-100">
                            <p className="text-slate-500 text-lg">No notifications</p>
                        </div>
                    ) : (
                        items.map((notif) => (
                            <NotificationCard
                                key={notif.id}
                                notification={notif}
                                onDelete={() => handleDelete(notif.id)}
                            />
                        ))
                    )}
                </div>

                {/* Clear All Button */}
                {items.length > 0 && (
                    <button
                        onClick={handleClearAll}
                        className="mt-8 w-full px-4 py-3 text-slate-700 hover:text-slate-900 text-base font-medium border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                        Clear All Notifications
                    </button>
                )}
            </div>
        </div>
    );
}