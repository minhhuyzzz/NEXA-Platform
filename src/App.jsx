import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './modules/organization/pages/LandingPage';
import OrgDashboard from './modules/organization/pages/Dashboard';
import Login from './modules/auth/pages/Login'; 
import Register from './modules/auth/pages/Register';
import StaffList from './modules/organization/pages/StaffList';
import ESGReport from './modules/organization/pages/ESGReport';
import NFTPage from './modules/organization/pages/NFTPage';
import SettingsPage from './modules/organization/pages/SettingsPage';
//user
import UserDashboard from './modules/user/pages/UserDashboard';
import UserLearningPath from './modules/user/pages/UserLearningPath'; // Trang Lộ trình
import UserMyNFT from './modules/user/pages/UserMyNFT';             // Trang NFT
import UserExams from './modules/user/pages/UserExams';             // Trang Bài kiểm tra
import UserProfile from './modules/user/pages/UserProfile';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<OrgDashboard />} />
      <Route path="/admin/users" element={<StaffList />} />
      <Route path="/admin/esg" element={<ESGReport />} />
      <Route path="/admin/nft" element={<NFTPage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />
{/* --- ROUTES CHO USER --- */}
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/learning" element={<UserLearningPath />} />
      <Route path="/user/nft" element={<UserMyNFT />} />
      <Route path="/user/exams" element={<UserExams />} />
      <Route path="/user/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;