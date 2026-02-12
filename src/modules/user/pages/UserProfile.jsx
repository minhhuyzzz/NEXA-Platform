import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Award, BookOpen, LogOut, Compass, User, Mail, 
  Phone, MapPin, School, Camera, Save, LayoutDashboard // 👈 Đã thêm icon
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

const InputField = ({ label, defaultValue, icon }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-[1000] uppercase text-slate-400 tracking-wider">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                {icon}
            </div>
            <input 
                type="text" 
                defaultValue={defaultValue} 
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold text-sm text-slate-700 outline-none focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all"
            />
        </div>
    </div>
);

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const savedData = JSON.parse(localStorage.getItem('nexa_user') || '{}');
  const userName = savedData.fullName || "Trần Minh Huy";
  const userEmail = savedData.email || "huy.tran@student.university.edu.vn";
  const userOrg = savedData.university || "Đại học Công Thương TP.HCM";

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
            active={currentPath === '/user/nft'}
            icon={<Award size={20}/>} 
            label="Chứng chỉ NFT" 
            onClick={() => navigate('/user/nft')} 
          />
          <SidebarItem 
            active={currentPath === '/user/profile'} // Trang này đang Active
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

      {/* 2. MAIN CONTENT (HỒ SƠ CÁ NHÂN) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-white/80 backdrop-blur-md px-10 py-6 border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Hồ sơ cá nhân 👤</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Quản lý thông tin tài khoản</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white rounded-xl text-[10px] font-[1000] uppercase tracking-widest hover:bg-blue-800 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
            <Save size={14} /> Lưu thay đổi
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* AVATAR CARD */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 pointer-events-none"></div>
                
                <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white text-3xl font-[1000] border-4 border-white shadow-xl ring-2 ring-slate-100">
                        {userName.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px]">
                        <Camera className="text-white drop-shadow-md" size={24} />
                    </div>
                </div>
                
                <div className="relative z-10">
                    <h2 className="text-2xl font-[1000] text-slate-800 uppercase tracking-tight">{userName}</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase mt-1">Sinh viên • {userOrg}</p>
                    <div className="flex gap-3 mt-4">
                         <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[9px] font-[1000] uppercase border border-green-100 flex items-center gap-1">
                            ● Đã xác thực
                         </span>
                         <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-[9px] font-[1000] uppercase border border-purple-100">
                            Ví Metamask: 0x82...9A
                         </span>
                    </div>
                </div>
            </div>

            {/* FORM INFO */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                <h3 className="text-sm font-[1000] uppercase tracking-widest text-slate-800 mb-6 border-b border-slate-50 pb-4">Thông tin cơ bản</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Họ và tên" defaultValue={userName} icon={<User size={16}/>} />
                    <InputField label="Mã sinh viên" defaultValue="SV2024099" icon={<Award size={16}/>} />
                    <InputField label="Email trường" defaultValue={userEmail} icon={<Mail size={16}/>} />
                    <InputField label="Số điện thoại" defaultValue="0909 123 456" icon={<Phone size={16}/>} />
                    <InputField label="Trường / Đơn vị" defaultValue={userOrg} icon={<School size={16}/>} />
                    <InputField label="Địa chỉ" defaultValue="Tân Phú, TP.HCM" icon={<MapPin size={16}/>} />
                </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;