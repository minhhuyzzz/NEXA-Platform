import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Bell, Search, Menu
} from 'lucide-react';

/* --- SUB-COMPONENTS --- */
const SidebarItem = ({ icon, label, path, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group relative
    ${active 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
    {active && <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>}
  </button>
);

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const savedUser = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const adminName = savedUser.fullName || "Admin User";

  const handleLogout = () => {
    if(window.confirm('Bạn có chắc muốn đăng xuất?')) {
        localStorage.removeItem('nexa_role');
        navigate('/login');
    }
  };

  const MENU_ITEMS = [
    { label: 'Tổng quan', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Quản lý Nhân sự', path: '/admin/users', icon: Users },
    { label: 'Báo cáo ESG', path: '/admin/esg', icon: FileBarChart },
    { label: 'Chứng chỉ & NFT', path: '/admin/nft', icon: Award },
    { label: 'Cài đặt hệ thống', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F1F5F9] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR CỐ ĐỊNH */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen shrink-0 z-30">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30">N</div>
          <span className="text-slate-900 font-[1000] text-2xl tracking-tighter uppercase">NEXA <span className="text-blue-600">Admin</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto no-scrollbar">
          {MENU_ITEMS.map((item, index) => (
            <SidebarItem 
              key={index}
              icon={<item.icon size={20} strokeWidth={2.5}/>} 
              label={item.label} 
              path={item.path}
              active={currentPath === item.path || (item.path === '/admin/dashboard' && currentPath === '/admin')}
              onClick={() => navigate(item.path)} 
            />
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:bg-red-50 hover:text-red-600 font-bold text-sm transition-all group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* 2. KHUNG NỘI DUNG CHÍNH */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* TOP BAR CHUNG CHO MỌI TRANG */}
        <header className="px-8 py-5 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center shrink-0 z-20 sticky top-0">
           <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 text-slate-500"><Menu/></button>
              {/* Breadcrumb hoặc Title động có thể để ở đây */}
              <div className="hidden md:block text-xs font-bold text-slate-400 uppercase tracking-widest">
                {currentPath.replace('/admin/', '').toUpperCase() || 'DASHBOARD'}
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="relative hidden md:block group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                 <input type="text" placeholder="Tìm kiếm nhanh..." className="pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full outline-none font-medium text-sm w-64 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" />
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all relative">
                   <Bell size={20} />
                   <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                   <div className="text-right hidden md:block">
                      <p className="text-sm font-bold text-slate-800">{adminName}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Administrator</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:ring-4 hover:ring-blue-100 transition-all">
                      {adminName.charAt(0)}
                   </div>
                </div>
              </div>
           </div>
        </header>

        {/* NƠI HIỂN THỊ NỘI DUNG CÁC TRANG CON */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[#F8FAFC]">
           <div className="max-w-7xl mx-auto animate-fade-in-up">
              <Outlet /> 
           </div>
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;