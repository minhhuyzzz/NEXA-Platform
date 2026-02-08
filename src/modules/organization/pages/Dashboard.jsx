import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Leaf, 
  TrendingUp, 
  Settings, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';

const OrgDashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6' }}>
      
      {/* 1. SIDEBAR (Thanh bên trái) */}
      <aside style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e5e7eb', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingLeft: '10px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#059669', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>N</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>NEXA Admin</span>
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1 }}>
          <MenuItem icon={<LayoutDashboard size={20} />} label="Tổng quan" active />
          <MenuItem icon={<Users size={20} />} label="Nhân sự & Đào tạo" />
          <MenuItem icon={<Leaf size={20} />} label="Báo cáo ESG" />
          <MenuItem icon={<TrendingUp size={20} />} label="Năng lực số" />
          <MenuItem icon={<Settings size={20} />} label="Cài đặt tổ chức" />
        </nav>

        {/* Footer Sidebar */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
          <MenuItem icon={<LogOut size={20} />} label="Đăng xuất" color="#ef4444" />
        </div>
      </aside>

      {/* 2. MAIN CONTENT (Nội dung chính) */}
      <main style={{ flex: 1, padding: '30px' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Dashboard Quản trị</h1>
            <p style={{ color: '#6b7280', marginTop: '5px' }}>Chào mừng quay lại, Công ty Công nghệ Xanh!</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
             <button style={{ padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: 'white', cursor: 'pointer', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}><Search size={20} color="#6b7280" /></button>
             <button style={{ padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: 'white', cursor: 'pointer', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}><Bell size={20} color="#6b7280" /></button>
          </div>
        </header>

        {/* Stats Grid (Các thẻ chỉ số) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <StatCard title="Tổng Nhân sự" value="1,240" change="+12% tháng này" icon={<Users color="#2563eb" />} />
          <StatCard title="Điểm Tín chỉ Xanh" value="85/100" change="Đạt chuẩn A+" icon={<Leaf color="#059669" />} />
          <StatCard title="Năng lực Số" value="Trung bình" change="Cần cải thiện AI" icon={<TrendingUp color="#d97706" />} />
        </div>

        {/* Chart Section Placeholder (Chỗ để biểu đồ) */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e5e7eb', height: '300px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Tiến độ Chuyển đổi Số & ESG (2025-2026)</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%', color: '#9ca3af', border: '2px dashed #e5e7eb', borderRadius: '8px' }}>
            [Khu vực hiển thị Biểu đồ Recharts sẽ nằm ở đây]
          </div>
        </div>

      </main>
    </div>
  );
};

// Component phụ để render Menu Item cho gọn
const MenuItem = ({ icon, label, active, color }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    padding: '12px', 
    borderRadius: '8px', 
    marginBottom: '8px',
    cursor: 'pointer',
    backgroundColor: active ? '#ecfdf5' : 'transparent',
    color: color || (active ? '#059669' : '#4b5563')
  }}>
    {icon}
    <span style={{ fontWeight: 500 }}>{label}</span>
  </div>
);

// Component phụ để render Thẻ chỉ số (Card)
const StatCard = ({ title, value, change, icon }) => (
  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
      <div>
        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '5px' }}>{title}</p>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{value}</h3>
      </div>
      <div style={{ padding: '10px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>{icon}</div>
    </div>
    <span style={{ fontSize: '12px', color: change.includes('+') || change.includes('A+') ? '#059669' : '#d97706', backgroundColor: change.includes('+') || change.includes('A+') ? '#ecfdf5' : '#fffbeb', padding: '2px 8px', borderRadius: '4px' }}>
      {change}
    </span>
  </div>
);

export default OrgDashboard;