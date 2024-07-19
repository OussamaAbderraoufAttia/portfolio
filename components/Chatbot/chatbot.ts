import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchChatbotResponse } from './utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  // Logic to communicate with your chatbot model
  const response = await fetchChatbotResponse(message);

  res.status(200).json({ response });
}
