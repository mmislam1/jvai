'use client';

import React from 'react';
import Image from 'next/image';
import { Message } from '../../../../store/features/chatSlice';

interface ChatMessageProps {
    message: Message;
    isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
    const formattedTime = new Date(message.timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className={`flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex flex-shrink-0 items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                        src={message.avatar}
                        alt={message.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>

            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-xs md:max-w-md lg:max-w-lg`}>
                <p className="text-xs md:text-sm text-gray-600 mb-1">{message.name}</p>
                <div
                    className={`px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm md:text-base ${isUser
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-900 rounded-bl-none'
                        }`}
                >
                    <p className="break-words">{message.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{formattedTime}</p>
            </div>
        </div>
    );
};
