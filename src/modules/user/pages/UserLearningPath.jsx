import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BookOpen, CheckCircle2, Lock, ChevronRight, Star, 
  Trophy, PlayCircle, Compass, Award, User, LogOut, LayoutDashboard 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const LEARNING_PATH = [
  {
    id: 1,
    level: "Cơ bản (Foundation)",
    description: "Xây dựng nền tảng tư duy số và an toàn thông tin.",
    status: "completed", 
    courses: [
      { title: "Nhập môn Kỹ năng số", duration: "2h 30m", progress: 100 },
      { title: "An toàn thông tin 101", duration: "1h 45m", progress: 100 }
    ]
  },
  {
    id: 2,
    level: "Trung cấp (Intermediate)",
    description: "Áp dụng công nghệ vào công việc văn phòng và xử lý dữ liệu.",
    status: "current",
    courses: [
      { title: "Excel & Google Sheets nâng cao", duration: "4h 15m", progress: 45 },
      { title: "Kỹ năng Giao tiếp & Cộng tác số", duration: "3h 00m", progress: 0 }
    ]
  },
  {
    id: 3,
    level: "Nâng cao (Advanced)",
    description: "Sáng tạo nội dung số và giải quyết vấn đề phức tạp.",
    status: "locked",
    courses: [
      { title: "Tư duy thiết kế & Sáng tạo Content", duration: "5h 30m", progress: 0 },
      { title: "Phân tích dữ liệu với AI", duration: "6h 00m", progress: 0 }
    ]
  }
];

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 group
    ${active 
      ? 'bg-blue-50 text-[#1e3a8a] shadow-sm translate-x-1 font-bold' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

const UserLearningPath = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy dữ liệu user
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Người dùng Nexa";
  const userOrg = savedData.university || "Đơn vị thành viên";

  const handleLogout = () => {
    localStorage.removeItem('nexa_user'); 
    localStorage.removeItem('nexa_role'); 
    navigate('/login');
  };

  const currentPath = location.pathname;

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR (MENU TRÁI) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          <SidebarItem 
            active={currentPath === '/user/dashboard'} 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/user/dashboard')}
          />
          <SidebarItem 
            active={currentPath === '/user/learning'} 
            icon={<Compass size={20}/>} 
            label="Lộ trình học tập" 
            onClick={() => navigate('/user/learning')} 
          />
          <SidebarItem 
            active={currentPath === '/user/exams'}
            icon={<BookOpen size={20}/>} 
            label="Bài kiểm tra" 
            onClick={() => navigate('/user/exams')} 
          />
          <SidebarItem 
            active={currentPath === '/user/nft'}
            icon={<Award size={20}/>} 
            label="Chứng chỉ NFT" 
            onClick={() => navigate('/user/nft')} 
          />
          <SidebarItem 
            active={currentPath === '/user/profile'}
            icon={<User size={20}/>} 
            label="Hồ sơ cá nhân" 
            onClick={() => navigate('/user/profile')} 
          />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight uppercase">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT (NỘI DUNG CHÍNH) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center border-b border-slate-100 sticky top-0 z-10">
          <div className="text-left">
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Lộ trình học tập 🚀</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Cá nhân hóa theo năng lực của bạn</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 pr-6 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-[1000] shadow-md shadow-blue-900/20">
              {userName.charAt(0)}
            </div>
            <div className="leading-tight text-left">
              <p className="text-[10px] font-[1000] text-[#1e3a8a] uppercase tracking-tighter">Sinh viên</p>
              <p className="text-xs font-bold text-slate-700 uppercase">{userOrg}</p>
            </div>
          </div>
        </header>

        {/* TIMELINE CONTENT */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-slate-200 ml-4 md:ml-6 space-y-12">
              
              {LEARNING_PATH.map((stage) => {
                const isCompleted = stage.status === 'completed';
                const isCurrent = stage.status === 'current';
                const isLocked = stage.status === 'locked';

                return (
                  <div key={stage.id} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[14px] top-0 w-6 h-6 rounded-full border-4 z-10 bg-white
                      ${isCompleted ? 'border-green-500' : isCurrent ? 'border-indigo-600 animate-pulse' : 'border-slate-300'}
                    `}></div>

                    {/* Content Card */}
                    <div className={`rounded-[24px] p-6 border transition-all duration-300
                      ${isCurrent ? 'bg-white shadow-xl border-indigo-100 scale-[1.02]' : 'bg-white border-slate-100 shadow-sm opacity-90'}
                      ${isLocked ? 'opacity-60 grayscale' : ''}
                    `}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className={`text-xl font-bold flex items-center gap-2 ${isCurrent ? 'text-indigo-700' : 'text-slate-800'}`}>
                            {stage.level}
                            {isCompleted && <CheckCircle2 size={20} className="text-green-500"/>}
                            {isCurrent && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Đang học</span>}
                            {isLocked && <Lock size={18} className="text-slate-400"/>}
                          </h2>
                          <p className="text-slate-500 text-sm mt-1">{stage.description}</p>
                        </div>
                      </div>

                      {/* Course List inside Stage */}
                      <div className="space-y-3">
                        {stage.courses.map((course, idx) => (
                          <div key={idx} className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition cursor-pointer">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${isLocked ? 'bg-slate-200' : 'bg-white shadow-sm text-indigo-600'}`}>
                                 {course.progress === 100 ? <Trophy size={20} className="text-yellow-500"/> : <PlayCircle size={20}/>}
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-800 text-sm">{course.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                  <BookOpen size={12}/> {course.duration}
                                </div>
                              </div>
                            </div>

                            <div className="w-24 text-right">
                              <span className="text-xs font-bold text-slate-600">{course.progress}%</span>
                              <div className="h-1.5 w-full bg-slate-200 rounded-full mt-1">
                                <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {isCurrent && (
                        <button className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                           Tiếp tục học ngay <ChevronRight size={18}/>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final Goal */}
            <div className="relative border-l-4 border-dashed border-slate-200 ml-4 md:ml-6 pb-12 pt-8 pl-12">
               <div className="absolute -left-[26px] top-8 w-12 h-12 bg-yellow-100 border-4 border-white shadow-md rounded-full flex items-center justify-center text-yellow-600">
                  <Star size={24} fill="currentColor"/>
               </div>
               <h3 className="text-lg font-bold text-slate-400">Chứng chỉ Digital Master đang chờ bạn!</h3>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default UserLearningPath;