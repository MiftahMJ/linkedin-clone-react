import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader, Sparkles, MinimizeIcon } from 'lucide-react';
import { sendMessageToAI, SYSTEM_PROMPT } from '../../services/aiService';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hi! I\'m your professional networking assistant. How can I help you today?'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');

        // Add user message
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            // Prepare conversation history for API
            const conversationHistory = newMessages.map(msg => ({
                role: msg.role,
                content: msg.content
            }));

            // Get AI response
            const aiResponse = await sendMessageToAI(userMessage, conversationHistory);

            // Add AI response
            setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([
                ...newMessages,
                {
                    role: 'assistant',
                    content: 'Sorry, I encountered an error. Please make sure your API key is configured correctly.'
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const quickActions = [
        "Help me optimize my profile",
        "Tips for networking",
        "How to prepare for interviews",
        "Job search strategies"
    ];

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-strong hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 group"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></span>

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Ask AI Assistant
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-strong z-50 flex flex-col transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'
                        }`}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">AI Assistant</h3>
                                <p className="text-xs text-white/80">Professional networking help</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <MinimizeIcon className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.role === 'user'
                                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                                                : 'bg-white text-gray-800 shadow-sm border border-gray-100'
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                                {message.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                                            <Loader className="w-5 h-5 animate-spin text-primary-500" />
                                        </div>
                                    </div>
                                )}

                                {/* Quick Actions (shown only at start) */}
                                {messages.length === 1 && (
                                    <div className="space-y-2">
                                        <p className="text-xs text-gray-500 text-center mb-2">Quick actions:</p>
                                        {quickActions.map((action, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setInputMessage(action);
                                                    setTimeout(() => handleSendMessage(), 100);
                                                }}
                                                className="w-full text-left p-3 bg-white hover:bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 hover:border-primary-300 transition-all"
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
                                <div className="flex gap-2 items-end">
                                    <textarea
                                        ref={inputRef}
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Ask me anything..."
                                        rows="1"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                        style={{ maxHeight: '120px' }}
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim() || isLoading}
                                        className={`p-3 rounded-xl transition-all ${inputMessage.trim() && !isLoading
                                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-md'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AIChatbot;
