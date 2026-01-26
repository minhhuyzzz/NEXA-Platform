// src/api/aiService.js
// Lưu ý: Key này bạn lấy miễn phí tại https://aistudio.google.com/
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY; 

export const analyzeSkillGap = async (userAnswers) => {
  const prompt = `Dựa trên kết quả bài test kỹ năng số: ${JSON.stringify(userAnswers)}. 
                  Hãy phân tích lỗ hổng kỹ năng và đề xuất 1 khóa học phù hợp từ danh sách: 
                  [Excel Pro, Digital Security, AI for Beginners]. 
                  Trả về kết quả ngắn gọn dưới 50 chữ.`;

  // Code gọi fetch tới Gemini API tại đây (sẽ chi tiết khi bạn có Key)
  console.log("AI đang suy nghĩ với Prompt:", prompt);
  return "Dựa trên bài test, bạn cần cải thiện bảo mật mạng. Đề xuất: Khóa học Digital Security.";
};