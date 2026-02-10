import React from 'react';
/* ✅ 1. Thêm Navigate vào dòng này */
import { Routes, Route, Navigate } from 'react-router-dom';

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
import UserLearningPath from './modules/user/pages/UserLearningPath';
import UserMyNFT from './modules/user/pages/UserMyNFT';
import UserExams from './modules/user/pages/UserExams';
import UserProfile from './modules/user/pages/UserProfile';

import SolutionsPage from './modules/organization/pages/SolutionsPage';
import AboutPage from './modules/organization/pages/AboutPage';
import BenefitsPage from './modules/organization/pages/BenefitsPage';
import TestimonialsPage from './modules/organization/pages/TestimonialsPage';

import UserQuiz from './modules/user/pages/UserQuiz';
import UserQuizResult from './modules/user/pages/UserQuizResult';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      
      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<OrgDashboard />} />
      <Route path="/admin/users" element={<StaffList />} />
      <Route path="/admin/esg" element={<ESGReport />} />
      <Route path="/admin/nft" element={<NFTPage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />

      {/* --- ROUTES CHO USER --- */}
      
      {/* ✅ 2. Thêm dòng này: Nếu vào /user thì tự nhảy sang /user/dashboard */}
      <Route path="/user" element={<Navigate to="/user/dashboard" replace />} />
      
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/learning" element={<UserLearningPath />} />
      <Route path="/user/nft" element={<UserMyNFT />} />
      <Route path="/user/exams" element={<UserExams />} />
      <Route path="/user/profile" element={<UserProfile />} />
      
      <Route path="/solutions" element={<SolutionsPage />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/benefits" element={<BenefitsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />   

      <Route path="/user/quiz-take" element={<UserQuiz />} />
      <Route path="/user/quiz-result" element={<UserQuizResult />} />      
    </Routes>
  );
}

export default App;