'use client' 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector,useAppDispatch } from '../../store/hooks'; // Adjust path to your store
import Image from 'next/image';

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    vehicle: 'bike' | 'pickup' | 'truck';
    vehicleRegistration: string;
    drivingLicense: string;
    avatar?: File;
}

export default function DriverProfileForm() {
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state) => state.driver.profile);

    const [formData, setFormData] = useState<FormData>({
        name: profile?.name || '',
        email: profile?.Email || '',
        phoneNumber: profile?.phoneNumber || '',
        vehicle: profile?.vehicle || 'bike',
        vehicleRegistration: profile?.vehicleRegistration || '',
        drivingLicense: profile?.drivingLicense || '',
    });

    const [avatarPreview, setAvatarPreview] = useState<string>(
        profile?.Avatar || ''
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };

    const handleVehicleSelect = (vehicle: 'bike' | 'pickup' | 'truck') => {
        setFormData(prev => ({ ...prev, vehicle }));
        setError(null);
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, avatar: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            setError('Name is required');
            return false;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            setError('Valid email is required');
            return false;
        }
        if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 10) {
            setError('Valid phone number is required');
            return false;
        }
        if (!formData.vehicleRegistration.trim()) {
            setError('Vehicle registration is required');
            return false;
        }
        if (!formData.drivingLicense.trim()) {
            setError('Driving license number is required');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setSuccess(false);

        try {
            // Prepare form data for submission
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('Email', formData.email);
            submitData.append('phoneNumber', formData.phoneNumber);
            submitData.append('vehicle', formData.vehicle);
            submitData.append('vehicleRegistration', formData.vehicleRegistration);
            submitData.append('drivingLicense', formData.drivingLicense);

            if (formData.avatar) {
                submitData.append('avatar', formData.avatar);
            }

            // Replace with your actual API endpoint
            // const response = await api.post('/driver/profile', submitData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess(true);
            setError(null);

            // Optional: dispatch Redux action to update profile
            // dispatch(updateProfile(response.data));

            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to save profile');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center md:items-start justify-start gap-2">
                    <div className="relative w-30 h-30 rounded-full border-2 border-blue-600 overflow-hidden bg-gray-100">
                        {avatarPreview ? (
                            <Image
                                src={avatarPreview}
                                alt="Profile avatar"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                                <span className="text-4xl font-bold text-blue-600">
                                    {formData.name.charAt(0).toUpperCase() || '?'}
                                </span>
                            </div>
                        )}
                    </div>
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                        />
                        
                    </label>
                </div>

                {/* Name Field */}
                <div>
                    
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your Name"
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Email Field */}
                <div>
                    
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Phone Number Field */}
                <div>
                    
                    <input
                        id="phone"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Vehicle Selection */}
                <div>
                    
                    <div className="flex flex-col md:flex-row gap-3 ">
                        {(['bike', 'pickup', 'truck'] as const).map((vehicleType) => (
                            <button
                                key={vehicleType}
                                type="button"
                                onClick={() => handleVehicleSelect(vehicleType)}
                                className={`flex-1 min-w-[100px] px-6 py-2 rounded-lg font-medium transition-all ${formData.vehicle === vehicleType
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                            >
                                {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Vehicle Registration Field */}
                <div>
                    
                    <input
                        id="registration"
                        type="text"
                        name="vehicleRegistration"
                        value={formData.vehicleRegistration}
                        onChange={handleInputChange}
                        placeholder="Vehicle Registration Number"
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Driving License Field */}
                <div>
                    
                    <input
                        id="license"
                        type="text"
                        name="drivingLicense"
                        value={formData.drivingLicense}
                        onChange={handleInputChange}
                        placeholder="Driving License Number"
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div className="p-2 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="p-2 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm font-medium">
                            Profile saved successfully!
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Saving...
                        </>
                    ) : (
                        'Save Now'
                    )}
                </button>
            </form>
        </div>
    );
}