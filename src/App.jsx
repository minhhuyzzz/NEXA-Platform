import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './modules/organization/pages/LandingPage';
import OrgDashboard from './modules/organization/pages/Dashboard';
import UserDashboard from './modules/user/pages/UserDashboard';
import Login from './modules/auth/pages/Login'; 
import Register from './modules/auth/pages/Register';
import StaffList from './modules/organization/pages/StaffList';
import ESGReport from './modules/organization/pages/ESGReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<OrgDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/admin/users" element={<StaffList />} />
      <Route path="/admin/esg" element={<ESGReport />} />
    </Routes>
  );
}

export default App;