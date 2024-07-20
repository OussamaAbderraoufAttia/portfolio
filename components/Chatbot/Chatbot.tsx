"use client";
import React, { useState } from 'react';
import styles from './Chatbot.module.css';
import { generateResponse } from './chatbotService';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

const Chatbot: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSend = async () => {
        if (!input) return;

        const newMessages: Message[] = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);

        try {
            const botMessage = await generateResponse(input);
            setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
        } catch (error) {
            console.error(error);
            setMessages([...newMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
        }

        setInput('');
    };

    return (
        <div className={styles.chatContainer}>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.inputField}
                placeholder="Type your message..."
            />
            <button onClick={handleSend} className={styles.sendButton}>Send</button>
        </div>
    );
};

export default Chatbot;
