import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import trang Landing Page mới
import LandingPage from './modules/organization/pages/LandingPage';
// Vẫn giữ Dashboard nhưng ẩn vào đường dẫn khác (phòng khi cần Demo)
import OrgDashboard from './modules/organization/pages/Dashboard';

function App() {
  return (
    <Routes>
      {/* Trang chủ bây giờ là Website giới thiệu */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Trang quản trị chỉ hiện khi gõ đúng link /admin */}
      <Route path="/admin" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App;