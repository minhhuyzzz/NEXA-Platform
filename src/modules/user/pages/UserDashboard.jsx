import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { 
  Award, BookOpen, LogOut, Compass, Zap, Shield, Sparkles, 
  Pencil, Brain, Users, User, ArrowRight, LayoutDashboard // 👈 Thêm icon này
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

/* --- SUB-COMPONENTS --- */

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

const MentorCard = ({ icon, title, desc, label }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all border-b-4 border-b-blue-600 cursor-pointer group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <div className="space-y-1 text-left">
      <h4 className="text-sm font-[1000] uppercase tracking-tighter group-hover:text-blue-700 transition-colors">{title}</h4>
      <p className="text-[10px] text-slate-400 font-bold leading-tight">{desc}</p>
      <div className="flex items-center gap-1 mt-2 text-blue-600 font-[1000] uppercase text-[9px] group-hover:gap-2 transition-all">
        {label} <ArrowRight size={14} />
      </div>
    </div>
  </div>
);

/* --- MAIN COMPONENT --- */

const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Dùng để kiểm tra đang ở trang nào

  // 1. LẤY DỮ LIỆU ĐÃ LƯU
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Người dùng Nexa";
  const userOrg = savedData.university || "Đơn vị thành viên";

  // 2. LOGIC ĐĂNG XUẤT
  const handleLogout = () => {
    localStorage.removeItem('nexa_user'); 
    localStorage.removeItem('nexa_role'); 
    navigate('/login');
  };

  // Mock Data
  const skillData = [
    { subject: 'Thông tin & Dữ liệu', score: 85, fullMark: 100 },
    { subject: 'Giao tiếp & Cộng tác', score: 50, fullMark: 100 },
    { subject: 'Sáng tạo nội dung', score: 45, fullMark: 100 },
    { subject: 'An toàn bảo mật', score: 90, fullMark: 100 },
    { subject: 'Giải quyết vấn đề', score: 55, fullMark: 100 },
  ];

  const aiSuggestions = useMemo(() => {
    const getIcon = (subject) => {
      if (subject.includes('Sáng tạo')) return <Pencil className="text-orange-500" />;
      if (subject.includes('Giao tiếp')) return <Users className="text-green-500" />;
      if (subject.includes('Giải quyết')) return <Brain className="text-purple-500" />;
      return <Sparkles className="text-blue-500" />;
    };

    return skillData
      .filter(s => s.score < 60)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2)
      .map(s => ({ ...s, icon: getIcon(s.subject) }));
  }, [skillData]);

  // Kiểm tra đường dẫn hiện tại
  const currentPath = location.pathname;

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
        
        {/* LOGO */}
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 space-y-2 py-4">
          
          {/* 👇 MỤC 1: TỔNG QUAN (MỚI THÊM) */}
          <SidebarItem 
            // Nếu đang ở /user/dashboard thì sáng đèn
            active={currentPath === '/user/dashboard'} 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/user/dashboard')}
          />

          {/* MỤC 2: LỘ TRÌNH */}
          <SidebarItem 
            active={currentPath === '/user/learning'} 
            icon={<Compass size={20}/>} 
            label="Lộ trình học tập" 
            onClick={() => navigate('/user/learning')} // Chuyển sang trang lộ trình
          />

          {/* MỤC 3: BÀI KIỂM TRA */}
          <SidebarItem 
            active={currentPath === '/user/exams'}
            icon={<BookOpen size={20}/>} 
            label="Bài kiểm tra" 
            onClick={() => navigate('/user/exams')} 
          />

          {/* MỤC 4: CHỨNG CHỈ */}
          <SidebarItem 
            active={currentPath === '/user/nft'}
            icon={<Award size={20}/>} 
            label="Chứng chỉ NFT" 
            onClick={() => navigate('/user/nft')} 
          />

          {/* MỤC 5: HỒ SƠ */}
          <SidebarItem 
            active={currentPath === '/user/profile'}
            icon={<User size={20}/>} 
            label="Hồ sơ cá nhân" 
            onClick={() => navigate('/user/profile')} 
          />

        </nav>

        {/* ĐĂNG XUẤT */}
        <div className="p-6 border-t border-slate-50">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight uppercase">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center border-b border-slate-100 sticky top-0 z-10">
          <div className="text-left">
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Chào mừng, {userName}! 👋</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Học viên ưu tú • {userOrg}</p>
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

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* CỘT TRÁI (Biểu đồ + Gợi ý) */}
            <div className="xl:col-span-2 space-y-8 text-left">
              {/* Radar Chart */}
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[11px] font-[1000] uppercase tracking-[0.2em] text-slate-400">Phân tích năng lực (DigComp 2.2)</h3>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Cập nhật hôm nay</span>
                 </div>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                      <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 11, fontWeight: 'bold' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="My Skills" dataKey="score" stroke="#2563EB" strokeWidth={3} fill="#3B82F6" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Sparkles size={18} fill="currentColor" /></div>
                  <h3 className="text-sm font-[1000] uppercase tracking-wide text-slate-800">Gợi ý từ Mentor AI</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {aiSuggestions.map((item, index) => (
                    <MentorCard 
                        key={index} 
                        icon={item.icon} 
                        title={item.subject} 
                        desc={`Bạn đang thiếu hụt kỹ năng này (${item.score}/100đ). Cải thiện ngay!`} 
                        label="Bắt đầu học" 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (Khóa học đang học) */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8 h-full">
                <div className="flex justify-between items-center font-black uppercase text-[10px] border-b border-slate-50 pb-4">
                  <h3 className="tracking-widest text-slate-400">Tiến độ học tập</h3>
                  <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">60% Hoàn thành</span>
                </div>
                
                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                      <Zap size={24} fill="currentColor" />
                  </div>
                  <div className="flex-1 space-y-3 text-left">
                    <div>
                        <p className="text-sm font-[1000] uppercase tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors">Ứng dụng AI trong Office</p>
                        <p className="text-[10px] text-slate-400 font-bold mt-1">Chương 3: Prompt Engineering cơ bản</p>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 w-[60%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                 <div className="flex gap-4 items-start group cursor-pointer pt-4 border-t border-slate-50">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                      <Shield size={24} />
                  </div>
                  <div className="flex-1 space-y-3 text-left">
                    <div>
                        <p className="text-sm font-[1000] uppercase tracking-tight text-slate-800 group-hover:text-emerald-600 transition-colors">An toàn thông tin 101</p>
                        <p className="text-[10px] text-slate-400 font-bold mt-1">Chương 1: Mật khẩu mạnh</p>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[30%] rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;