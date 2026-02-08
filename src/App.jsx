import { Routes, Route } from 'react-router-dom';
// Import các trang từ module Organization mới
import OrgDashboard from './modules/organization/pages/Dashboard'; 
import UserDashboard from './modules/user/pages/Dashboard';
import Marketplace from './modules/user/pages/Marketplace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Marketplace />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      
      {/* Tuyến đường hợp nhất cho B2B & B2S */}
      <Route path="/org/dashboard" element={<OrgDashboard />} /> 
      
      {/* Các route khác cho Chuyên gia/Đối tác */}
    </Routes>
  );
}

export default App;