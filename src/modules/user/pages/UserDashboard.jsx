import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, ResponsiveContainer, Tooltip 
} from 'recharts';
import { 
  Award, BookOpen, PlayCircle, Trophy, 
  LogOut, User, Compass, Zap, CheckCircle 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

// Dữ liệu mẫu kỹ năng dựa trên DigComp 2.2
const skillData = [
  { subject: 'Thông tin & Dữ liệu', A: 85, fullMark: 100 },
  { subject: 'Giao tiếp & Cộng tác', A: 70, fullMark: 100 },
  { subject: 'Sáng tạo nội dung', A: 45, fullMark: 100 },
  { subject: 'An toàn bảo mật', A: 90, fullMark: 100 },
  { subject: 'Giải quyết vấn đề', A: 55, fullMark: 100 },
];

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-slate-900">
      
      {/* 1. SIDEBAR CHO USER (Gọn nhẹ hơn Admin) */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto" />
          <span className="text-[#1e3a8a] font-black text-xl tracking-tighter">USER</span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem icon={<Compass size={20}/>} label="Lộ trình học tập" active />
          <SidebarItem icon={<BookOpen size={20}/>} label="Bài kiểm tra của tôi" />
          <SidebarItem icon={<Award size={20}/>} label="Chứng chỉ NFT" />
          <SidebarItem icon={<User size={20}/>} label="Hồ sơ cá nhân" />
        </nav>

        <div className="p-6 border-t border-slate-100">
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 text-slate-400 hover:text-red-600 font-bold text-sm transition-all"
          >
            <LogOut size={20} /> Đăng xuất
          </button>
        </div>
      </aside>

      {/* 2. NỘI DUNG CHÍNH */}
      <main className="ml-64 flex-1 p-10">
        
        {/* Header lời chào */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Chào mừng, Nguyễn Văn An! 👋</h1>
            <p className="text-slate-500 font-medium">Hôm nay là một ngày tuyệt vời để nâng cấp kỹ năng số.</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-black text-lg">A</div>
            <div>
              <p className="text-xs font-black text-[#1e3a8a] uppercase tracking-widest">Sinh viên</p>
              <p className="text-sm font-bold">ĐH Bách Khoa</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* CỘT TRÁI: BIỂU ĐỒ & BÀI THI */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Banner kêu gọi hành động */}
            <div className="bg-[#1e3a8a] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h2 className="text-3xl font-black mb-4 uppercase tracking-tight leading-tight">Sẵn sàng chinh phục <br/> Level 4 - Intermediate?</h2>
                  <p className="text-blue-100/80 font-medium mb-8">Bạn đã hoàn thành 80% lộ trình. Làm bài đánh giá ngay để nhận chứng chỉ năng lực số chuẩn EU.</p>
                  <button className="bg-white text-[#1e3a8a] font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-black/10">
                    <PlayCircle /> BẮT ĐẦU ĐÁNH GIÁ NGAY
                  </button>
                </div>
                <div className="hidden md:block">
                    <Trophy size={160} className="opacity-20 text-white rotate-12" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full -mr-20 -mt-20 opacity-30 animate-pulse"></div>
            </div>

            {/* Phân tích kỹ năng hình nhện */}
            <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-black uppercase tracking-wider">Phân tích năng lực (DigComp 2.2)</h3>
                    <span className="bg-blue-50 text-[#1e3a8a] px-4 py-1.5 rounded-full text-[10px] font-black uppercase">Cập nhật: 12/01/2026</span>
                </div>
                <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'black' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                    />
                    <Radar
                        name="Điểm năng lực"
                        dataKey="A"
                        stroke="#1e3a8a"
                        strokeWidth={4}
                        fill="#1e3a8a"
                        fillOpacity={0.4}
                    />
                    </RadarChart>
                </ResponsiveContainer>
                </div>
            </div>
          </div>

          {/* CỘT PHẢI: THÀNH TỰU & CHỨNG CHỈ */}
          <div className="space-y-8">
            
            {/* Thẻ Chứng chỉ NFT */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-yellow-500" /> CHỨNG CHỈ CỦA TÔI
              </h3>
              <div className="space-y-4">
                <CertificateCard 
                  title="Level 3 - Foundation" 
                  date="Cấp ngày: 10/12/2025" 
                  id="NFT #NX-00241"
                />
                <div className="p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center space-y-2">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-400">
                        <Zap size={20} />
                    </div>
                    <p className="text-xs font-bold text-slate-400">Hoàn thành Level 4 để mở khóa chứng chỉ tiếp theo</p>
                </div>
              </div>
            </div>

            {/* Thẻ Huy hiệu */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-800 p-8 rounded-[40px] text-white shadow-xl shadow-blue-200">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-black text-lg leading-tight uppercase tracking-tight">Huy hiệu <br/> thành tích</h3>
                <Trophy size={24} className="text-yellow-400" />
              </div>
              <div className="flex flex-wrap gap-3">
                <BadgeItem />
                <BadgeItem />
                <BadgeItem />
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <span className="text-xs font-black">+5</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

/* --- Các Component phụ trợ --- */

const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-[#1e3a8a] shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon}
    <span className={`text-sm font-black ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const CertificateCard = ({ title, date, id }) => (
  <div className="p-5 bg-[#1e3a8a] text-white rounded-3xl flex items-center gap-4 group cursor-pointer hover:scale-[1.02] transition-all">
    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
      <Trophy size={28} />
    </div>
    <div>
      <p className="font-black text-sm tracking-tight">{title}</p>
      <p className="text-[10px] font-bold opacity-60 uppercase mt-1">{id}</p>
      <div className="flex items-center gap-1 mt-1">
        <CheckCircle size={10} className="text-green-400" />
        <span className="text-[9px] font-bold text-green-400">Đã xác minh</span>
      </div>
    </div>
  </div>
);

const BadgeItem = () => (
  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
    <Zap size={20} fill="currentColor" className="text-yellow-300" />
  </div>
);

export default UserDashboard;