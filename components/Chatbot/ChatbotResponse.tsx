import React from 'react';
import { Message } from './types';

interface ChatbotResponseProps {
  messages: Message[];
}

const ChatbotResponse: React.FC<ChatbotResponseProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <div>User: {msg.user}</div>
          <div>Bot: {msg.bot}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatbotResponse;
