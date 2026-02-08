import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Award, BookOpen, PlayCircle, Trophy, LogOut, Compass, Zap, CheckCircle, Shield, Cloud, Sparkles, Pencil, Brain, Users, User, ArrowRight } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const UserDashboard = () => {
  const navigate = useNavigate();

  // LẤY DỮ LIỆU ĐÃ LƯU TỪ REGISTER
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Người dùng Nexa";
  const userOrg = savedData.university || "Đơn vị thành viên";

  const skillData = [
    { subject: 'Thông tin & Dữ liệu', score: 85, icon: <Cloud className="text-blue-500" /> },
    { subject: 'Giao tiếp & Cộng tác', score: 50, icon: <Users className="text-green-500" /> },
    { subject: 'Sáng tạo nội dung', score: 45, icon: <Pencil className="text-orange-500" /> },
    { subject: 'An toàn bảo mật', score: 90, icon: <Shield className="text-red-500" /> },
    { subject: 'Giải quyết vấn đề', score: 55, icon: <Brain className="text-purple-500" /> },
  ];

  const aiSuggestions = useMemo(() => {
    return skillData.filter(s => s.score < 60).sort((a, b) => a.score - b.score).slice(0, 2);
  }, [skillData]);

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shrink-0">
        <div className="p-8 flex items-center gap-2">
          <img src={LOGO_URL} alt="NEXA" className="h-7 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-xl tracking-tighter italic">NEXA</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={<Compass size={18}/>} label="Lộ trình học tập" active />
          <SidebarItem icon={<BookOpen size={18}/>} label="Bài kiểm tra" />
          <SidebarItem icon={<Award size={18}/>} label="Chứng chỉ NFT" />
          <SidebarItem icon={<User size={18}/>} label="Hồ sơ" />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="flex items-center gap-3 text-slate-400 hover:text-red-600 font-[1000] text-[10px] tracking-widest uppercase">
            <LogOut size={18} /> Đăng xuất
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white px-10 py-6 flex justify-between items-center border-b border-slate-100">
          <div className="text-left">
            {/* HIỂN THỊ TÊN THỰC TẾ */}
            <h1 className="text-2xl font-[1000] tracking-tight uppercase">Chào mừng, {userName}! 👋</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Học viên ưu tú • {userOrg}</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-[1000]">
              {userName.charAt(0)}
            </div>
            <div className="leading-tight pr-4 text-left">
              <p className="text-[10px] font-[1000] text-[#1e3a8a] uppercase tracking-tighter">Sinh viên</p>
              <p className="text-xs font-bold text-slate-700 uppercase">{userOrg}</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div className="xl:col-span-2 space-y-10 text-left">
              <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative">
                <h3 className="text-[11px] font-[1000] uppercase tracking-[0.2em] mb-8">Phân tích năng lực (DigComp 2.2)</h3>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: '900' }} />
                      <Radar dataKey="score" stroke="#1e3a8a" strokeWidth={4} fill="#1e3a8a" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-blue-600" fill="currentColor" />
                  <h3 className="text-xs font-[1000] uppercase tracking-[0.2em]">Gợi ý từ Mentor AI</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {aiSuggestions.map((item, index) => (
                    <MentorCard key={index} icon={item.icon} title={item.subject} desc={`Bạn đang thiếu hụt kỹ năng này (${item.score}đ).`} label="Bắt đầu học" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
                <div className="flex justify-between items-center font-black uppercase text-[10px]">
                  <h3 className="tracking-widest">Đang học</h3>
                  <span className="text-blue-600">60%</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100"><Zap size={24} fill="currentColor" /></div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="text-sm font-[1000] uppercase tracking-tighter">Ứng dụng AI trong Office</p>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-600 w-[60%]"></div></div>
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

const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a]' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon}
    <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </div>
);

const MentorCard = ({ icon, title, desc, label }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex gap-5 hover:shadow-xl transition-all border-b-4 border-b-blue-600">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">{icon}</div>
    <div className="space-y-1 text-left">
      <h4 className="text-sm font-[1000] uppercase tracking-tighter">{title}</h4>
      <p className="text-[10px] text-slate-400 font-bold leading-tight">{desc}</p>
      <div className="flex items-center gap-1 mt-2 text-blue-600 font-[1000] uppercase text-[9px]">{label} <ArrowRight size={14} /></div>
    </div>
  </div>
);

export default UserDashboard;