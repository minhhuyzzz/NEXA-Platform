import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Leaf, 
  TrendingUp, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Award,
  Zap
} from 'lucide-react';

const OrgDashboard = () => {
  // Màu chủ đạo từ App mẫu
  const colors = {
    primary: '#0EA5E9', // Xanh dương sáng (Digital Blue)
    primaryLight: '#E0F2FE', // Nền xanh nhạt cho nút Active
    success: '#10B981', // Xanh lá (Eco Green)
    successLight: '#D1FAE5',
    textDark: '#1E293B',
    textGray: '#64748B',
    background: '#F1F5F9'
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, sans-serif", backgroundColor: colors.background }}>
      
      {/* 1. SIDEBAR - Thanh điều hướng */}
      <aside style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: '2px 0 5px rgba(0,0,0,0.02)' }}>
        {/* Logo Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', paddingLeft: '8px' }}>
          <div style={{ width: '40px', height: '40px', background: `linear-gradient(135deg, ${colors.primary}, #2563EB)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.4)' }}>
            N
          </div>
          <div>
            <span style={{ fontSize: '20px', fontWeight: '800', color: colors.textDark, display: 'block', lineHeight: '1' }}>NEXA</span>
            <span style={{ fontSize: '12px', color: colors.textGray, fontWeight: '500' }}>Admin Portal</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <MenuItem icon={<LayoutDashboard size={20} />} label="Tổng quan" active colors={colors} />
          <MenuItem icon={<Users size={20} />} label="Nhân sự & Học viên" colors={colors} />
          <MenuItem icon={<Leaf size={20} />} label="Tác động Xanh (ESG)" colors={colors} />
          <MenuItem icon={<Award size={20} />} label="Chứng chỉ số" colors={colors} />
          <MenuItem icon={<Settings size={20} />} label="Cài đặt hệ thống" colors={colors} />
        </nav>

        {/* Footer Sidebar */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '12px', marginBottom: '15px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: colors.primaryLight, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary, fontWeight: 'bold' }}>DB</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: 0, color: colors.textDark }}>Admin User</p>
              <p style={{ fontSize: '12px', color: colors.textGray, margin: 0 }}>admin@nexa.com</p>
            </div>
          </div>
          <MenuItem icon={<LogOut size={20} />} label="Đăng xuất" color="#EF4444" colors={colors} />
        </div>
      </aside>

      {/* 2. MAIN CONTENT - Nội dung chính */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        
        {/* Header Section */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: colors.textDark, margin: 0, letterSpacing: '-0.5px' }}>Dashboard Quản trị</h1>
            <p style={{ color: colors.textGray, marginTop: '8px', fontSize: '15px' }}>
              Theo dõi năng lực số và chỉ số ESG theo thời gian thực.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
             <IconButton icon={<Search size={20} color={colors.textGray} />} />
             <IconButton icon={<Bell size={20} color={colors.textGray} />} />
          </div>
        </header>

        {/* Stats Grid - Thẻ chỉ số theo phong cách App */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          
          {/* Card 1: Digital Competence (Màu Xanh Dương) */}
          <StatCard 
            title="Năng lực Số Trung bình" 
            value="850/1000" 
            sub="Mức độ: Chuyên gia số"
            icon={<Zap size={24} color="white" />}
            bgIcon={`linear-gradient(135deg, ${colors.primary}, #2563EB)`}
            trend="+12% tháng này"
            trendColor={colors.primary}
            trendBg={colors.primaryLight}
          />

          {/* Card 2: Green Impact (Màu Xanh Lá) */}
          <StatCard 
            title="Tác động Xanh tích lũy" 
            value="12.5 kg" 
            sub="CO2 đã giảm thiểu"
            icon={<Leaf size={24} color="white" />}
            bgIcon={`linear-gradient(135deg, ${colors.success}, #059669)`}
            trend="Đạt chuẩn A+"
            trendColor={colors.success}
            trendBg={colors.successLight}
          />

           {/* Card 3: Total Users */}
           <StatCard 
            title="Tổng nhân sự tham gia" 
            value="1,240" 
            sub="Đang active: 98%"
            icon={<Users size={24} color="white" />}
            bgIcon="linear-gradient(135deg, #F59E0B, #D97706)"
            trend="+5 nhân sự mới"
            trendColor="#D97706"
            trendBg="#FEF3C7"
          />
        </div>

        {/* Chart Area Placeholder */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', height: '400px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.textDark }}>Biểu đồ Lộ trình Số Xanh (Green Path)</h3>
            <button style={{ padding: '8px 16px', backgroundColor: colors.primaryLight, color: colors.primary, border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
              Tải báo cáo
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%', color: colors.textGray, backgroundColor: '#F8FAFC', borderRadius: '12px', border: '2px dashed #e2e8f0' }}>
            [Vị trí hiển thị Biểu đồ Recharts - Sẽ tích hợp ở bước sau]
          </div>
        </div>

      </main>
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const MenuItem = ({ icon, label, active, color, colors }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '14px', 
    padding: '12px 16px', 
    borderRadius: '12px', 
    cursor: 'pointer',
    backgroundColor: active ? colors.primaryLight : 'transparent',
    color: color || (active ? colors.primary : colors.textGray),
    transition: 'all 0.2s ease',
    fontWeight: active ? '700' : '500'
  }}>
    {icon}
    <span style={{ fontSize: '15px' }}>{label}</span>
  </div>
);

const IconButton = ({ icon }) => (
  <button style={{ 
    width: '44px', 
    height: '44px', 
    borderRadius: '12px', 
    border: '1px solid #e2e8f0', 
    backgroundColor: 'white', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  }}>
    {icon}
  </button>
);

const StatCard = ({ title, value, sub, icon, bgIcon, trend, trendColor, trendBg }) => (
  <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'transform 0.2s' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div style={{ width: '48px', height: '48px', background: bgIcon, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        {icon}
      </div>
      <span style={{ fontSize: '12px', color: trendColor, backgroundColor: trendBg, padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>
        {trend}
      </span>
    </div>
    <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#1E293B', margin: '0 0 4px 0', letterSpacing: '-1px' }}>{value}</h3>
    <p style={{ color: '#64748B', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>{title}</p>
    <p style={{ color: '#94A3B8', fontSize: '13px' }}>{sub}</p>
  </div>
);

export default OrgDashboard;