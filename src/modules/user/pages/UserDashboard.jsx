import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';
import { 
  Award, BookOpen, PlayCircle, Trophy, 
  LogOut, Compass, Zap, CheckCircle, Shield, Cloud, Sparkles, Pencil, Brain, Users,
  User // <--- ĐÃ THÊM ICON NÀY ĐỂ HẾT LỖI
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Dữ liệu đánh giá (DigComp 2.2)
  const skillData = [
    { subject: 'Thông tin & Dữ liệu', score: 85, icon: <Cloud className="text-blue-500" /> },
    { subject: 'Giao tiếp & Cộng tác', score: 50, icon: <Users className="text-green-500" /> },
    { subject: 'Sáng tạo nội dung', score: 45, icon: <Pencil className="text-orange-500" /> },
    { subject: 'An toàn bảo mật', score: 90, icon: <Shield className="text-red-500" /> },
    { subject: 'Giải quyết vấn đề', score: 55, icon: <Brain className="text-purple-500" /> },
  ];

  // Logic Mentor AI: Gợi ý các kỹ năng có điểm < 60
  const aiSuggestions = useMemo(() => {
    return skillData
      .filter(s => s.score < 60)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2);
  }, [skillData]);

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR */}
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
          <button onClick={() => navigate('/login')} className="flex items-center gap-3 text-slate-400 hover:text-red-600 font-bold text-[10px] tracking-widest transition-all uppercase">
            <LogOut size={18} /> Đăng xuất
          </button>
        </div>
      </aside>

      {/* 2. NỘI DUNG CHÍNH */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md px-10 py-5 flex justify-between items-center border-b border-slate-100 shrink-0">
          <div>
            <h1 className="text-2xl font-black tracking-tight uppercase">Nguyễn Văn An 👋</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Học viên ưu tú • Level 3</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-black text-sm">A</div>
            <div className="leading-tight pr-4 text-left">
              <p className="text-[10px] font-black text-[#1e3a8a] uppercase">Sinh viên</p>
              <p className="text-xs font-bold text-slate-700 uppercase">ĐH Bách Khoa</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10">
            
            {/* CỘT TRÁI: BIỂU ĐỒ & AI */}
            <div className="xl:col-span-2 space-y-10">
              <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-[11px] font-[1000] uppercase tracking-[0.2em] text-slate-800">Phân tích năng lực (DigComp 2.2)</h3>
                  <span className="text-[10px] font-black text-slate-300 uppercase">Cập nhật: 12/01/2026</span>
                </div>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: '900' }} />
                      <Radar dataKey="score" stroke="#1e3a8a" strokeWidth={4} fill="#1e3a8a" fillOpacity={0.4} />
                      <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', fontWeight: '900', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* GỢI Ý MENTOR AI */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-blue-600" fill="currentColor" />
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-800">Gợi ý lộ trình từ Mentor AI</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {aiSuggestions.map((item, index) => (
                    <MentorCard 
                      key={index}
                      icon={item.icon}
                      title={item.subject}
                      desc={`Bạn đang thiếu hụt kỹ năng này (${item.score}đ). AI đề xuất khóa học bổ trợ ngay.`}
                      label="Bắt đầu học"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: TIẾN ĐỘ & CHỨNG CHỈ */}
            <div className="space-y-10">
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-800">Đang học</h3>
                  <span className="text-[10px] font-black text-blue-600">60%</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-black text-slate-800">Ứng dụng AI trong Office</p>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[60%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e3a8a] p-8 rounded-[40px] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <Trophy className="text-yellow-400 mb-2" size={32} />
                  <h3 className="font-black text-lg uppercase leading-tight">Chứng chỉ <br/> Level 3 Foundation</h3>
                  <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20">
                    <CheckCircle size={12} className="text-green-400" />
                    <span className="text-[9px] font-black uppercase tracking-tighter">Đã xác minh NFT</span>
                  </div>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-white/5 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */
const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a]' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon}
    <span className={`text-[10px] font-black uppercase tracking-widest ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const MentorCard = ({ icon, title, desc, label }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex gap-5 hover:shadow-xl transition-all cursor-pointer group border-b-4 border-b-blue-600">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <div className="space-y-1 text-left">
      <h4 className="text-sm font-black text-slate-800 uppercase tracking-tighter">{title}</h4>
      <p className="text-[10px] text-slate-400 font-bold leading-tight">{desc}</p>
      <div className="flex items-center gap-1 mt-2 text-blue-600">
        <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        <ArrowRight size={12} />
      </div>
    </div>
  </div>
);

export default UserDashboard;