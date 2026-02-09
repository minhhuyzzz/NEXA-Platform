import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Bell, Search, Filter, ArrowUpRight, Zap, Leaf 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const colors = {
  primary: '#0EA5E9',       
  success: '#10B981',       
  warning: '#F59E0B',       
  textSub: '#64748B',
};

const chartData = [
  { month: 'T09', score: 400 }, { month: 'T10', score: 600 },
  { month: 'T11', score: 550 }, { month: 'T12', score: 800 },
  { month: 'T01', score: 750 }, { month: 'T02', score: 920 },
];

const OrgDashboard = () => {
  const navigate = useNavigate();
  
  // Lấy tên admin an toàn để tránh crash
  const [adminName, setAdminName] = useState("Admin Nexa");
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('nexa_user') || '{}');
    if (savedUser.fullName) setAdminName(savedUser.fullName);
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* SIDEBAR ĐẸP (Giữ nguyên style của bạn) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">N</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <MenuBtn active icon={<LayoutDashboard size={20}/>} label="Tổng quan" />
          <MenuBtn icon={<Users size={20}/>} label="Quản lý Nhân sự" onClick={() => navigate('/admin/users')} />
          <MenuBtn icon={<FileBarChart size={20}/>} label="Báo cáo ESG" />
          <MenuBtn icon={<Award size={20}/>} label="Chứng chỉ & NFT" />
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          <MenuBtn icon={<Settings size={20}/>} label="Cài đặt hệ thống" />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* NỘI DUNG CHÍNH (VỚI BIỂU ĐỒ GRADIENT) */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Tổng quan</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Hôm nay, 12:45 PM</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-[#3b66f5] transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-[1000] shadow-lg shadow-blue-900/20 uppercase">
              {adminName.charAt(0)}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="grid grid-cols-4 gap-6">
              <StatCard title="Tổng Nhân sự" value="1,240" trend="+12%" icon={<Users size={20} color="white"/>} bg={colors.primary} />
              <StatCard title="Điểm Số Hóa" value="850" trend="+5.4%" icon={<Zap size={20} color="white"/>} bg="#6366F1" />
              <StatCard title="Giảm thải CO2" value="12.5 Tấn" trend="+8%" icon={<Leaf size={20} color="white"/>} bg={colors.success} />
              <StatCard title="Chứng chỉ" value="342" trend="+22%" icon={<Award size={20} color="white"/>} bg={colors.warning} />
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Xu hướng Năng lực Số</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold uppercase border border-slate-100">
                    <Filter size={14} /> Lọc dữ liệu
                  </button>
                </div>
                
                {/* FIX LỖI TRẮNG TRANG: Sử dụng aspect ratio để Recharts luôn có kích thước */}
                <div className="w-full" style={{ minHeight: '300px' }}>
                  <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={colors.primary} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: colors.textSub, fontSize: 12, fontWeight: 'bold'}} dy={10} />
                      <YAxis hide />
                      <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                      <Area type="monotone" dataKey="score" stroke={colors.primary} strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col">
                <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800 mb-6">Top Học viên</h3>
                <div className="space-y-5 flex-1">
                  <UserRow name="Nguyễn Văn A" dept="Marketing" score="980" />
                  <UserRow name="Trần Thị B" dept="Kế toán" score="945" />
                  <UserRow name="Lê Hoàng C" dept="IT Dev" score="910" />
                  <UserRow name="Phạm Minh D" dept="HR" score="890" />
                </div>
                <div className="mt-6 p-5 bg-blue-50/50 rounded-3xl border border-blue-100">
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Mẹo Năng Suất</p>
                   <p className="text-[11px] font-bold text-slate-500 leading-relaxed">Hãy tổ chức kỳ thi chứng chỉ NFT tiếp theo vào cuối tháng này.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

/* --- Các Component con cực đẹp của bạn --- */
const MenuBtn = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${active ? 'bg-blue-50 text-[#3b66f5]' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon} <span className="tracking-tight">{label}</span>
  </button>
);

const StatCard = ({ title, value, trend, icon, bg }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
    <div style={{ backgroundColor: bg }} className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-[1000] text-slate-800 tracking-tighter">{value}</h3>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{title} <span className="text-green-500 ml-1">{trend}</span></p>
  </div>
);

const UserRow = ({ name, dept, score }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1e3a8a] font-black text-xs group-hover:bg-blue-100 transition-colors">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">{name}</p>
        <p className="text-[9px] text-slate-400 font-bold uppercase">{dept}</p>
      </div>
    </div>
    <span className="text-xs font-black text-[#3b66f5]">{score}</span>
  </div>
);

export default OrgDashboard;