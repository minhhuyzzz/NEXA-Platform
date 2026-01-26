// src/utils/greenImpact.js
export const calculateGreenImpact = (distanceKm = 0, pagesSaved = 0, hoursOnline = 0) => {
  const CO2_TRANSPORT = 0.12; // kg CO2/km
  const CO2_PAPER = 0.005;    // kg CO2/trang
  const CO2_FACILITY = 0.5;   // kg CO2/giờ học tập trung

  const totalSaved = (distanceKm * CO2_TRANSPORT) + 
                     (pagesSaved * CO2_PAPER) + 
                     (hoursOnline * CO2_FACILITY);
                     
  return totalSaved.toFixed(3); // Trả về số kg CO2 tiết kiệm được
};import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import các Layout/Page từ thư mục modules
// Ví dụ giả định bạn đã tạo các file này
import Home from './modules/marketplace/pages/Home';
import LearnerDashboard from './modules/learner/pages/Dashboard';
import BusinessDashboard from './modules/business/pages/Dashboard';
import SchoolDashboard from './modules/school/pages/Dashboard';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Nhánh 1: Public - Ai cũng xem được (Landing Page, Marketplace) */}
        <Route path="/" element={<Home />} />

        {/* Nhánh 2: Dành cho Cá nhân (B2C) */}
        <Route path="/learner/*" element={<LearnerDashboard />} />

        {/* Nhánh 3: Dành cho Doanh nghiệp (B2B) */}
        <Route path="/business/*" element={<BusinessDashboard />} />

        {/* Nhánh 4: Dành cho Trường học (B2S) */}
        <Route path="/school/*" element={<SchoolDashboard />} />

        {/* Trang 404 nếu gõ sai địa chỉ */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;