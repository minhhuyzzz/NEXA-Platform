import React from 'react';

const OrgDashboard = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', color: '#2e7d32' }}>
      <header style={{ borderBottom: '2px solid #e8f5e9', marginBottom: '20px' }}>
        <h1>🌿 NEXA - Portal Quản trị Tổ chức</h1>
        <p>Giải pháp tối ưu năng lực số và chuyển đổi xanh (B2B & B2S)</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1x)', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Quản trị Nhân sự & Sinh viên</h3>
          <p>Theo dõi tiến độ đào tạo và cấp chứng chỉ số.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Báo cáo tác động ESG</h3>
          <p>Chỉ số phát triển bền vững của tổ chức trong năm 2026.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3>Cổng kết nối việc làm xanh</h3>
          <p>Kết nối ứng viên tài năng với các vị trí phù hợp.</p>
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;