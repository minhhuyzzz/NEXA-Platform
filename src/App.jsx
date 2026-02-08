import { Routes, Route } from 'react-router-dom';
// Import Portal hợp nhất cho Doanh nghiệp & Trường học
import OrgDashboard from './modules/organization/pages/Dashboard'; 

function App() {
  return (
    <Routes>
      {/* Tuyến đường cho người dùng cá nhân/Trang chủ */}
      <Route path="/" element={<div>Trang chủ NEXA</div>} />
      
      {/* Tuyến đường Hợp nhất cho Tổ chức */}
      <Route path="/org/dashboard" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App; 