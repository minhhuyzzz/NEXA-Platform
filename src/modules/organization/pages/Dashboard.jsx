import React from 'react';
import { 
  Users, Zap, Leaf, Award, 
  Search, Bell, Filter, ArrowUpRight 
} from 'lucide-react';
// Import thư viện biểu đồ
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

// 1. IMPORT SIDEBAR CHÍNH CHỦ (ĐỂ MENU HOẠT ĐỘNG)
import OrgSidebar from '../components/OrgSidebar'; 

const colors = {
  primary: '#0EA5E9',       
  primaryLight: '#E0F2FE',  
  success: '#10B981',       
  successLight: '#D1FAE5',
  warning: '#F59E0B',       
  warningLight: '#FEF3C7',
  textMain: '#0F172A',
  textSub: '#64748B',
  bg: '#F8FAFC',
  white: '#FFFFFF',
  border: '#E2E8F0'
};

const chartData = [
  { month: 'T09', score: 400 },
  { month: 'T10', score: 600 },
  { month: 'T11', score: 550 },
  { month: 'T12', score: 800 },
  { month: 'T01', score: 750 },
  { month: 'T02', score: 920 },
];

const OrgDashboard = () => {
  return (
    // Sử dụng Flex container chuẩn Tailwind giống trang Users để đồng bộ layout
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* 2. THAY THẾ ASIDE CŨ BẰNG COMPONENT NÀY */}
      <OrgSidebar />

      {/* 3. NỘI DUNG CHÍNH */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header Bar */}
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Tổng quan Tổ chức</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Cập nhật lần cuối: Hôm nay, 12:45 PM</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Tìm kiếm..." className="pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none font-bold text-sm w-64" />
            </div>
            <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-[#3b66f5] hover:bg-blue-50 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-[1000] shadow-lg shadow-blue-900/20">AD</div>
          </div>
        </header>

        {/* Nội dung cuộn được */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <StatCard title="Tổng Nhân sự" value="1,240" trend="+12%" icon={<Users size={20} color="white"/>} bg={colors.primary} />
              <StatCard title="Điểm Số Hóa" value="850" trend="+5.4%" icon={<Zap size={20} color="white"/>} bg="#6366F1" />
              <StatCard title="Giảm thải CO2" value="12.5 Tấn" trend="+8%" icon={<Leaf size={20} color="white"/>} bg={colors.success} />
              <StatCard title="Chứng chỉ cấp" value="342" trend="+22%" icon={<Award size={20} color="white"/>} bg={colors.warning} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Cột Trái: Biểu đồ thực tế */}
              <div className="lg:col-span-2 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Xu hướng Năng lực Số</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold uppercase hover:bg-slate-100 border border-slate-100">
                    <Filter size={14} /> Lọc theo tháng
                  </button>
                </div>
                
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={colors.primary} stopOpacity={0.2}/>
                          <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: colors.textSub, fontSize: 12, fontWeight: 'bold'}}
                        dy={10}
                      />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke={colors.primary} 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorScore)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Cột Phải: Danh sách xếp hạng */}
              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Top Học viên Xuất sắc</h3>
                  <button className="text-[10px] font-bold text-blue-600 hover:underline">Xem tất cả</button>
                </div>
                
                <div className="space-y-4">
                  <UserRow name="Nguyễn Văn A" dept="Marketing" score="980" />
                  <UserRow name="Trần Thị B" dept="Kế toán" score="945" />
                  <UserRow name="Lê Hoàng C" dept="IT Dev" score="910" />
                  <UserRow name="Phạm Minh D" dept="HR" score="890" />
                  <UserRow name="Hoàng Anh E" dept="Sales" score="885" />
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf size={14} className="text-green-600" />
                    <span className="text-[10px] font-[1000] text-green-700 uppercase">Mẹo ESG</span>
                  </div>
                  <p className="text-[10px] font-medium text-green-800 leading-relaxed">
                    Phòng Marketing đang dẫn đầu về giảm thiểu giấy in. Hãy khen thưởng để khích lệ!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- Sub-Components (Đã chuyển sang Tailwind cho đồng bộ) --- */

const StatCard = ({ title, value, trend, icon, bg }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div style={{ backgroundColor: bg }} className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
        {icon}
      </div>
      <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
        <ArrowUpRight size={12} /> {trend}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-[1000] text-slate-800 tracking-tight">{value}</h3>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1">{title}</p>
    </div>
  </div>
);

const UserRow = ({ name, dept, score }) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border-b border-slate-50 last:border-0">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-[1000] text-xs">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-xs font-[1000] text-slate-800">{name}</p>
        <p className="text-[10px] text-slate-400 font-medium">{dept}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-xs font-[1000] text-blue-600">{score}</p>
      <p className="text-[8px] text-slate-400 font-bold uppercase">điểm</p>
    </div>
  </div>
);

export default OrgDashboard;