import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap, Briefcase, CheckCircle2
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('member'); 
  const [role, setRole] = useState('student'); 

  const handleRegister = (e) => {
    e.preventDefault();
    if (accountType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user'); 
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-[#0F172A]">
      
      {/* CỘT TRÁI: ĐÃ KHÔI PHỤC VÀ NÂNG CẤP (Navy Blue #1e3a8a) */}
      <div className="hidden lg:flex lg:w-[42%] bg-[#1e3a8a] p-16 flex-col justify-between relative overflow-hidden">
        {/* Trang trí nền chìm */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full -mr-48 -mt-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full -ml-32 -mb-32 opacity-10"></div>
        
        <div className="relative z-10">
          {/* LOGO CHÍNH THỨC */}
          <div className="flex items-center gap-4 mb-20">
            <img src={LOGO_URL} alt="NEXA" className="h-12 w-auto object-contain" />
            <span className="text-white text-4xl font-[1000] tracking-tighter uppercase italic">Nexa</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl xl:text-6xl font-[1000] text-white leading-[1.1] tracking-tight uppercase">
              Kích hoạt Hồ sơ <br /> <span className="text-blue-400">Năng lực số</span>
            </h1>
            <p className="text-blue-100/80 text-xl max-w-md font-medium leading-relaxed">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội.
            </p>

            {/* QUOTE CHUYÊN GIA */}
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 shadow-2xl max-w-lg">
              <p className="text-blue-50 italic text-base leading-relaxed mb-6 font-medium">
                "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/30 flex items-center justify-center border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-blue-400/50"></div>
                </div>
                <div>
                  <p className="text-white font-[1000] text-sm uppercase tracking-wider">Chuyên gia NEXA</p>
                  <p className="text-blue-300/60 text-[10px] font-bold uppercase tracking-[0.2em]">Hội đồng cố vấn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HỆ SINH THÁI ĐỐI TÁC */}
        <div className="relative z-10 border-t border-white/10 pt-10">
          <p className="text-blue-300/50 text-[10px] font-[1000] uppercase tracking-[0.3em] mb-6">Hệ sinh thái đối tác</p>
          <div className="flex gap-10 opacity-40 grayscale brightness-200 text-white font-[1000] text-xs">
            <span>EDUVN</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ CHUYÊN NGHIỆP */}
      <div className="w-full lg:w-[58%] flex flex-col p-8 md:p-20 justify-center bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-12 group transition-all">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] font-[1000] uppercase tracking-[0.2em]">Quay lại trang chủ</span>
          </button>

          <div className="mb-12">
            <h2 className="text-4xl font-[1000] text-[#0F172A] tracking-tighter mb-3 uppercase">Thông tin đăng ký</h2>
            <p className="text-slate-500 font-bold text-base">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-10">
            
            {/* TẦNG 1: CHỌN VỊ THẾ TÀI KHOẢN */}
            <div className="space-y-4">
              <label className="text-[11px] font-[1000] text-[#1e3a8a] uppercase tracking-[0.25em] ml-1 italic">01. Mục đích đăng ký?</label>
              <div className="flex p-1.5 bg-slate-200/50 rounded-[28px] w-fit border border-slate-200">
                <button 
                  type="button"
                  onClick={() => {setAccountType('member'); setRole('student');}}
                  className={`px-10 py-4 rounded-[22px] text-[11px] font-[1000] transition-all duration-300 ${accountType === 'member' ? 'bg-white shadow-xl text-[#1e3a8a]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  TÔI LÀ THÍ SINH
                </button>
                <button 
                  type="button"
                  onClick={() => {setAccountType('admin'); setRole('business');}}
                  className={`px-10 py-4 rounded-[22px] text-[11px] font-[1000] transition-all duration-300 ${accountType === 'admin' ? 'bg-[#1e3a8a] text-white shadow-xl shadow-blue-900/30' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  TÔI LÀ QUẢN TRỊ
                </button>
              </div>
            </div>

            {/* TẦNG 2: CHỌN ĐỐI TƯỢNG (Role Cards chuẩn image_c34575.png) */}
            <div className="space-y-4">
              <label className="text-[11px] font-[1000] text-slate-400 uppercase tracking-[0.25em] ml-1 italic">02. Bạn là đối tượng nào?</label>
              <div className="grid grid-cols-3 gap-5">
                <RoleCard active={role === 'student'} onClick={() => setRole('student')} icon={<GraduationCap size={26}/>} label="Sinh viên" sub="Đại học / Cao đẳng" />
                <RoleCard active={role === 'staff'} onClick={() => setRole('staff')} icon={<Briefcase size={26}/>} label="Giảng viên" sub="Cán bộ / Nhân viên" />
                <RoleCard active={role === 'individual'} onClick={() => setRole('individual')} icon={<User size={26}/>} label="Cộng đồng" sub="Tự do / Doanh nghiệp" />
              </div>
            </div>

            {/* INPUT FIELDS (Typography Black & Spacing) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
              <ModernInput label="Họ và tên đầy đủ *" placeholder="Ví dụ: Nguyễn Văn An" />
              <ModernInput label={`Email ${accountType === 'admin' ? 'tổ chức' : 'trường học'} *`} placeholder="email@domain.com" />
              <ModernInput label={accountType === 'admin' ? "Tên đơn vị quản lý *" : "Trường Đại học *"} placeholder="Chọn đơn vị..." />
              <ModernInput label={role === 'student' ? "Mã số sinh viên (MSSV) *" : "Mã số cán bộ (MSCB) *"} placeholder="VD: 2100xxxx" />
            </div>

            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-[1000] py-7 rounded-[32px] shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-4 group transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs mt-8">
              {accountType === 'admin' ? 'Khởi tạo hệ thống quản trị' : 'Xác nhận & Bắt đầu'}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center gap-3 pt-6 opacity-40">
                <ShieldCheck size={18} className="text-green-600" />
                <p className="text-[10px] font-[1000] uppercase tracking-[0.2em]">Dữ liệu được bảo mật chuẩn ISO 27001</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- NÂNG CẤP COMPONENTS VỚI BLACK FONT --- */

const RoleCard = ({ active, onClick, icon, label, sub }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer p-8 rounded-[40px] border-2 transition-all duration-500 flex flex-col items-center gap-4 text-center group relative ${active ? 'border-[#1e3a8a] bg-white shadow-2xl shadow-blue-900/10 scale-105 z-10' : 'border-slate-100 bg-white hover:border-slate-300'}`}
  >
    <div className={`p-4 rounded-[22px] transition-all duration-500 ${active ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300 group-hover:bg-slate-100'}`}>{icon}</div>
    <div className="space-y-1">
      <p className={`text-xs font-[1000] uppercase tracking-tighter ${active ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>{label}</p>
      <p className={`text-[9px] font-bold ${active ? 'text-blue-400' : 'text-slate-300'}`}>{sub}</p>
    </div>
    {active && <div className="absolute top-4 right-4 text-[#1e3a8a]"><CheckCircle2 size={18} fill="currentColor" className="text-white" /></div>}
  </div>
);

const ModernInput = ({ label, placeholder }) => (
  <div className="space-y-4 group">
    <label className="text-[10px] font-[1000] text-slate-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#1e3a8a] transition-colors italic">{label}</label>
    <input 
      type="text" 
      required 
      placeholder={placeholder} 
      className="w-full px-8 py-5 bg-white border-2 border-slate-100 rounded-[24px] focus:ring-[8px] focus:ring-blue-900/5 focus:border-[#1e3a8a] outline-none transition-all font-black text-sm placeholder:text-slate-300 shadow-sm" 
    />
  </div>
);

export default Register;