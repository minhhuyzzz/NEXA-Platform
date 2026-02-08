import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './modules/organization/pages/LandingPage';
import OrgDashboard from './modules/organization/pages/Dashboard';
import Login from './modules/auth/pages/Login'; // <--- KIỂM TRA DÒNG NÀY CÓ CHƯA?

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/admin" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App;