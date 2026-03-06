import axios from "axios";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const SYSTEM_PROMPT = `
You are a helpful professional networking assistant. You help users with:
- Career advice and job search tips
- Professional networking strategies
- Resume and LinkedIn profile optimization
- Interview preparation
- Industry insights and trends
- Professional communication tips

Be friendly, professional, and concise in your responses.
`;


export const sendMessageToAI = async (message, conversationHistory = []) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "gpt-4.1-mini", // or "gpt-4.1", "gpt-4o-mini"
                messages: [
                    {
                        role: "system",
                        content: SYSTEM_PROMPT,
                    },
                    ...conversationHistory,
                    {
                        role: "user",
                        content: message,
                    },
                ],
                max_tokens: 1024,
                temperature: 0.7,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error calling OpenAI API:", error.response?.data || error.message);
        throw new Error("Failed to get AI response. Please check your API key.");
    }
};
