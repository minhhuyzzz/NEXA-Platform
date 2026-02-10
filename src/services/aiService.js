import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Khởi tạo Gemini với Key của bạn
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export const getGeminiAnalysis = async (score, total, topicStats) => {
  try {
    // 2. Chọn model (Gemini Pro là bản tốt nhất cho text)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 3. Chuẩn bị dữ liệu để gửi cho AI
    // Chuyển object thống kê thành chuỗi dễ đọc
    const statsText = Object.entries(topicStats)
      .map(([topic, data]) => `- ${topic}: Đúng ${data.correct}/${data.total} câu (${data.rate}%)`)
      .join("\n");

    // 4. Viết câu lệnh (Prompt) cho AI
    const prompt = `
      Bạn là một cố vấn học tập AI thông minh của hệ thống NEXA. 
      Một sinh viên vừa hoàn thành bài kiểm tra năng lực số với kết quả:
      - Tổng điểm: ${score}/${total}
      - Chi tiết từng chủ đề:
      ${statsText}

      Hãy phân tích ngắn gọn (tối đa 3 câu) và đưa ra lời khuyên cụ thể để cải thiện chủ đề yếu nhất.
      Giọng văn: Thân thiện, khích lệ, chuyên nghiệp (như một người thầy).
      Không cần chào hỏi, đi thẳng vào nhận xét.
    `;

    // 5. Gửi yêu cầu và chờ kết quả
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Lỗi gọi Gemini:", error);
    return "AI đang bận, nhưng dựa trên kết quả, bạn nên ôn tập lại các kiến thức cơ bản về An toàn thông tin và Dữ liệu.";
  }
};