import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, 
  Award, Settings, LogOut 
} from 'lucide-react';

const OrgSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'overview', label: 'Tổng quan', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { id: 'users', label: 'Quản lý Nhân sự', icon: <Users size={20} />, path: '/admin/users' },
    { id: 'esg', label: 'Báo cáo ESG', icon: <FileBarChart size={20} />, path: '/admin/esg' },
    { id: 'nft', label: 'Chứng chỉ & NFT', icon: <Award size={20} />, path: '/admin/nft' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('nexa_user');
    navigate('/login');
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">N</div>
        <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${
              location.pathname === item.path 
              ? 'bg-blue-50 text-[#3b66f5]' 
              : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            <span className="tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-50">
        <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm">
          <LogOut size={20} />
          <span className="tracking-tight text-left">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default OrgSidebar;