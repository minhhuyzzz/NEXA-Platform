import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, BookOpen, LogOut, Compass, User, PlayCircle, Lock } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a] font-bold' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon} <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

const CourseCard = ({ title, module, progress, status, color }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden">
    <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150`}></div>
    
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
        {status === 'locked' ? <Lock size={20} /> : <PlayCircle size={20} fill="currentColor" />}
      </div>
      <span className={`px-3 py-1 rounded-full text-[9px] font-[1000] uppercase tracking-widest ${status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-500'}`}>
        {status === 'completed' ? 'Hoàn thành' : status === 'locked' ? 'Chưa mở' : 'Đang học'}
      </span>
    </div>

    <h3 className="text-lg font-[1000] text-slate-800 leading-tight mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-6">{module}</p>

    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-[1000] uppercase text-slate-400">
        <span>Tiến độ</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div style={{ width: `${progress}%` }} className={`h-full rounded-full transition-all duration-1000 ${progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}></div>
      </div>
    </div>
  </div>
);

const UserLearningPath = () => {
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
          
          {/* Active ở đây vì đây là trang con của Lộ trình */}
          <SidebarItem active icon={<Compass size={20}/>} label="Lộ trình học tập" onClick={() => navigate('/user/dashboard')} />
          
          <SidebarItem icon={<BookOpen size={20}/>} label="Bài kiểm tra" onClick={() => navigate('/user/exams')} />
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
          <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Lộ trình Năng lực Số</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Hành trình chinh phục chứng chỉ NEXA</p>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-[1000] uppercase tracking-widest text-slate-400 mb-6">Học kỳ 1: Kiến thức nền tảng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              <CourseCard title="Tư duy Số & Dữ liệu" module="Module 01" progress={100} status="completed" color="bg-green-500" />
              <CourseCard title="An toàn thông tin cơ bản" module="Module 02" progress={100} status="completed" color="bg-green-500" />
              <CourseCard title="Công cụ làm việc nhóm" module="Module 03" progress={100} status="completed" color="bg-green-500" />
            </div>

            <h2 className="text-sm font-[1000] uppercase tracking-widest text-slate-400 mb-6">Học kỳ 2: Ứng dụng AI (Hiện tại)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              <CourseCard title="Tổng quan về Generative AI" module="Module 04" progress={60} status="active" color="bg-blue-600" />
              <CourseCard title="Kỹ thuật Prompt Engineering" module="Module 05" progress={30} status="active" color="bg-indigo-500" />
              <CourseCard title="AI trong Phân tích Dữ liệu" module="Module 06" progress={0} status="locked" color="bg-slate-400" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserLearningPath;