import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, BookOpen, LogOut, Compass, User, Clock, CheckCircle2, AlertCircle, Play, ArrowRight } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

/* --- 1. SIDEBAR ITEM --- */
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300
    ${active ? 'bg-blue-50 text-[#1e3a8a] font-bold shadow-sm translate-x-1' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
  >
    {icon} <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

/* --- 2. EXAM CARD (ĐÃ SỬA LẠI ĐẸP HƠN) --- */
const ExamCard = ({ title, subject, duration, questions, status, score, deadline, onStart }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
    
    {/* Icon & Info */}
    <div className="flex items-center gap-5 w-full md:w-auto">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 
        ${status === 'completed' ? 'bg-emerald-500 shadow-emerald-200' : status === 'active' ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-300'}`}>
        {status === 'completed' ? <CheckCircle2 size={28} /> : <BookOpen size={28} />}
      </div>
      
      <div className="text-left">
        <h3 className="text-base font-[1000] text-slate-800 uppercase tracking-tight group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase mt-1 tracking-wide">{subject} • {questions} câu hỏi</p>
        
        {/* Chips thông tin */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Clock size={12} /> {duration} phút
            </span>
            {deadline && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">
                <AlertCircle size={12} /> Hạn: {deadline}
              </span>
            )}
        </div>
      </div>
    </div>

    {/* Action Button (NÚT BẤM ĐÃ SỬA) */}
    <div className="w-full md:w-auto flex justify-end">
      {status === 'completed' ? (
        <div className="text-right">
            <span className="block text-3xl font-[1000] text-emerald-500">{score}/100</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Điểm số</span>
        </div>
      ) : status === 'active' ? (
        <button 
          onClick={onStart} /* ✅ Sự kiện click chuẩn */
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

/* --- 3. MAIN COMPONENT --- */
const UserExams = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 py-4">
          <SidebarItem icon={<Compass size={20}/>} label="Lộ trình học tập" onClick={() => navigate('/user/dashboard')} />
          
          {/* Active Button */}
          <SidebarItem active icon={<BookOpen size={20}/>} label="Bài kiểm tra" />
          
          <SidebarItem icon={<Award size={20}/>} label="Chứng chỉ NFT" onClick={() => navigate('/user/nft')} />
          <SidebarItem icon={<User size={20}/>} label="Hồ sơ cá nhân" onClick={() => navigate('/user/profile')} />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight uppercase">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 border-b border-slate-100 sticky top-0 z-10">
          <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Bài kiểm tra năng lực</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Danh sách bài Quiz & Đánh giá</p>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* SECTION 1: CẦN HOÀN THÀNH */}
            <div className="space-y-6">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-blue-600 flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div> Cần hoàn thành
                </h3>
                
                {/* Bài thi 1 */}
                <ExamCard 
                  title="Kiểm tra Giữa kỳ: Kỹ năng Số" 
                  subject="Module 1-3" 
                  duration={45} 
                  questions={20} 
                  status="active" 
                  deadline="15/10/2025" 
                  onStart={() => navigate('/user/quiz-take')} /* ✅ Link chuẩn */
                />

                {/* Bài thi 2 */}
                <ExamCard 
                  title="Quiz: An toàn thông tin" 
                  subject="Module 2" 
                  duration={15} 
                  questions={10} 
                  status="active" 
                  deadline="Trong hôm nay" 
                  onStart={() => navigate('/user/quiz-take')} /* ✅ Link chuẩn */
                />
            </div>

            {/* SECTION 2: LỊCH SỬ */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Lịch sử làm bài
                </h3>
                
                <ExamCard title="Đánh giá đầu vào (Placement Test)" subject="Tổng hợp" duration={60} questions={50} status="completed" score={85} />
                <ExamCard title="Quiz: Tư duy dữ liệu" subject="Module 1" duration={15} questions={10} status="completed" score={90} />
            </div>

             {/* SECTION 3: SẮP MỞ */}
             <div className="space-y-6 pt-6 border-t border-slate-100 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 bg-slate-400 rounded-full"></div> Sắp mở
                </h3>
                <ExamCard title="Kiểm tra Cuối kỳ" subject="Toàn khóa" duration={90} questions={60} status="locked" />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default UserExams;