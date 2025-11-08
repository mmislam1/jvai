import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import Image from 'next/image';
import {RootState} from '../store/store'
import { useAppDispatch,useAppSelector } from '../store/hooks';
import Link from 'next/link';
import {User} from '../store/features/authSlice'

interface UserIconProps {
    variant?: 'small' | 'medium' | 'large';
    showNotification?: boolean;
    onClick?: () => void;
    className?: string;
}


const UserTab: React.FC<UserIconProps> = ({
    variant = 'medium',
    showNotification = true,
    onClick,
    className = '',
}) => {
    const user = useAppSelector((store)=>store.auth.user)
    const [imageError, setImageError] = useState(false);

    

    // Responsive sizing
    const sizeConfig = {
        small: {
            container: 'w-8 h-8 md:w-10 md:h-10',
            image: 40,
            notification: 'w-5 h-5 text-xs',
            notificationBg: 'top-0 right-0',
        },
        medium: {
            container: 'w-10 h-10 md:w-12 md:h-12',
            image: 48,
            notification: 'w-6 h-6 text-sm',
            notificationBg: 'top-1 right-1',
        },
        large: {
            container: 'w-12 h-12 md:w-16 md:h-16',
            image: 64,
            notification: 'w-7 h-7 text-base',
            notificationBg: 'top-2 right-2',
        },
    };

    const config = sizeConfig[variant];

    // Fallback initials
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <>{!user?(<div className="flex items-center gap-4">
        <Link
          href="/auth/signin"
          className="text1 px-5 py-2 border border-gray-400 rounded-lg text-[#333333] hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="text1 buttonColor text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Sign Up
        </Link>
        </div>) : (<div
            className={`relative inline-flex ${className}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && onClick) onClick();
            }}
        >
            {/* Avatar Container */}
            <div
                className={`
          ${config.container}
          relative
          rounded-full
          overflow-hidden
          border-2
          border-gray-200
          dark:border-gray-700
          hover:border-gray-300
          dark:hover:border-gray-600
          transition-colors
          duration-200
          cursor-pointer
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-blue-400
          to-purple-500
          flex-shrink-0
        `}
            >
                {!imageError && (user.image) ? (
                    <Image
                        src={'/driver.png'}
                        alt={'User avatar'}
                        width={config.image}
                        height={config.image}
                        className="w-full h-full object-cover"
                        priority
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <span
                        className={`
              font-bold
              text-white
              ${variant === 'small' ? 'text-xs' : ''}
              ${variant === 'medium' ? 'text-sm' : ''}
              ${variant === 'large' ? 'text-lg' : ''}
              select-none
            `}
                    >
                        {getInitials(user.name || 'U')}
                    </span>
                )}
            </div>

            {/* Notification Badge */}
            {showNotification && 8 > 0 && (
                <div
                    className={`
            ${config.notificationBg}
            absolute
            ${config.notification}
            rounded-full
            bg-rose-500
            hover:bg-rose-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            ring-2
            ring-white
            dark:ring-gray-900
            transition-colors
            duration-200
          `}
                >
                    {8 > 99 ? '99+' : 8}
                </div>
            )}
        </div>)}</>
        
    );
};

export default UserTab;