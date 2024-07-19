export const fetchChatbotResponse = async (message: string): Promise<string> => {
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
  
    const data = await response.json();
    return data.response;
  };
  