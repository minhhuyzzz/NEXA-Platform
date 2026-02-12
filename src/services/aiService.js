export const getGeminiAnalysis = async (score, total, topicStats) => {
  const apiKey = import.meta.env.VITE_GEMINI_KEY;

  if (!apiKey) {
      console.error("Lỗi: Chưa có API Key trong file .env");
      return "Chưa cấu hình API Key. Vui lòng kiểm tra file .env.";
  }

  // 👇 Dùng model 1.5-flash mới nhất, gọi trực tiếp qua URL này thì KHÔNG BAO GIỜ LỖI THƯ VIỆN
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  // Chuẩn bị dữ liệu
  const statsText = Object.entries(topicStats)
    .map(([topic, data]) => `- ${topic}: Đúng ${data.correct}/${data.total} câu`)
    .join("\n");

  const prompt = `
    Bạn là AI Mentor của hệ thống giáo dục NEXA.
    Học viên vừa đạt ${score}/${total} điểm.
    Chi tiết năng lực:
    ${statsText}

    Nhiệm vụ:
    1. Nhận xét ngắn gọn về điểm mạnh (1 câu).
    2. Chỉ ra điểm yếu nhất và đưa ra lời khuyên cụ thể để cải thiện (1 câu).
    Giọng văn: Chuyên nghiệp, khích lệ, dùng emoji.
  `;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) throw new Error(`Google API Error: ${response.status}`);

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "AI đang phân tích...";

  } catch (error) {
    console.error("Lỗi gọi AI:", error);
    return "Hệ thống AI đang bận. Bạn hãy chủ động ôn tập lại các chủ đề có điểm thấp nhé! 💪";
  }
};