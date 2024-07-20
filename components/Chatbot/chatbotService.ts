// /components/Chatbot/chatbotService.ts

import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error('API key is missing');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateResponse = async (input: string): Promise<string> => {
    try {
        const result = await model.generateContent([input]);
        return result.response.text();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to generate response');
    }
};
