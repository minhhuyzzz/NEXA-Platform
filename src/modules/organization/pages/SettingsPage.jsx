import React from 'react';
import { 
  User, Lock, Bell, Save, ToggleRight, 
  Mail, Phone, Briefcase, Camera 
} from 'lucide-react';

/* --- SUB-COMPONENTS (Đã được làm đẹp lại) --- */

const SettingSection = ({ title, children }) => (
  <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm mb-8 animate-fade-in-up">
    <h3 className="text-sm font-[1000] text-slate-400 mb-6 uppercase tracking-widest border-b border-slate-50 pb-4">
      {title}
    </h3>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const InputGroup = ({ label, type, defaultValue, icon }) => (
  <div className="space-y-2 group">
    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
        {icon}
      </div>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm text-slate-700 outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all"
      />
    </div>
  </div>
);

const ToggleRow = ({ label, desc }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-100 transition-all cursor-pointer group">
    <div>
      <h4 className="font-bold text-slate-700 text-sm group-hover:text-blue-700 transition-colors">{label}</h4>
      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{desc}</p>
    </div>
    <button className="text-emerald-500 hover:text-emerald-600 transition-colors transform active:scale-95">
      <ToggleRight size={36} strokeWidth={2.5} />
    </button>
  </div>
);

/* --- MAIN COMPONENT --- */

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      
      {/* 1. Page Header (Tiêu đề trang) */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
         <div>
            <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">Cài đặt Hệ thống</h2>
            <p className="text-slate-500 font-medium mt-1">Quản lý thông tin tài khoản & Cấu hình chung.</p>
         </div>
         <button className="flex items-center gap-2 px-6 py-3 bg-[#3b66f5] text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all">
            <Save size={16} /> Lưu thay đổi
         </button>
      </div>

      <div className="max-w-5xl mx-auto">
        
        {/* 2. THÔNG TIN TÀI KHOẢN */}
        <SettingSection title="Thông tin chung">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 text-3xl font-[1000] border-4 border-white shadow-lg group-hover:shadow-xl transition-all">
                  AD
                </div>
                <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px]">
                    <Camera className="text-white" size={24} />
                </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800">Ảnh đại diện</h3>
              <p className="text-xs text-slate-400 mt-1 mb-3 font-medium">Cho phép định dạng JPG, PNG. Tối đa 2MB.</p>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase hover:bg-slate-200 transition-colors">
                Tải ảnh lên
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Tên hiển thị" type="text" defaultValue="Trần Minh Huy" icon={<User size={18}/>} />
            <InputGroup label="Email" type="email" defaultValue="huy.admin@nexa.com" icon={<Mail size={18}/>} />
            <InputGroup label="Chức vụ" type="text" defaultValue="Quản trị viên cấp cao" icon={<Briefcase size={18}/>} />
            <InputGroup label="Số điện thoại" type="tel" defaultValue="+84 909 123 456" icon={<Phone size={18}/>} />
          </div>
        </SettingSection>

        {/* 3. CẤU HÌNH & BẢO MẬT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Cột trái: Thông báo */}
            <SettingSection title="Tùy chỉnh & Thông báo">
                <div className="grid grid-cols-1 gap-3">
                    <ToggleRow label="Thông báo Email" desc="Nhận email khi có ứng viên mới hoặc báo cáo ESG" />
                    <ToggleRow label="Thông báo Đẩy" desc="Hiển thị popup khi có cập nhật hệ thống" />
                    <ToggleRow label="Chế độ tối (Dark Mode)" desc="Chuyển sang giao diện nền tối bảo vệ mắt" />
                </div>
            </SettingSection>

            {/* Cột phải: Bảo mật */}
            <SettingSection title="Bảo mật & Đăng nhập">
                <div className="space-y-5">
                    <InputGroup label="Mật khẩu hiện tại" type="password" defaultValue="********" icon={<Lock size={18}/>} />
                    <InputGroup label="Mật khẩu mới" type="password" defaultValue="" icon={<Lock size={18}/>} />
                    <div className="pt-2">
                        <ToggleRow label="Bảo mật 2 lớp (2FA)" desc="Yêu cầu mã OTP khi đăng nhập thiết bị lạ" />
                    </div>
                </div>
            </SettingSection>

        </div>

      </div>
    </div>
  );
};

export default SettingsPage;