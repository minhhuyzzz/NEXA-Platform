import React from 'react';
import { Users, Award, ArrowUpRight, Zap, Leaf, Filter } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const colors = { primary: '#2563EB', bg: '#EFF6FF' }; // Dùng màu xanh đậm hơn cho pro

const chartData = [
  { month: 'T9', score: 400 }, { month: 'T10', score: 600 },
  { month: 'T11', score: 550 }, { month: 'T12', score: 800 },
  { month: 'T1', score: 750 }, { month: 'T2', score: 920 },
];

const OrgDashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* 1. Page Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
         <div>
            <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">Tổng quan Tổ chức</h2>
            <p className="text-slate-500 font-medium mt-1">Theo dõi hiệu suất và chỉ số năng lực theo thời gian thực.</p>
         </div>
         <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <Filter size={14} /> Tuỳ chỉnh Widget
         </button>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Tổng Nhân sự" value="1,240" trend="+12%" icon={<Users size={20} color="white"/>} bg="#3B82F6" />
        <StatCard title="Điểm Số Hóa" value="850" trend="+5.4%" icon={<Zap size={20} color="white"/>} bg="#6366F1" />
        <StatCard title="Giảm thải CO2" value="12.5 Tấn" trend="+8%" icon={<Leaf size={20} color="white"/>} bg="#10B981" />
        <StatCard title="Chứng chỉ cấp" value="342" trend="+22%" icon={<Award size={20} color="white"/>} bg="#F59E0B" />
      </div>

      {/* 3. Charts & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Xu hướng Năng lực Số</h3>
            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Điểm trung bình</span>
            </div>
          </div>
          <div style={{ height: '320px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: '700'}} dy={10} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', fontWeight: 'bold' }} />
                <Area type="monotone" dataKey="score" stroke={colors.primary} strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Users List */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Top Xuất Sắc</h3>
            <button className="text-[10px] font-bold text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg transition-colors">Xem tất cả</button>
          </div>
          <div className="flex-1 space-y-5">
            <UserRow name="Nguyễn Văn A" dept="Marketing" score="980" rank={1} />
            <UserRow name="Trần Thị B" dept="Kế toán" score="945" rank={2} />
            <UserRow name="Lê Hoàng C" dept="IT Dev" score="910" rank={3} />
            <UserRow name="Phạm Minh D" dept="HR" score="890" rank={4} />
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Sub-Components (Styled for Pro Look) --- */
const StatCard = ({ title, value, trend, icon, bg }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default">
    <div className="flex justify-between items-start mb-4">
      <div style={{ backgroundColor: bg }} className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-md">
        {icon}
      </div>
      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
        <ArrowUpRight size={12} strokeWidth={3} /> {trend}
      </div>
    </div>
    <div>
      <h3 className="text-3xl font-[1000] text-slate-800 tracking-tighter">{value}</h3>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1">{title}</p>
    </div>
  </div>
);

const UserRow = ({ name, dept, score, rank }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm
        ${rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
          rank === 2 ? 'bg-slate-200 text-slate-600' : 
          rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-400'}`}>
        {rank}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{name}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase">{dept}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-black text-blue-600">{score}</p>
    </div>
  </div>
);

export default OrgDashboard;