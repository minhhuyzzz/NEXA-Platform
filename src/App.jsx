import { Routes, Route } from 'react-router-dom';
import OrgDashboard from './modules/organization/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Trang chủ NEXA</div>} />
      {/* Đường dẫn này phải khớp hoàn toàn với cái bạn gõ trên trình duyệt */}
      <Route path="/org/dashboard" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App;