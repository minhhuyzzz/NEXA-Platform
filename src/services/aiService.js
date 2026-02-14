// src/services/aiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiAnalysis = async (score, total, topicStats) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Tạo prompt cho AI
    const prompt = `
      Tôi vừa làm bài kiểm tra năng lực số.
      Điểm số: ${score}/${total}.
      Chi tiết từng chủ đề: ${JSON.stringify(topicStats)}.
      
      Hãy đóng vai một chuyên gia giáo dục, đưa ra nhận xét ngắn gọn (dưới 100 từ) về điểm mạnh, điểm yếu và gợi ý lộ trình học tập phù hợp.
      Giọng văn khích lệ, chuyên nghiệp.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hệ thống AI đang bận, nhưng bạn đã làm rất tốt! Hãy tiếp tục rèn luyện nhé.";
  }
};