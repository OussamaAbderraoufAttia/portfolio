"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { generateResponse } from './chatbotService';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

const Chatbot: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [typingMessage, setTypingMessage] = useState<string>('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const formatMessage = (message: string) => {
        // Replace `\n` with <br />
        let formattedMessage = message.replace(/\n/g, '<br />');
        
        // Replace text between `**` with bold
        formattedMessage = formattedMessage.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        return formattedMessage;
    };

    const handleSend = async () => {
        if (!input) return;

        const newMessages: Message[] = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const botMessage = await generateResponse(input);
            setTypingMessage('');
            setMessages([...newMessages, { sender: 'bot', text: '' }]); // Placeholder for typing effect

            // Typing effect with improved scroll behavior
            const typeMessage = async (message: string) => {
                let speed = 1; // Faster typing speed
                let lastScrollPosition = 0;

                for (let i = 0; i < message.length; i++) {
                    setTypingMessage(message.slice(0, i + 1));
                    await new Promise((resolve) => setTimeout(resolve, speed));

                    // Update scroll position after each whitespace character
                    if (message[i] === ' ' || i === message.length - 1) {
                        lastScrollPosition = chatContainerRef.current?.scrollHeight ?? 0;
                        scrollToBottom();
                    }
                }
            };

            const formattedMessage = formatMessage(botMessage);
            await typeMessage(formattedMessage);

            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1].text = formattedMessage;
                return updatedMessages;
            });
        } catch (error) {
            console.error(error);
            setMessages([...newMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
        } finally {
            setIsLoading(false);
            scrollToBottom();
        }
    };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scroll({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className=" flex flex-col justify-center items-center min-h-screen p-4 py-0">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
            >
                Smart Assistant
            </motion.h1>
            {/* Adjusted div with background opacity */}
            <div className=" left-1 w-full max-w-4xl p-4 border rounded-lg shadow-lg text-white" 
                 style={{ backgroundColor: 'rgba(31, 41, 55, 0.2)', zIndex: 10 }}> {/* Opacity adjusted here */}
                <div 
                    ref={chatContainerRef} 
                    className="chat-container min-h-32 max-h-96 overflow-y-auto p-4 border border-gray-600 rounded-lg mb-4 bg-gray-900"
                    style={{
                        backgroundColor: 'rgba(17, 24, 39, 0.5)', 
                        zIndex: 10
                    }}
                >
                    <div className="mb-4 text-center text-gray-400"
                        style={{ backgroundColor: 'rgba(17, 24, 39, 0.0)', zIndex: 10 }}
                    >Hi! I'm Oussama. How can I assist you today?</div>
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                            
                        >
                            <div 
                                className={`max-w-lg p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} ${
                                    message.sender === 'bot' && typingMessage && message.text === '' ? 'whitespace-pre-line' : ''
                                }`}
                                dangerouslySetInnerHTML={{ __html: message.sender === 'bot' && typingMessage && message.text === '' ? typingMessage : message.text }}
                            />
                        </div>
                    ))}
                </div>
                {/* Explicitly set z-index for input and button container */}
                <div className="flex items-center p-2 rounded-lg" style={{ zIndex: 20 }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-900 text-white mr-2"
                        placeholder="Type your message..."
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button 
                        onClick={handleSend} 
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
    
};

export default Chatbot;
