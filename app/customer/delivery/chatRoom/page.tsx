'use client';

import React, { useRef, useEffect, useState } from 'react';
import { RootState} from '../../../store/store';
import { ChatMessage } from './components/chatMessage';
import {addMessage} from '../../../store/features/chatSlice' 
import { useAppDispatch,useAppSelector } from '../../../store/hooks';

export const ChatContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { messages, loading, userName, userAvatar } = useAppSelector((state: RootState) => state.chat);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now().toString(),
            sender: 'user' as const,
            text: inputValue,
            timestamp: new Date(),
            avatar: userAvatar,
            name: userName,
        };

        dispatch(addMessage(newMessage));
        setInputValue('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="md:w-4xl flex flex-col h-screen bg-white rounded-lg">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                        isUser={message.sender === 'user'}
                    />
                ))}
                {loading && (
                    <div className="flex gap-3 mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 animate-pulse" />
                        <div className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-xl">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
                <div className="flex gap-2 md:gap-3">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        rows={1}
                        className="flex-1 px-4 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm md:text-base"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || loading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-colors flex-shrink-0 text-sm md:text-base"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatContainer;