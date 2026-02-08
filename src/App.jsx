import React from 'react'; // Thêm dòng này vào
import { Routes, Route } from 'react-router-dom';
import OrgDashboard from './modules/organization/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div style={{padding: '20px'}}><h1>NEXA Home</h1><a href="/org/dashboard">Vào Dashboard</a></div>} />
      <Route path="/org/dashboard" element={<OrgDashboard />} />
    </Routes>
  );
}

export default App;