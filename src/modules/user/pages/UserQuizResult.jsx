import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Trophy, XCircle, RefreshCcw, Home, Award, 
  Brain, Sparkles, BookOpen, AlertCircle 
} from 'lucide-react';
// Import dịch vụ AI
import { getGeminiAnalysis } from '../../../services/aiService';

const UserQuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 1. LẤY DỮ LIỆU AN TOÀN (Chống crash khi F5)
  const state = location.state || {};
  const { score = 0, totalQuestions = 0, passed = false, questions = [], userAnswers = {} } = state;

  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysis, setAnalysis] = useState(null);
  const [hasError, setHasError] = useState(false); // Biến kiểm tra lỗi

  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  // --- LOGIC CHÍNH ---
  useEffect(() => {
    // 🔴 KIỂM TRA QUAN TRỌNG: Nếu không có câu hỏi (do F5), dừng ngay lập tức
    if (!questions || questions.length === 0) {
        setHasError(true);
        setIsAnalyzing(false); // Tắt loading ngay
        return;
    }

    const runAnalysis = async () => {
        try {
            // A. Tính toán thống kê tại máy (Local)
            const topicStats = {};
            questions.forEach((q, index) => {
                const topic = q.topic || "Tổng hợp";
                if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0 };
                
                topicStats[topic].total += 1;
                if (userAnswers[index] === q.correct) {
                    topicStats[topic].correct += 1;
                }
            });

            // Tính %
            Object.keys(topicStats).forEach(topic => {
                const rate = (topicStats[topic].correct / topicStats[topic].total) * 100;
                topicStats[topic].rate = Math.round(rate);
            });

            // B. GỌI GEMINI AI THẬT (Key miễn phí)
            const aiAdvice = await getGeminiAnalysis(score, totalQuestions, topicStats);

            setAnalysis({ 
                topicStats, 
                suggestion: aiAdvice 
            });
        } catch (err) {
            console.error("Lỗi phân tích:", err);
            // Nếu AI lỗi, vẫn hiện kết quả nhưng báo câu mặc định
            setAnalysis({ 
                topicStats: {}, 
                suggestion: "AI đang bận, nhưng bạn hãy chú ý ôn tập lại các câu làm sai nhé!" 
            });
        } finally {
            setIsAnalyzing(false); // ✅ QUAN TRỌNG: Luôn tắt loading dù thành công hay thất bại
        }
    };

    runAnalysis();
  }, [questions, score, totalQuestions, userAnswers]);

  // --- GIAO DIỆN LỖI (KHI F5 TRANG) ---
  if (hasError) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center p-6 font-sans">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <AlertCircle size={48} className="text-red-500"/>
              </div>
              <h2 className="text-3xl font-[1000] text-slate-800 mb-3">Dữ liệu không tìm thấy</h2>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                  Có vẻ bạn đã tải lại trang (F5). Dữ liệu bài thi tạm thời đã bị xóa để bảo mật.
              </p>
              <button 
                onClick={() => navigate('/user/exams')} 
                className="px-8 py-4 bg-[#1e3a8a] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                  Quay về danh sách bài thi
              </button>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-12">
      
      {/* HEADER BACKGROUND */}
      <div className="h-64 w-full bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-40 relative z-10">
        
        {/* CARD KẾT QUẢ CHÍNH */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 mb-8">
            <div className="p-8 md:p-12 text-center">
                <div className={`mx-auto w-28 h-28 rounded-full flex items-center justify-center shadow-xl mb-6 ring-8 ${passed ? 'bg-green-50 ring-green-100' : 'bg-red-50 ring-red-100'}`}>
                    {passed ? (
                        <Trophy size={56} className="text-green-600 fill-green-600 animate-bounce" />
                    ) : (
                        <XCircle size={56} className="text-red-500" />
                    )}
                </div>

                <h1 className="text-4xl font-[1000] text-slate-900 mb-3 tracking-tight">
                    {passed ? 'Xuất sắc! Bạn đã vượt qua' : 'Rất tiếc, chưa đạt yêu cầu'}
                </h1>
                
                {/* Grid điểm số */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Điểm số</div>
                        <div className={`text-4xl font-[1000] ${passed ? 'text-green-600' : 'text-red-500'}`}>{score * 10}</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Chính xác</div>
                        <div className="text-4xl font-[1000] text-slate-800">{score}/{totalQuestions}</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Tỷ lệ</div>
                        <div className="text-4xl font-[1000] text-blue-600">{percentage}%</div>
                    </div>
                </div>
            </div>
        </div>

        {/* PHẦN AI PHÂN TÍCH */}
        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Cột trái: AI Insight */}
            <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[60px] opacity-50"></div>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg">
                            <Sparkles size={24} />
                        </div>
                        <h2 className="text-xl font-[1000] text-slate-800 uppercase tracking-tight">Gemini AI Đánh giá</h2>
                    </div>

                    {isAnalyzing ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4">
                            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-slate-500 font-bold animate-pulse">Đang kết nối Gemini AI...</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Lời khuyên từ GEMINI */}
                            <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100">
                                <div className="flex gap-4">
                                    <Brain className="text-blue-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2">Nhận xét từ AI Mentor:</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed font-medium italic">
                                            "{analysis?.suggestion}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Chi tiết từng chủ đề */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Năng lực thành phần</h3>
                                {analysis && analysis.topicStats && Object.keys(analysis.topicStats).map((topic, index) => {
                                    const stats = analysis.topicStats[topic];
                                    const color = stats.rate >= 80 ? 'bg-green-500' : stats.rate >= 50 ? 'bg-yellow-500' : 'bg-red-500';
                                    return (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold text-slate-700">
                                                <span>{topic}</span>
                                                <span>{stats.rate}%</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${stats.rate}%` }}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Cột phải: Hành động */}
            <div className="space-y-6">
                {passed ? (
                    <button onClick={() => navigate('/user/nft')} className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                        <Award size={24} /> Nhận NFT Badge
                    </button>
                ) : (
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-lg text-center">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Cần cải thiện</h3>
                        <p className="text-xs text-slate-500 mb-4">Dựa trên kết quả, bạn nên ôn tập lại kiến thức.</p>
                        <button onClick={() => navigate('/user/learning')} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-700 transition">
                            Đến khoá học
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => navigate('/user/quiz-take')} className="py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition flex flex-col items-center gap-2">
                        <RefreshCcw size={20} /> Làm lại
                    </button>
                    <button onClick={() => navigate('/user/dashboard')} className="py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition flex flex-col items-center gap-2">
                        <Home size={20} /> Trang chủ
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default UserQuizResult;