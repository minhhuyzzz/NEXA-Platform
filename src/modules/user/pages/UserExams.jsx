import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, AlertCircle, Play, CheckCircle2 } from 'lucide-react';

// 👇 1. Import kết nối Supabase
import { supabase } from '../../../services/supabaseClient';

/* --- EXAM CARD COMPONENT --- */
const ExamCard = ({ title, subject, duration, questions, status, score, deadline, onStart }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
    
    {/* Icon & Info */}
    <div className="flex items-center gap-5 w-full md:w-auto">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 
        ${status === 'completed' ? 'bg-emerald-500 shadow-emerald-200' : status === 'open' || status === 'urgent' ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-300'}`}>
        {status === 'completed' ? <CheckCircle2 size={28} /> : <BookOpen size={28} />}
      </div>
      
      <div className="text-left">
        <h3 className="text-base font-[1000] text-slate-800 uppercase tracking-tight group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase mt-1 tracking-wide">{subject}</p>
        
        {/* Chips thông tin */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Clock size={12} /> {duration}
            </span>
            {deadline && (
              <span className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-lg border ${status === 'urgent' ? 'text-red-500 bg-red-50 border-red-100' : 'text-orange-500 bg-orange-50 border-orange-100'}`}>
                <AlertCircle size={12} /> Hạn: {deadline}
              </span>
            )}
        </div>
      </div>
    </div>

    {/* Action Button */}
    <div className="w-full md:w-auto flex justify-end">
      {status === 'completed' ? (
        <div className="text-right">
            <span className="block text-3xl font-[1000] text-emerald-500">{score || 0}/100</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Điểm số</span>
        </div>
      ) : (status === 'open' || status === 'urgent') ? (
        <button 
          onClick={onStart} 
          className="group/btn flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-2xl text-xs font-[1000] uppercase tracking-widest hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/30 transition-all active:scale-95"
        >
            Làm bài 
            <div className="bg-white/20 p-1 rounded-full group-hover/btn:bg-white/30 transition-colors">
              <Play size={12} fill="currentColor" className="ml-0.5"/>
            </div>
        </button>
      ) : (
        <span className="px-6 py-3 bg-slate-100 text-slate-400 rounded-2xl text-[10px] font-bold uppercase border border-slate-200 cursor-not-allowed">
          Chưa mở
        </span>
      )}
    </div>
  </div>
);

/* --- MAIN COMPONENT --- */
const UserExams = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👇 GỌI API LẤY DỮ LIỆU THẬT
  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);
        // Gọi bảng 'exams' từ Supabase
        const { data, error } = await supabase
          .from('exams')
          .select('*')
          .order('id', { ascending: true }); // Sắp xếp theo ID

        if (error) throw error;
        if (data) setExams(data);
      } catch (error) {
        console.error("Lỗi tải bài thi:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  // Phân loại bài thi để hiển thị ra từng mục
  const activeExams = exams.filter(e => e.status === 'open' || e.status === 'urgent');
  const historyExams = exams.filter(e => e.status === 'completed');
  const lockedExams = exams.filter(e => e.status === 'locked');

  return (
    // Không cần thẻ bao ngoài flex h-screen vì UserLayout đã lo rồi
    <div className="space-y-8">
       {/* Tiêu đề trang */}
       <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">Bài kiểm tra năng lực 📝</h2>
            <p className="text-slate-500 font-medium mt-1">Danh sách bài Quiz & Đánh giá được đồng bộ từ hệ thống.</p>
          </div>
       </div>

       {loading ? (
          // Hiệu ứng Loading
          <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
       ) : (
          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* SECTION 1: CẦN HOÀN THÀNH */}
            {activeExams.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-xs font-[1000] uppercase tracking-widest text-blue-600 flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div> Cần hoàn thành
                    </h3>
                    {activeExams.map(exam => (
                        <ExamCard 
                            key={exam.id}
                            title={exam.title} 
                            subject={exam.description} // Dùng cột description làm subject
                            duration={exam.duration} 
                            status={exam.status} 
                            deadline={exam.deadline}
                            onStart={() => navigate('/user/quiz-take')}
                        />
                    ))}
                </div>
            )}

            {/* SECTION 2: LỊCH SỬ */}
            {historyExams.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-slate-200">
                    <h3 className="text-xs font-[1000] uppercase tracking-widest text-emerald-600 flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Lịch sử làm bài
                    </h3>
                    {historyExams.map(exam => (
                        <ExamCard 
                            key={exam.id}
                            title={exam.title} 
                            subject={exam.description} 
                            duration={exam.duration} 
                            status={exam.status} 
                            score={85} // Tạm thời để cứng, sau này lấy từ bảng results
                        />
                    ))}
                </div>
            )}

             {/* SECTION 3: SẮP MỞ */}
             {lockedExams.length > 0 && (
                 <div className="space-y-6 pt-6 border-t border-slate-200 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-xs font-[1000] uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div> Sắp mở
                    </h3>
                    {lockedExams.map(exam => (
                        <ExamCard 
                            key={exam.id}
                            title={exam.title} 
                            subject={exam.description} 
                            duration={exam.duration} 
                            status={exam.status} 
                        />
                    ))}
                </div>
             )}

          </div>
       )}
    </div>
  );
};

export default UserExams;