import React from 'react';
import { 
  LayoutDashboard, Users, Leaf, Zap, 
  Settings, LogOut, Bell, Search, Award, 
  ArrowUpRight, MoreHorizontal, Filter
} from 'lucide-react';

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

const OrgDashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: colors.bg, fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. SIDEBAR (Giữ nguyên nhưng gọn hơn) */}
      <aside style={{ width: '250px', backgroundColor: colors.white, borderRight: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', zIndex: 10 }}>
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: `linear-gradient(135deg, ${colors.primary}, #2563EB)`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>N</div>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: colors.textMain }}>NEXA Admin</span>
        </div>

        <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <MenuItem icon={<LayoutDashboard size={18} />} label="Tổng quan" active />
          <MenuItem icon={<Users size={18} />} label="Quản lý Nhân sự" />
          <MenuItem icon={<Leaf size={18} />} label="Báo cáo ESG" />
          <MenuItem icon={<Award size={18} />} label="Chứng chỉ & NFT" />
          <div style={{ height: '1px', backgroundColor: colors.border, margin: '10px 0' }}></div>
          <MenuItem icon={<Settings size={18} />} label="Cài đặt hệ thống" />
        </nav>

        <div style={{ padding: '20px', borderTop: `1px solid ${colors.border}` }}>
          <MenuItem icon={<LogOut size={18} />} label="Đăng xuất" color="#EF4444" />
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main style={{ marginLeft: '250px', flex: 1, padding: '30px' }}>
        
        {/* Header Bar */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.textMain }}>Tổng quan Tổ chức</h1>
            <p style={{ color: colors.textSub, fontSize: '14px' }}>Cập nhật lần cuối: Hôm nay, 12:45 PM</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} color={colors.textSub} style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input type="text" placeholder="Tìm kiếm..." style={{ padding: '10px 10px 10px 35px', borderRadius: '8px', border: `1px solid ${colors.border}`, outline: 'none', width: '250px' }} />
            </div>
            <button style={{ padding: '10px', borderRadius: '8px', border: `1px solid ${colors.border}`, backgroundColor: 'white', cursor: 'pointer' }}><Bell size={18} color={colors.textSub} /></button>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: colors.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AD</div>
          </div>
        </header>

        {/* Stats Row (Nhỏ gọn, chuyên nghiệp hơn) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
          <StatCard title="Tổng Nhân sự" value="1,240" trend="+12%" icon={<Users size={20} color="white"/>} bg={colors.primary} />
          <StatCard title="Điểm Số Hóa" value="850" trend="+5.4%" icon={<Zap size={20} color="white"/>} bg="#6366F1" />
          <StatCard title="Giảm thải CO2" value="12.5 Tấn" trend="+8%" icon={<Leaf size={20} color="white"/>} bg={colors.success} />
          <StatCard title="Chứng chỉ cấp" value="342" trend="+22%" icon={<Award size={20} color="white"/>} bg={colors.warning} />
        </div>

        {/* Content Grid: Biểu đồ + Danh sách (Layout Website) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          
          {/* Cột Trái: Biểu đồ & Phân tích */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Chart Section */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', border: `1px solid ${colors.border}`, padding: '20px', minHeight: '350px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontWeight: '600', color: colors.textMain }}>Xu hướng Năng lực Số</h3>
                <button style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', border: `1px solid ${colors.border}`, padding: '5px 10px', borderRadius: '6px', background: 'white', cursor: 'pointer' }}>
                  <Filter size={14} /> Lọc theo tháng
                </button>
              </div>
              {/* Placeholder Biểu đồ */}
              <div style={{ height: '250px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '2px dashed #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.textSub }}>
                [Khu vực hiển thị Biểu đồ Đường/Cột]
              </div>
            </div>
          </div>

          {/* Cột Phải: Danh sách xếp hạng (Table nhỏ) */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', border: `1px solid ${colors.border}`, padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
              <h3 style={{ fontWeight: '600', color: colors.textMain }}>Top Học viên Xuất sắc</h3>
              <a href="#" style={{ fontSize: '13px', color: colors.primary, fontWeight: '500' }}>Xem tất cả</a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <UserRow name="Nguyễn Văn A" dept="Marketing" score="980" />
              <UserRow name="Trần Thị B" dept="Kế toán" score="945" />
              <UserRow name="Lê Hoàng C" dept="IT Dev" score="910" />
              <UserRow name="Phạm Minh D" dept="HR" score="890" />
              <UserRow name="Hoàng Anh E" dept="Sales" score="885" />
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: colors.successLight, borderRadius: '8px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '5px' }}>
                <Leaf size={16} color={colors.success} />
                <span style={{ fontWeight: '600', color: '#065F46', fontSize: '14px' }}>Mẹo ESG</span>
              </div>
              <p style={{ fontSize: '12px', color: '#064E3B', lineHeight: '1.4' }}>
                Phòng Marketing đang dẫn đầu về giảm thiểu giấy in. Hãy khen thưởng để khích lệ!
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

/* --- Sub-Components (Gọn gàng) --- */

const MenuItem = ({ icon, label, active, color }) => (
  <div style={{ 
    display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', 
    borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s',
    backgroundColor: active ? colors.primaryLight : 'transparent',
    color: color || (active ? colors.primary : colors.textSub)
  }}>
    {icon}
    <span style={{ fontSize: '14px', fontWeight: active ? '600' : '500' }}>{label}</span>
  </div>
);

const StatCard = ({ title, value, trend, icon, bg }) => (
  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
      <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: bg, display: 'flex' }}>{icon}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#10B981', fontWeight: '600', backgroundColor: '#ECFDF5', padding: '2px 6px', borderRadius: '4px' }}>
        <ArrowUpRight size={12} /> {trend}
      </div>
    </div>
    <span style={{ fontSize: '24px', fontWeight: '700', color: colors.textMain, marginTop: '10px' }}>{value}</span>
    <span style={{ fontSize: '13px', color: colors.textSub }}>{title}</span>
  </div>
);

const UserRow = ({ name, dept, score }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
        {name.charAt(0)}
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: '600', color: '#334155', margin: 0 }}>{name}</p>
        <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>{dept}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <span style={{ fontSize: '14px', fontWeight: 'bold', color: colors.primary }}>{score}</span>
      <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>điểm</p>
    </div>
  </div>
);

export default OrgDashboard;