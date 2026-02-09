import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, User, Lock, Bell, Save, ToggleRight
} from 'lucide-react';

/* --- SUB-COMPONENTS --- */

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group
    ${active 
      ? 'bg-slate-800 text-white shadow-md translate-x-1' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
  </button>
);

const SettingSection = ({ title, children }) => (
  <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm mb-8">
    <h3 className="text-lg font-[1000] text-slate-800 mb-6 uppercase tracking-wide">{title}</h3>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const InputGroup = ({ label, type, defaultValue, icon }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm text-slate-700 focus:outline-none focus:border-slate-400 transition-colors"
      />
    </div>
  </div>
);

const ToggleRow = ({ label, desc }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
    <div>
      <h4 className="font-bold text-slate-700 text-sm">{label}</h4>
      <p className="text-[10px] text-slate-400 font-medium">{desc}</p>
    </div>
    <button className="text-green-500 hover:text-green-600 transition-colors">
      <ToggleRight size={32} />
    </button>
  </div>
);

/* --- MAIN COMPONENT --- */

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* SIDEBAR (Style Tối giản / Dark Mode accent) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-slate-300">S</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">Cài Đặt</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/admin')} 
          />
          <SidebarItem 
            icon={<Users size={20}/>} 
            label="Quản lý Nhân sự" 
            onClick={() => navigate('/admin/users')} 
          />
          <SidebarItem 
            icon={<FileBarChart size={20}/>} 
            label="Báo cáo ESG" 
            onClick={() => navigate('/admin/esg')} 
          />
          <SidebarItem 
            icon={<Award size={20}/>} 
            label="Chứng chỉ & NFT" 
            onClick={() => navigate('/admin/nft')} 
          />
          <SidebarItem 
            active 
            icon={<Settings size={20}/>} 
            label="Cài đặt hệ thống" 
            // Đang ở trang này rồi nên không cần onClick
          />
          
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Cài đặt Hệ thống</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Quản lý tài khoản & Cấu hình</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-slate-800 shadow-lg transition-all">
            <Save size={16} /> Lưu thay đổi
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-4xl mx-auto">
            
            {/* 1. THÔNG TIN TÀI KHOẢN */}
            <SettingSection title="Thông tin chung">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-2xl font-black border-4 border-white shadow-md">
                  AD
                </div>
                <div>
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold uppercase hover:bg-blue-100 transition-colors">
                    Đổi Avatar
                  </button>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">JPG, PNG tối đa 2MB</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Tên hiển thị" type="text" defaultValue="Trần Minh Huy" icon={<User size={16}/>} />
                <InputGroup label="Email" type="email" defaultValue="huy.admin@nexa.com" icon={<Award size={16}/>} />
                <InputGroup label="Chức vụ" type="text" defaultValue="Quản trị viên cấp cao" icon={<Settings size={16}/>} />
                <InputGroup label="Số điện thoại" type="tel" defaultValue="+84 909 123 456" icon={<Bell size={16}/>} />
              </div>
            </SettingSection>

            {/* 2. CẤU HÌNH HỆ THỐNG */}
            <SettingSection title="Tùy chỉnh & Thông báo">
              <div className="grid grid-cols-1 gap-4">
                <ToggleRow label="Thông báo Email" desc="Nhận email khi có ứng viên mới hoặc báo cáo ESG" />
                <ToggleRow label="Bảo mật 2 lớp (2FA)" desc="Yêu cầu mã OTP khi đăng nhập thiết bị lạ" />
                <ToggleRow label="Chế độ tối (Dark Mode)" desc="Chuyển sang giao diện nền tối" />
              </div>
            </SettingSection>

             {/* 3. BẢO MẬT */}
             <SettingSection title="Bảo mật">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Mật khẩu hiện tại" type="password" defaultValue="********" icon={<Lock size={16}/>} />
                <InputGroup label="Mật khẩu mới" type="password" defaultValue="" icon={<Lock size={16}/>} />
               </div>
             </SettingSection>

          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;