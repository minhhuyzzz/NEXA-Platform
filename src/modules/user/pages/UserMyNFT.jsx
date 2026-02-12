import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Award, BookOpen, LogOut, Compass, User, Share2, 
  Download, Hexagon, ShieldCheck, LayoutDashboard // 👈 Đã thêm icon
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 group
    ${active 
      ? 'bg-blue-50 text-[#1e3a8a] shadow-sm translate-x-1 font-bold' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="text-[10px] font-[1000] uppercase tracking-widest">{label}</span>
  </button>
);

const NFTCard = ({ title, date, id }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer">
    <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="text-center relative z-10">
        <Award size={48} className="text-amber-400 mx-auto mb-2 drop-shadow-lg animate-pulse" />
        <h3 className="text-white font-[1000] uppercase text-lg leading-tight">{title}</h3>
        <p className="text-blue-200 text-[10px] font-bold mt-1 tracking-wider">NEXA CERTIFIED</p>
      </div>
      <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 flex items-center gap-1">
        <ShieldCheck size={12} className="text-green-400" />
        <span className="text-[8px] text-white font-bold uppercase">Verified</span>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-[1000] text-slate-800 leading-tight group-hover:text-blue-700 transition">{title}</h4>
        <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase">Cấp ngày: {date}</p>
      </div>
      
      <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
        <Hexagon size={14} className="text-blue-600" />
        <span className="text-[10px] font-mono text-slate-600 truncate font-bold">ID: {id}</span>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 py-3 bg-[#1e3a8a] text-white rounded-xl text-[10px] font-[1000] uppercase tracking-widest hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
          <Download size={14} /> Tải về
        </button>
        <button className="px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  </div>
);

const UserMyNFT = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy dữ liệu user
  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Người dùng Nexa";
  const userOrg = savedData.university || "Đơn vị thành viên";

  const handleLogout = () => {
    localStorage.removeItem('nexa_user'); 
    localStorage.removeItem('nexa_role'); 
    navigate('/login');
  };

  const currentPath = location.pathname;

  return (
    <div className="h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. SIDEBAR (MENU TRÁI) - CẬP NHẬT ĐẦY ĐỦ */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <img src={LOGO_URL} alt="NEXA" className="h-8 w-auto object-contain" />
          <span className="text-[#1e3a8a] font-[1000] text-2xl tracking-tighter italic">NEXA</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          <SidebarItem 
            active={currentPath === '/user/dashboard'} 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/user/dashboard')}
          />
          <SidebarItem 
            active={currentPath === '/user/learning'} 
            icon={<Compass size={20}/>} 
            label="Lộ trình học tập" 
            onClick={() => navigate('/user/learning')} 
          />
          <SidebarItem 
            active={currentPath === '/user/exams'}
            icon={<BookOpen size={20}/>} 
            label="Bài kiểm tra" 
            onClick={() => navigate('/user/exams')} 
          />
          <SidebarItem 
            active={currentPath === '/user/nft'} // Trang này đang Active
            icon={<Award size={20}/>} 
            label="Chứng chỉ NFT" 
            onClick={() => navigate('/user/nft')} 
          />
          <SidebarItem 
            active={currentPath === '/user/profile'}
            icon={<User size={20}/>} 
            label="Hồ sơ cá nhân" 
            onClick={() => navigate('/user/profile')} 
          />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all font-[1000] text-sm group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight uppercase">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT (DANH SÁCH NFT) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Bộ sưu tập Chứng chỉ 🏆</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Tài sản số & Minh chứng năng lực</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right">
                <p className="text-[10px] font-[1000] text-[#1e3a8a] uppercase tracking-tighter">{userName}</p>
                <p className="text-xs font-bold text-slate-700 uppercase">{userOrg}</p>
             </div>
             <button className="px-6 py-3 bg-amber-50 text-amber-600 rounded-xl text-[10px] font-[1000] uppercase tracking-widest border border-amber-100 hover:bg-amber-100 transition-all shadow-sm">
               Kết nối Ví Metamask
             </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <NFTCard title="Tư duy Số Cơ bản" date="12/10/2025" id="0x892...12A" />
              <NFTCard title="An toàn Thông tin" date="05/11/2025" id="0x442...99B" />
              <NFTCard title="Làm việc nhóm 4.0" date="20/12/2025" id="0x112...33C" />
              
              {/* Card rỗng (Placeholder) */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center text-center p-6 min-h-[400px] hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 mb-4 group-hover:text-blue-500 shadow-sm transition-colors">
                  <Award size={32} />
                </div>
                <h3 className="text-slate-500 font-bold text-sm group-hover:text-blue-600 transition-colors">Hoàn thành khóa học tiếp theo</h3>
                <p className="text-[10px] text-slate-400 uppercase mt-1 font-bold">để mở khóa NFT mới</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserMyNFT;