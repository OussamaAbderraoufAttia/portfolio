import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'No prompt provided' });
        }

        try {
            const response = await fetch(process.env.GEMINI_API_ENDPOINT as string, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
                },
                body: JSON.stringify({
                    prompt,
                    // Additional parameters if needed
                }),
            });

            if (!response.ok) {
                console.error('Gemini API response error:', response.status, await response.text());
                return res.status(response.status).json({ error: 'Error from Gemini API' });
            }

            const data = await response.json();
            res.status(200).json({ response: data });
        } catch (error) {
            console.error('Error fetching from Gemini API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default handler;
