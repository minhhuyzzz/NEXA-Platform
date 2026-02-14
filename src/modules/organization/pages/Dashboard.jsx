import React, { useEffect, useState } from 'react';
import { Users, Award, ArrowUpRight, Zap, Leaf, Filter } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 👇 1. IMPORT SUPABASE
import { supabase } from '../../../services/supabaseClient';

const colors = { primary: '#2563EB', bg: '#EFF6FF' };

/* --- Sub-Components --- */
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
  <div className="flex items-center justify-between group cursor-pointer border-b border-slate-50 last:border-0 pb-3 last:pb-0">
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

/* --- MAIN COMPONENT --- */
const OrgDashboard = () => {
  // State chứa dữ liệu thật
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCO2: 0,
    totalTests: 0,
    avgScore: 0
  });
  const [loading, setLoading] = useState(true);

  // 👇 2. GỌI API LẤY SỐ LIỆU TỪ DB
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // 1. Đếm tổng User (Role = learner)
        const { count: userCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'learner');

        // 2. Tính tổng CO2 (Từ bảng green_logs)
        const { data: greenData } = await supabase
          .from('green_logs')
          .select('co2_saved');
        const totalCO2 = greenData?.reduce((sum, item) => sum + (item.co2_saved || 0), 0) || 0;

        // 3. Đếm số bài thi & Tính điểm trung bình (Từ bảng test_results)
        const { data: testData } = await supabase
          .from('test_results')
          .select('skill_score');
        
        const testCount = testData?.length || 0;
        
        // Tính điểm trung bình (Giả sử skill_score lưu dạng { total: 15, max: 20 })
        let totalScoreSum = 0;
        testData?.forEach(t => {
            // Lấy điểm tổng của từng bài
            if (t.skill_score && t.skill_score.total) {
                totalScoreSum += (t.skill_score.total / t.skill_score.max) * 100; // Quy ra thang 100
            }
        });
        const avg = testCount > 0 ? Math.round(totalScoreSum / testCount) : 0;

        setStats({
          totalUsers: userCount || 0,
          totalCO2: totalCO2.toFixed(1),
          totalTests: testCount,
          avgScore: avg
        });

      } catch (error) {
        console.error("Lỗi Dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Mock Data biểu đồ (Giữ nguyên để giao diện đẹp vì chưa có lịch sử dài)
  const chartData = [
    { month: 'T9', score: 400 }, { month: 'T10', score: 600 },
    { month: 'T11', score: 550 }, { month: 'T12', score: 800 },
    { month: 'T1', score: 750 }, { month: 'T2', score: 920 },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      
      {/* 1. Page Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
         <div>
            <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">Tổng quan Tổ chức 📊</h2>
            <p className="text-slate-500 font-medium mt-1">Dữ liệu thời gian thực từ hệ thống NEXA.</p>
         </div>
         <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <Filter size={14} /> Tuỳ chỉnh Widget
         </button>
      </div>

      {/* 2. Stats Grid (HIỂN THỊ DỮ LIỆU THẬT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard 
            title="Tổng số người" 
            value={loading ? "..." : stats.totalUsers} 
            trend="+12%" 
            icon={<Users size={20} color="white"/>} 
            bg="#3B82F6" 
        />
        <StatCard 
            title="Điểm trung bình" 
            value={loading ? "..." : stats.avgScore} 
            trend="+5.4%" 
            icon={<Zap size={20} color="white"/>} 
            bg="#6366F1" 
        />
        <StatCard 
            title="Giảm thải CO2 (kg)" 
            value={loading ? "..." : stats.totalCO2} 
            trend="+8%" 
            icon={<Leaf size={20} color="white"/>} 
            bg="#10B981" 
        />
        <StatCard 
            title="Bài thi hoàn thành" 
            value={loading ? "..." : stats.totalTests} 
            trend="+22%" 
            icon={<Award size={20} color="white"/>} 
            bg="#F59E0B" 
        />
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

        {/* Top Users List (Tạm thời Mock, có thể nâng cấp sau) */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-[1000] uppercase tracking-wider text-slate-800">Top Xuất Sắc</h3>
            <button className="text-[10px] font-bold text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg transition-colors">Xem tất cả</button>
          </div>
          <div className="flex-1 space-y-5 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
            <UserRow name="Nguyễn Văn A" dept="CNTT" score="98/100" rank={1} />
            <UserRow name="Trần Thị B" dept="Kế toán" score="94/100" rank={2} />
            <UserRow name="Lê Hoàng C" dept="Marketing" score="91/100" rank={3} />
            <UserRow name="Phạm Minh D" dept="QTKD" score="89/100" rank={4} />
            <UserRow name="Vũ Thị E" dept="Ngôn ngữ Anh" score="88/100" rank={5} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrgDashboard;