import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Bell, Search, Filter, ArrowUpRight, Zap, Leaf 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const colors = {
  primary: '#0EA5E9',       
  success: '#10B981',       
  textSub: '#64748B',
};

const chartData = [
  { month: 'T09', score: 400 }, { month: 'T10', score: 600 },
  { month: 'T11', score: 550 }, { month: 'T12', score: 800 },
  { month: 'T01', score: 750 }, { month: 'T02', score: 920 },
];

const OrgDashboard = () => {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const adminName = savedUser.fullName || "Trần Minh Huy";

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* 1. SIDEBAR TÍCH HỢP (FIX LỖI LINK) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl">N</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <button onClick={() => navigate('/admin')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm bg-blue-50 text-[#3b66f5]">
            <LayoutDashboard size={20}/> <span className="tracking-tight">Tổng quan</span>
          </button>
          <button onClick={() => navigate('/admin/users')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
            <Users size={20}/> <span className="tracking-tight">Quản lý Nhân sự</span>
          </button>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
            <FileBarChart size={20}/> <span className="tracking-tight">Báo cáo ESG</span>
          </button>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
            <Award size={20}/> <span className="tracking-tight">Chứng chỉ & NFT</span>
          </button>
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* 2. NỘI DUNG CHÍNH */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Tổng quan</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1 italic">Chào, {adminName}!</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-black">{adminName.charAt(0)}</div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-4 gap-6">
              <StatCard title="Nhân sự" value="1,240" trend="+12%" icon={<Users size={20} color="white"/>} bg={colors.primary} />
              <StatCard title="Điểm" value="850" trend="+5.4%" icon={<Zap size={20} color="white"/>} bg="#6366F1" />
              <StatCard title="CO2" value="12.5 T" trend="+8%" icon={<Leaf size={20} color="white"/>} bg={colors.success} />
              <StatCard title="NFT" value="342" trend="+22%" icon={<Award size={20} color="white"/>} bg="#F59E0B" />
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <h3 className="text-sm font-[1000] uppercase mb-8">Năng lực Số</h3>
                {/* SỬA LỖI QUAN TRỌNG: Đặt height cố định 300 thay vì 100% */}
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: colors.textSub, fontSize: 12, fontWeight: 'bold'}} />
                      <YAxis hide />
                      <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                      <Area type="monotone" dataKey="score" stroke={colors.primary} strokeWidth={3} fill={colors.primary} fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <h3 className="text-sm font-[1000] uppercase mb-6">Top Học viên</h3>
                <div className="space-y-4">
                  <UserRow name="Nguyễn Văn A" dept="Marketing" score="980" />
                  <UserRow name="Trần Thị B" dept="Kế toán" score="945" />
                  <UserRow name="Lê Hoàng C" dept="IT Dev" score="910" />
                  <UserRow name="Phạm Minh D" dept="HR" score="890" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon, bg }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm text-left">
    <div style={{ backgroundColor: bg }} className="w-10 h-10 rounded-xl flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-[1000] text-slate-800 tracking-tight">{value}</h3>
    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{title} ({trend})</p>
  </div>
);

const UserRow = ({ name, dept, score }) => (
  <div className="flex items-center justify-between p-3 border-b border-slate-50 last:border-0 text-left">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs">{name.charAt(0)}</div>
      <div>
        <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">{name}</p>
        <p className="text-[9px] text-slate-400 font-bold uppercase">{dept}</p>
      </div>
    </div>
    <span className="text-xs font-black text-blue-600">{score}</span>
  </div>
);

export default OrgDashboard;