import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './modules/organization/pages/LandingPage';
import OrgDashboard from './modules/organization/pages/Dashboard';
import UserDashboard from './modules/user/pages/UserDashboard';
import Login from './modules/auth/pages/Login'; 
import Register from './modules/auth/pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<OrgDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;