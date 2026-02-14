import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// --- AUTH ---
import Login from './modules/auth/pages/Login'; 
import Register from './modules/auth/pages/Register';

// --- PUBLIC PAGES ---
import LandingPage from './modules/organization/pages/LandingPage';
import SolutionsPage from './modules/organization/pages/SolutionsPage';
import AboutPage from './modules/organization/pages/AboutPage';
import BenefitsPage from './modules/organization/pages/BenefitsPage';
import TestimonialsPage from './modules/organization/pages/TestimonialsPage';

// --- ADMIN IMPORTS ---
import AdminLayout from './modules/organization/layouts/AdminLayout'; // Check lại đường dẫn thực tế file này nằm ở đâu nhé
import OrgDashboard from './modules/organization/pages/Dashboard';
import StaffList from './modules/organization/pages/StaffList';
import ESGReport from './modules/organization/pages/ESGReport';
import NFTPage from './modules/organization/pages/NFTPage';
import SettingsPage from './modules/organization/pages/SettingsPage'; // Check lại đường dẫn

// --- USER IMPORTS ---
import UserLayout from './modules/user/layouts/UserLayout'; // Đảm bảo file này đã tạo
import UserDashboard from './modules/user/pages/UserDashboard';
import UserLearningPath from './modules/user/pages/UserLearningPath';
import UserMyNFT from './modules/user/pages/UserMyNFT';
import UserExams from './modules/user/pages/UserExams'; 
import UserProfile from './modules/user/pages/UserProfile';
import UserQuiz from './modules/user/pages/UserQuiz';
import UserQuizResult from './modules/user/pages/UserQuizResult';
import ImportTool from './ImportTool';
function App() {
  return (
    <Routes>
      {/* 1. PUBLIC ROUTES */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      
      <Route path="/solutions" element={<SolutionsPage />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/benefits" element={<BenefitsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />   

      {/* 2. ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OrgDashboard />} />
          <Route path="users" element={<StaffList />} />
          <Route path="esg" element={<ESGReport />} />
          <Route path="nft" element={<NFTPage />} />
          <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* 3. USER ROUTES */}
      <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="learning" element={<UserLearningPath />} />
          <Route path="nft" element={<UserMyNFT />} />
          <Route path="exams" element={<UserExams />} />
          <Route path="profile" element={<UserProfile />} />
          
          {/* Các trang Quiz */}
          <Route path="quiz-take" element={<UserQuiz />} />
          <Route path="quiz-result" element={<UserQuizResult />} />    
          <Route path="/" element={<ImportTool />} />  
      </Route>
    </Routes>
  );
}

export default App;