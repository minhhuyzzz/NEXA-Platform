import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Compass, BookOpen, Award, User, LogOut, 
  Search, Bell, Menu 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SidebarItem = ({ icon, label, path, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group relative
    ${active 
      ? 'bg-blue-50 text-blue-700 shadow-sm' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
    {active && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-l-full"></div>}
  </button>
);

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Lấy dữ liệu user
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Học viên";
  const userOrg = savedData.university || "Đơn vị thành viên";

  const handleLogout = () => {
    localStorage.removeItem('nexa_user'); 
    localStorage.removeItem('nexa_role'); 
    navigate('/login');
  };

  const MENU_ITEMS = [
    { label: 'Tổng quan', path: '/user/dashboard', icon: LayoutDashboard },
    { label: 'Lộ trình học tập', path: '/user/learning', icon: Compass },
    { label: 'Bài kiểm tra', path: '/user/exams', icon: BookOpen },
    { label: 'Chứng chỉ NFT', path: '/user/nft', icon: Award },
    { label: 'Hồ sơ cá nhân', path: '/user/profile', icon: User },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-30">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto no-scrollbar">
          {MENU_ITEMS.map((item, index) => (
            <SidebarItem 
              key={index}
              icon={<item.icon size={20}/>} 
              label={item.label} 
              active={currentPath === item.path}
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

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* HEADER CHUNG */}
        <header className="px-8 py-5 bg-white/80 backdrop-blur-md border-b border-slate-100 flex justify-between items-center shrink-0 z-20 sticky top-0">
           <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 text-slate-500"><Menu/></button>
              <div>
                <h1 className="text-xl font-[1000] tracking-tight uppercase text-[#0F172A] hidden md:block">
                  Chào mừng, {userName}! 👋
                </h1>
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="relative hidden md:block group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                 <input type="text" placeholder="Tìm khóa học..." className="pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-full outline-none font-bold text-xs w-64 focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all text-slate-600" />
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-2.5 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-blue-600 hover:shadow-md transition-all relative">
                   <Bell size={20} />
                   <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                   <div className="text-right hidden md:block">
                      <p className="text-xs font-[1000] text-[#1e3a8a] uppercase tracking-tighter">Sinh viên</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{userOrg}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-black shadow-md shadow-blue-900/20">
                      {userName.charAt(0)}
                   </div>
                </div>
              </div>
           </div>
        </header>

        {/* NỘI DUNG THAY ĐỔI */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[#F8FAFC]">
           <div className="max-w-7xl mx-auto animate-fade-in-up">
              <Outlet /> 
           </div>
        </div>

      </main>
    </div>
  );
};

export default UserLayout;