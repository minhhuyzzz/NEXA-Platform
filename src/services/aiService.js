import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export const getGeminiAnalysis = async (score, total, topicStats) => {
  try {
    // 👇 SỬA DÒNG NÀY: Đổi "gemini-pro" thành "gemini-1.5-flash"
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const statsText = Object.entries(topicStats)
      .map(([topic, data]) => `- ${topic}: Đúng ${data.correct}/${data.total} câu`)
      .join("\n");

    const prompt = `
      Bạn là AI Mentor của NEXA. Sinh viên vừa đạt ${score}/${total} điểm.
      Kết quả chi tiết:
      ${statsText}

      Hãy đưa ra 1 lời khen ngắn và 1 lời khuyên cụ thể để cải thiện chủ đề yếu nhất. 
      Văn phong: Thân thiện, ngắn gọn (dưới 50 từ), dùng emoji.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Lỗi Gemini:", error);
    return "AI đang bận, nhưng bạn hãy chú ý ôn tập lại các phần trả lời sai nhé! 💪";
  }
};