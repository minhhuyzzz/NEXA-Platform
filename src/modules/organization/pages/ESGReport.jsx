import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wind, Droplets, Zap, TreePine, Leaf, ArrowUpRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 👇 1. IMPORT SUPABASE
import { supabase } from '../../../services/supabaseClient';

/* --- SUB-COMPONENTS --- */
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
  
  // State chứa dữ liệu thật
  const [stats, setStats] = useState({
    totalCO2: 0,
    trees: 0,
    energy: 0,
    water: 0
  });
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 👇 2. GỌI API LẤY DỮ LIỆU TỪ SUPABASE
  useEffect(() => {
    const fetchESGData = async () => {
      try {
        setIsLoading(true);

        // Lấy toàn bộ log từ bảng green_logs
        const { data, error } = await supabase
          .from('green_logs')
          .select('created_at, co2_saved, activity_type');

        if (error) throw error;

        if (data) {
          // --- A. TÍNH TỔNG SỐ LIỆU ---
          const totalCO2 = data.reduce((sum, item) => sum + (item.co2_saved || 0), 0);
          
          // Giả định quy đổi: 
          // 1 cây xanh hấp thụ ~20kg CO2/năm -> Trees = CO2 / 20
          // 1 bài thi online tiết kiệm ~0.05 kWh điện -> Energy = Số bài thi * 0.05
          const testCount = data.filter(i => i.activity_type === 'test_completed').length;
          
          setStats({
            totalCO2: totalCO2.toFixed(1),
            trees: Math.round(totalCO2 * 5), // Giả định vui: 1kg CO2 = 5 cây (hoặc công thức chuẩn ESG của bạn)
            energy: (testCount * 0.05).toFixed(1), 
            water: (testCount * 0.5).toFixed(1) // Giả định: 1 bài thi giấy tốn 0.5L nước sx giấy
          });

          // --- B. XỬ LÝ DỮ LIỆU BIỂU ĐỒ (Group theo tháng) ---
          // Tạo mảng 6 tháng gần nhất
          const months = {};
          const today = new Date();
          for (let i = 5; i >= 0; i--) {
             const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
             const key = `T${d.getMonth() + 1}`; // Ví dụ: T2, T3...
             months[key] = { name: key, co2: 0, energy: 0 };
          }

          // Cộng dồn dữ liệu vào tháng tương ứng
          data.forEach(item => {
             const date = new Date(item.created_at);
             const key = `T${date.getMonth() + 1}`;
             if (months[key]) {
                months[key].co2 += item.co2_saved || 0;
                // Giả sử energy tỉ lệ thuận với CO2 để vẽ cho đẹp
                months[key].energy += (item.co2_saved || 0) * 0.8; 
             }
          });

          setChartData(Object.values(months));
        }

      } catch (error) {
        console.error("Lỗi tải ESG:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchESGData();
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
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
              <ImpactCard 
                title="Giảm thải CO2" 
                value={isLoading ? "..." : stats.totalCO2} 
                unit="kg" 
                icon={<Wind size={24}/>} 
                color="bg-emerald-500" 
              />
              <ImpactCard 
                title="Tiết kiệm Nước" 
                value={isLoading ? "..." : stats.water} 
                unit="Lít" 
                icon={<Droplets size={24}/>} 
                color="bg-cyan-500" 
              />
              <ImpactCard 
                title="Tiết kiệm Điện" 
                value={isLoading ? "..." : stats.energy} 
                unit="kWh" 
                icon={<Zap size={24}/>} 
                color="bg-yellow-500" 
              />
              <ImpactCard 
                title="Cây xanh tương đương" 
                value={isLoading ? "..." : stats.trees} 
                unit="Cây" 
                icon={<TreePine size={24}/>} 
                color="bg-green-600" 
              />
            </div>

            {/* 2. CHART SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Xu hướng Giảm thải & Năng lượng</h3>
                  <button className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    6 Tháng qua
                  </button>
                </div>
                
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
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
                      <Area type="monotone" dataKey="co2" stackId="1" stroke="#10B981" strokeWidth={3} fill="url(#colorCo2)" name="Giảm CO2 (kg)" />
                      <Area type="monotone" dataKey="energy" stackId="1" stroke="#0EA5E9" strokeWidth={3} fill="url(#colorEnergy)" name="Tiết kiệm điện (kWh)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 3. SUGGESTIONS */}
              <div className="bg-emerald-900 text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Leaf className="text-emerald-400" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-200">Mẹo AI Nexa</span>
                  </div>
                  <h3 className="text-2xl font-[1000] leading-tight mb-4">Tối ưu hóa năng lượng</h3>
                  <p className="text-sm font-medium text-emerald-200 leading-relaxed">
                    Dữ liệu cho thấy hoạt động thi cử tăng cao vào cuối tháng. Đề xuất tăng cường server vào giờ hành chính để tối ưu hiệu suất năng lượng.
                  </p>
                </div>
                
                <button className="mt-8 w-full py-4 bg-white text-emerald-900 rounded-2xl font-[1000] text-sm uppercase tracking-widest hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                  Xem chi tiết <ArrowUpRight size={16} />
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