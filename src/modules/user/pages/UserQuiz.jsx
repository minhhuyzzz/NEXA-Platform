import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronRight, ChevronLeft, AlertCircle, CheckCircle2, X, ListChecks } from 'lucide-react';
// Import kho câu hỏi
import { questionBank } from '../data/questions';

const UserQuiz = () => {
  const navigate = useNavigate();
  
  // State
  const [examQuestions, setExamQuestions] = useState([]); // Chứa bộ đề đã random
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 phút cho 20 câu
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- THUẬT TOÁN RANDOM ĐỀ THI ---
  useEffect(() => {
    // 1. Trộn ngẫu nhiên mảng câu hỏi (Fisher-Yates Shuffle hoặc sort random)
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    
    // 2. Lấy ra 20 câu đầu tiên
    const selected = shuffled.slice(0, 20);
    
    setExamQuestions(selected);
    setIsLoading(false);
  }, []);

  // Đồng hồ đếm ngược
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted && !isLoading) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit(true); // Tự động nộp khi hết giờ
    }
  }, [timeLeft, isSubmitted, isLoading]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  // --- CẬP NHẬT HÀM NỘP BÀI (QUAN TRỌNG) ---
  const handleSubmit = (autoSubmit = false) => {
    if (autoSubmit || window.confirm('Bạn có chắc chắn muốn nộp bài không?')) {
      setIsSubmitted(true);
      
      // Tính điểm
      let score = 0;
      examQuestions.forEach((q, index) => {
        if (answers[index] === q.correct) score++;
      });

      const passed = score >= (examQuestions.length / 2);

      // Chuyển sang trang kết quả sau 1.5s
      setTimeout(() => {
        navigate('/user/quiz-result', { 
            state: { 
                score: score, 
                totalQuestions: examQuestions.length,
                passed: passed,
                questions: examQuestions, // Gửi danh sách câu hỏi
                userAnswers: answers      // Gửi đáp án người dùng chọn
            } 
        });
      }, 1500);
    }
  };

  // Màn hình loading khi đang sinh đề
  if (isLoading) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-bold animate-pulse">Đang sinh đề ngẫu nhiên từ kho dữ liệu...</p>
        </div>
    );
  }

  const currentQ = examQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/user/exams')} className="p-2 hover:bg-slate-100 rounded-full transition">
                <X size={24} className="text-slate-500" />
             </button>
             <div>
                <h1 className="text-lg font-black uppercase text-slate-800">Kiểm tra Năng lực số</h1>
                <p className="text-xs text-slate-500 font-bold flex items-center gap-1">
                    <ListChecks size={12}/> Đề ngẫu nhiên • {examQuestions.length} câu
                </p>
             </div>
          </div>

          <div className="flex items-center gap-6">
             <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-lg ${timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-blue-50 text-blue-600'}`}>
                <Clock size={20} />
                {formatTime(timeLeft)}
             </div>
             
             {!isSubmitted && (
                 <button onClick={() => handleSubmit()} className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
                    Nộp bài thi
                 </button>
             )}
          </div>
        </div>
      </header>

      {/* BODY */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CỘT TRÁI: CÂU HỎI */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                    <span>Tiến độ</span>
                    <span>{Object.keys(answers).length}/{examQuestions.length} câu</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(Object.keys(answers).length / examQuestions.length) * 100}%` }}></div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm min-h-[400px] flex flex-col justify-center">
                <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-black uppercase">Câu {currentQuestion + 1}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Chủ đề: {currentQ.topic}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                    {currentQ.question}
                </h2>

                <div className="space-y-3">
                    {currentQ.options.map((option, index) => {
                        const isSelected = answers[currentQuestion] === index;
                        let optionClass = "border-slate-200 hover:border-blue-300 hover:bg-blue-50";
                        if (isSelected) optionClass = "border-blue-600 bg-blue-50 ring-1 ring-blue-600";
                        
                        if (isSubmitted) {
                            if (index === currentQ.correct) optionClass = "border-green-500 bg-green-50 ring-1 ring-green-500";
                            else if (isSelected) optionClass = "border-red-400 bg-red-50 ring-1 ring-red-400";
                            else optionClass = "border-slate-100 opacity-50";
                        }

                        return (
                            <div key={index} onClick={() => handleSelectOption(index)} className={`p-4 rounded-xl border-2 cursor-pointer transition-all font-medium text-slate-700 flex items-center justify-between ${optionClass}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${isSelected ? 'border-current' : 'border-slate-300 text-slate-400'}`}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    {option}
                                </div>
                                {isSubmitted && index === currentQ.correct && <CheckCircle2 size={20} className="text-green-600" />}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(c => c - 1)} className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 disabled:opacity-50">
                    <ChevronLeft size={18} /> Câu trước
                </button>
                <button disabled={currentQuestion === examQuestions.length - 1} onClick={() => setCurrentQuestion(c => c + 1)} className="px-6 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-blue-800 disabled:opacity-50 shadow-lg">
                    Câu tiếp <ChevronRight size={18} />
                </button>
            </div>
        </div>

        {/* CỘT PHẢI: NAVIGATOR */}
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
                <h3 className="text-sm font-black uppercase text-slate-800 mb-4">Danh sách câu hỏi</h3>
                <div className="grid grid-cols-5 gap-2">
                    {examQuestions.map((_, index) => {
                         const isAnswered = answers[index] !== undefined;
                         const isCurrent = currentQuestion === index;
                         let btnClass = isAnswered ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-400 border-slate-100";
                         if (isCurrent) btnClass = "ring-2 ring-blue-400 border-blue-600 text-blue-600 font-black";
                         
                         if (isSubmitted) {
                            if (answers[index] === examQuestions[index].correct) btnClass = "bg-green-500 text-white border-green-500";
                            else if (answers[index] !== undefined) btnClass = "bg-red-500 text-white border-red-500";
                         }

                         return (
                            <button key={index} onClick={() => setCurrentQuestion(index)} className={`h-10 w-10 rounded-lg border flex items-center justify-center text-sm font-bold transition-all ${btnClass}`}>
                                {index + 1}
                            </button>
                         )
                    })}
                </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <div className="flex items-start gap-3">
                    <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <p className="text-xs text-blue-800 font-medium leading-relaxed">
                        <span className="font-bold uppercase block mb-1">Cơ chế Random:</span>
                        Đề thi được sinh ngẫu nhiên từ kho dữ liệu. Mỗi lần thi là một đề khác nhau.
                    </p>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default UserQuiz;