import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';
import { 
  Award, BookOpen, PlayCircle, Trophy, 
  LogOut, Compass, Zap, CheckCircle, Shield, Cloud, Sparkles
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

// Dữ liệu đánh giá (Sáng tạo nội dung và Giải quyết vấn đề đang thấp)
const skillData = [
  { subject: 'Thông tin & Dữ liệu', A: 85 },
  { subject: 'Giao tiếp & Cộng tác', A: 70 },
  { subject: 'Sáng tạo nội dung', A: 45 }, // Cần gợi ý khóa học này
  { subject: 'An toàn bảo mật', A: 90 },
  { subject: 'Giải quyết vấn đề', A: 55 }, // Cần gợi ý khóa học này
];

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR CỐ ĐỊNH */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shrink-0">
        <div className="p-8 flex items-center gap-2">
          <img src={LOGO_URL} alt="NEXA" className="h-7 w-auto" />
          <span className="text-[#1e3a8a] font-black text-xl tracking-tighter">USER</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={<Compass size={18}/>} label="Lộ trình học tập" active />
          <SidebarItem icon={<BookOpen size={18}/>} label="Bài kiểm tra của tôi" />
          <SidebarItem icon={<Award size={18}/>} label="Chứng chỉ NFT" />
          <SidebarItem icon={<User size={18}/>} label="Hồ sơ cá nhân" />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="flex items-center gap-3 text-slate-400 hover:text-red-600 font-bold text-xs transition-all">
            <LogOut size={18} /> ĐĂNG XUẤT
          </button>
        </div>
      </aside>

      {/* 2. NỘI DUNG CHÍNH (Scrollable nội bộ) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md px-10 py-5 flex justify-between items-center border-b border-slate-100 shrink-0">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Chào mừng, Nguyễn Văn An! 👋</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Hôm nay là một ngày tuyệt vời để nâng cấp kỹ năng số.</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-1.5 pr-4 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-black">A</div>
            <div className="leading-tight">
              <p className="text-[10px] font-black text-[#1e3a8a] uppercase">Sinh viên</p>
              <p className="text-xs font-bold text-slate-700">ĐH Bách Khoa</p>
            </div>
          </div>
        </header>

        {/* Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* CỘT TRÁI: ĐÁNH GIÁ & GỢI Ý */}
            <div className="xl:col-span-2 space-y-8">
              
              {/* Banner Bài đánh giá */}
              <div className="bg-[#1e3a8a] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/10">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Sẵn sàng chinh phục Level 4?</h2>
                  <p className="text-blue-100/80 text-sm font-medium max-w-md">Bạn đã hoàn thành 80% lộ trình. Làm bài đánh giá ngay để nhận chứng chỉ năng lực số chuẩn EU.</p>
                  <button className="bg-white text-[#1e3a8a] font-black px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-all text-xs shadow-lg">
                    <PlayCircle size={18} /> BẮT ĐẦU ĐÁNH GIÁ NGAY
                  </button>
                </div>
                <Trophy size={140} className="absolute right-[-20px] bottom-[-20px] opacity-10 rotate-12" />
              </div>

              {/* Phân tích năng lực (Radar) */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">Phân tích năng lực (DigComp 2.2)</h3>
                  <span className="text-[10px] font-bold text-slate-400">CẬP NHẬT: 12/01/2026</span>
                </div>
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                      <Radar dataKey="A" stroke="#1e3a8a" strokeWidth={3} fill="#1e3a8a" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* MỤC MỚI: GỢI Ý TỪ MENTOR AI */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-blue-500" size={18} />
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">Gợi ý từ Mentor AI</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MentorCard 
                    icon={<Cloud className="text-blue-500" />} 
                    title="Quản lý Cloud" 
                    desc="Giảm rác thải số & tối ưu lưu trữ" 
                    label="Bảo mật cơ bản"
                  />
                  <MentorCard 
                    icon={<Shield className="text-orange-500" />} 
                    title="An toàn dữ liệu" 
                    desc="Bảo mật cốt lõi cho sinh viên" 
                    label="Kỹ năng ưu tiên"
                  />
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: TIẾN ĐỘ & CHỨNG CHỈ */}
            <div className="space-y-8">
              
              {/* ĐANG HỌC */}
              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-800">Đang học</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Xem tất cả</button>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500">
                      <Zap size={20} fill="currentColor" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-bold text-slate-700">Ứng dụng AI trong Office</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Bài 4: Tự động hóa Excel</p>
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-indigo-600">60%</span>
                        </div>
                        <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-slate-100">
                          <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CHỨNG CHỈ */}
              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-2">
                  <Award className="text-yellow-500" size={16} /> Chứng chỉ của tôi
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-[#1e3a8a] rounded-2xl text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Trophy size={20}/></div>
                    <div>
                      <p className="text-xs font-bold">Level 3 - Foundation</p>
                      <p className="text-[8px] opacity-60 font-bold uppercase mt-1">NFT #NX-00241 • ĐÃ XÁC MINH</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HUY HIỆU THÀNH TÍCH */}
              <div className="bg-indigo-600 p-6 rounded-[32px] text-white shadow-xl shadow-indigo-100">
                <h3 className="text-xs font-black uppercase tracking-widest mb-4">Huy hiệu thành tích</h3>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10"><Zap size={16} fill="currentColor" className="text-yellow-300"/></div>
                  ))}
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 text-[10px] font-black">+5</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a]' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon}
    <span className={`text-[11px] font-black uppercase tracking-tight ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const MentorCard = ({ icon, title, desc, label }) => (
  <div className="bg-white p-5 rounded-[24px] border border-slate-100 flex gap-4 hover:shadow-lg transition-all cursor-pointer group">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-slate-800">{title}</h4>
      <p className="text-[10px] text-slate-400 font-bold">{desc}</p>
      <span className="inline-block text-[9px] font-bold text-slate-300 uppercase mt-1">{label}</span>
    </div>
  </div>
);

export default UserDashboard;