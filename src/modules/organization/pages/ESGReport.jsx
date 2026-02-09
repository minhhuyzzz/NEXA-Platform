import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Search, Leaf, Wind, Droplets, Zap, TreePine, ArrowUpRight 
} from 'lucide-react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/* --- SUB-COMPONENTS (An toàn & Tái sử dụng) --- */

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group
    ${active 
      ? 'bg-emerald-50 text-emerald-600 shadow-sm translate-x-1' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
  </button>
);

const ImpactCard = ({ title, value, unit, icon, color }) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color} text-white shadow-md group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-3xl font-[1000] text-slate-800 tracking-tighter">{value}</h3>
        <span className="text-xs font-bold text-slate-500 uppercase">{unit}</span>
      </div>
    </div>
  </div>
);

/* --- MAIN COMPONENT --- */

const ESGReport = () => {
  const navigate = useNavigate();
  
  // Dữ liệu biểu đồ (Mock Data)
  const data = [
    { name: 'T1', co2: 40, energy: 24 },
    { name: 'T2', co2: 30, energy: 18 },
    { name: 'T3', co2: 20, energy: 15 }, // Giảm dần
    { name: 'T4', co2: 27, energy: 20 },
    { name: 'T5', co2: 18, energy: 12 },
    { name: 'T6', co2: 10, energy: 8 },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* SIDEBAR (Style Xanh Ngọc) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-200">E</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA ESG</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {/* SỬA LỖI NAVIGATE Ở ĐÂY */}
          <SidebarItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/admin')} 
          />
          <SidebarItem 
            icon={<Users size={20}/>} 
            label="Quản lý Nhân sự" 
            onClick={() => navigate('/admin/users')} 
          />
          <SidebarItem 
            active 
            icon={<FileBarChart size={20}/>} 
            label="Báo cáo ESG" 
            // Trang hiện tại không cần onClick
          />
          <SidebarItem 
            icon={<Award size={20}/>} 
            label="Chứng chỉ & NFT" 
            onClick={() => navigate('/admin/nft')} 
          />
          
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          <SidebarItem icon={<Settings size={20}/>} label="Cài đặt hệ thống" />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Báo cáo Phát triển Bền vững</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Theo dõi chỉ số Môi trường & Xã hội</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Hệ thống đang hoạt động tốt</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* 1. IMPACT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactCard title="Giảm thải CO2" value="12.5" unit="Tấn" icon={<Wind size={24}/>} color="bg-emerald-500" />
              <ImpactCard title="Tiết kiệm Nước" value="450" unit="m³" icon={<Droplets size={24}/>} color="bg-cyan-500" />
              <ImpactCard title="Năng lượng Xanh" value="85" unit="%" icon={<Zap size={24}/>} color="bg-yellow-500" />
              <ImpactCard title="Cây xanh tương đương" value="342" unit="Cây" icon={<TreePine size={24}/>} color="bg-green-600" />
            </div>

            {/* 2. CHART SECTION (FIXED HEIGHT 300px) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Xu hướng Giảm thải & Năng lượng</h3>
                  <button className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    6 Tháng qua
                  </button>
                </div>
                
                {/* QUAN TRỌNG: Height cố định 300px để tránh lỗi trắng màn hình */}
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} dy={10} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="co2" stackId="1" stroke="#10B981" strokeWidth={3} fill="url(#colorCo2)" name="Giảm CO2 (Tấn)" />
                      <Area type="monotone" dataKey="energy" stackId="1" stroke="#0EA5E9" strokeWidth={3} fill="url(#colorEnergy)" name="Tiết kiệm điện (kWh)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 3. SUGGESTIONS */}
              <div className="bg-emerald-900 text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden flex flex-col justify-between">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Leaf className="text-emerald-400" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-200">Mẹo AI Nexa</span>
                  </div>
                  <h3 className="text-2xl font-[1000] leading-tight mb-4">Tối ưu hóa năng lượng máy chủ</h3>
                  <p className="text-sm font-medium text-emerald-200 leading-relaxed">
                    Hệ thống phát hiện máy chủ hoạt động thấp điểm vào 2:00 AM. Đề xuất chuyển sang chế độ Eco-Mode để tiết kiệm 15% điện năng.
                  </p>
                </div>
                
                <button className="mt-8 w-full py-4 bg-white text-emerald-900 rounded-2xl font-[1000] text-sm uppercase tracking-widest hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                  Kích hoạt ngay <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ESGReport;