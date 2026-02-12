import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Compass, BookOpen, Award, User, LogOut } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SidebarItem = ({ icon, label, path, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 group
    ${active 
      ? 'bg-blue-50 text-[#1e3a8a] shadow-sm translate-x-1' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy thông tin user
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Người dùng Nexa";
  const userOrg = savedData.university || "Học viên";

  const handleLogout = () => {
    localStorage.removeItem('nexa_user'); 
    localStorage.removeItem('nexa_role'); 
    navigate('/login');
  };

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR CỐ ĐỊNH */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          <SidebarItem 
            active={location.pathname === '/user/dashboard'} 
            icon={<Compass size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/user/dashboard')} 
          />
          <SidebarItem 
            active={location.pathname === '/user/learning'} 
            icon={<BookOpen size={20}/>} 
            label="Lộ trình học tập" 
            onClick={() => navigate('/user/learning')} 
          />
          <SidebarItem 
            active={location.pathname === '/user/exams'} 
            icon={<BookOpen size={20}/>} 
            label="Bài kiểm tra" 
            onClick={() => navigate('/user/exams')} 
          />
           <SidebarItem 
            active={location.pathname === '/user/nft'} 
            icon={<Award size={20}/>} 
            label="Chứng chỉ NFT" 
            onClick={() => navigate('/user/nft')} 
          />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight uppercase">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER CHUNG */}
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center border-b border-slate-100 sticky top-0 z-10">
          <div className="text-left">
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Chào mừng, {userName}! 👋</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Học viên ưu tú • {userOrg}</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 pr-6 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white font-[1000] shadow-md shadow-blue-900/20">
              {userName.charAt(0)}
            </div>
            <div className="leading-tight text-left">
              <p className="text-[10px] font-[1000] text-[#1e3a8a] uppercase tracking-tighter">Sinh viên</p>
              <p className="text-xs font-bold text-slate-700 uppercase">{userOrg}</p>
            </div>
          </div>
        </header>

        {/* NỘI DUNG THAY ĐỔI Ở ĐÂY */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
            <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default UserLayout;