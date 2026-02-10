import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, BookOpen, LogOut, Compass, User, Clock, CheckCircle2, AlertCircle, Play } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a] font-bold' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon} <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

const ExamCard = ({ title, subject, duration, questions, status, score, deadline }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group">
    <div className="flex items-center gap-5">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${status === 'completed' ? 'bg-green-500 shadow-green-200' : status === 'active' ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-300'}`}>
        {status === 'completed' ? <CheckCircle2 size={24} /> : <BookOpen size={24} />}
      </div>
      <div className="text-left">
        <h3 className="text-sm font-[1000] text-slate-800 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{subject} • {questions} câu hỏi</p>
        <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                <Clock size={12} /> {duration} phút
            </span>
            {deadline && <span className="text-[10px] text-red-400 font-bold">Hạn: {deadline}</span>}
        </div>
      </div>
    </div>

    <div className="text-right">
      {status === 'completed' ? (
        <div>
            <span className="block text-2xl font-[1000] text-green-600">{score}/100</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase">Điểm số</span>
        </div>
      ) : status === 'active' ? (
        <button 
  onClick={() => navigate('/user/quiz-take')} /* ✅ Đảm bảo dòng này đã có */
  className="px-5 py-2.5 bg-[#1e3a8a] text-white..."
>
  Làm bài <Play size={12} fill="currentColor"/>
</button>
      ) : (
        <span className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-bold uppercase border border-slate-100">Chưa mở</span>
      )}
    </div>
  </div>
);

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
          
          {/* Active tại đây */}
          <SidebarItem active icon={<BookOpen size={20}/>} label="Bài kiểm tra" />
          
          <SidebarItem icon={<Award size={20}/>} label="Chứng chỉ NFT" onClick={() => navigate('/user/nft')} />
          <SidebarItem icon={<User size={20}/>} label="Hồ sơ cá nhân" onClick={() => navigate('/user/profile')} />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm"><LogOut size={20} /> <span className="tracking-tight uppercase">Đăng xuất</span></button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 border-b border-slate-100 sticky top-0 z-10">
          <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Bài kiểm tra năng lực</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Danh sách bài Quiz & Đánh giá</p>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-blue-600 flex items-center gap-2">
                    <AlertCircle size={14} /> Cần hoàn thành
                </h3>
                <ExamCard title="Kiểm tra Giữa kỳ: Kỹ năng Số" subject="Module 1-3" duration={45} questions={30} status="active" deadline="15/10/2025" />
                <ExamCard title="Quiz: An toàn thông tin" subject="Module 2" duration={15} questions={10} status="active" deadline="Trong hôm nay" />
            </div>
            <div className="space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-slate-400">Lịch sử làm bài</h3>
                <ExamCard title="Đánh giá đầu vào (Placement Test)" subject="Tổng hợp" duration={60} questions={50} status="completed" score={85} />
                <ExamCard title="Quiz: Tư duy dữ liệu" subject="Module 1" duration={15} questions={10} status="completed" score={90} />
            </div>
             <div className="space-y-4 pt-6 border-t border-slate-100 opacity-60">
                <h3 className="text-xs font-[1000] uppercase tracking-widest text-slate-400">Sắp mở</h3>
                <ExamCard title="Kiểm tra Cuối kỳ" subject="Toàn khóa" duration={90} questions={60} status="locked" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserExams;