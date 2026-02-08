import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap, Briefcase, Zap
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  
  // 1. Phân biệt vị thế: 'admin' (Chủ tổ chức/Quản lý) hoặc 'member' (Người dự thi/Sinh viên)
  const [accountType, setAccountType] = useState('member'); 
  
  // 2. Phân biệt đối tượng cụ thể: 'student', 'staff', 'individual'
  const [role, setRole] = useState('student'); 

  const handleRegister = (e) => {
    e.preventDefault();
    // Chuyển hướng thông minh dựa trên vị thế tài khoản
    if (accountType === 'admin') {
      navigate('/admin'); // Vào trang quản trị tổ chức
    } else {
      navigate('/user');  // Vào trang cá nhân làm bài test
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: NHẬN DIỆN THƯƠNG HIỆU (Navy Blue #1e3a8a) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA" className="h-10 w-auto" />
            <span className="text-white text-3xl font-black tracking-tighter uppercase">Nexa</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 uppercase tracking-tight">
            Nâng tầm <br /> Năng lực số
          </h1>
          <p className="text-blue-100/80 text-lg max-w-md font-medium">
            Đo lường kỹ năng chuẩn DigComp 2.2 và cấp chứng chỉ NFT minh bạch cho mọi đối tượng.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-blue-300/40 text-[10px] font-black uppercase tracking-[0.3em] mb-5">Hệ sinh thái đối tác</p>
          <div className="flex gap-8 opacity-40 grayscale brightness-200 text-white font-black text-[11px]">
            <span>EDU.VN</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ PHÂN CẤP */}
      <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-12 justify-center bg-slate-50/50">
        <div className="max-w-xl mx-auto w-full bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-slate-100">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-8 group transition-all">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1" />
            <span className="text-[10px] font-black uppercase tracking-widest">Quay lại trang chủ</span>
          </button>

          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Thông tin đăng ký</h2>
          <p className="text-slate-500 mb-8 font-semibold text-sm">Vui lòng chọn chính xác vị thế để tối ưu hóa quyền hạn sử dụng.</p>

          <form onSubmit={handleRegister} className="space-y-8">
            
            {/* TẦNG 1: CHỌN VỊ THẾ SỬ DỤNG (CHỦ VS THÍ SINH) */}
            <div className="space-y-3">
              <p className="text-[11px] font-black text-[#1e3a8a] uppercase tracking-widest ml-1">Mục đích của bạn là gì?</p>
              <div className="flex p-1 bg-slate-100 rounded-2xl">
                <button 
                  type="button"
                  onClick={() => {setAccountType('member'); setRole('student');}}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-black transition-all ${accountType === 'member' ? 'bg-white shadow-sm text-[#1e3a8a]' : 'text-slate-400'}`}
                >
                  TÔI LÀ NGƯỜI DỰ THI
                </button>
                <button 
                  type="button"
                  onClick={() => {setAccountType('admin'); setRole('business');}}
                  className={`flex-1 py-3.5 rounded-xl text-xs font-black transition-all ${accountType === 'admin' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'text-slate-400'}`}
                >
                  TÔI LÀ CHỦ TỔ CHỨC
                </button>
              </div>
            </div>

            {/* TẦNG 2: CHỌN NHÓM ĐỐI TƯỢNG CỤ THỂ */}
            <div className="space-y-4">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Bạn thuộc nhóm đối tượng nào?</p>
              <div className="grid grid-cols-3 gap-3">
                <RoleCard 
                  active={role === 'student'} 
                  onClick={() => setRole('student')} 
                  icon={<GraduationCap size={22}/>} 
                  label="Sinh viên" 
                />
                <RoleCard 
                  active={role === 'staff'} 
                  onClick={() => setRole('staff')} 
                  icon={<Briefcase size={22}/>} 
                  label="Cán bộ" 
                />
                <RoleCard 
                  active={role === 'individual'} 
                  onClick={() => setRole('individual')} 
                  icon={<User size={22}/>} 
                  label="Cá nhân" 
                />
              </div>
            </div>

            {/* CÁC TRƯỜNG NHẬP LIỆU ĐỘNG (MSSV VS MSNV) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <InputField label="Họ và tên đầy đủ *" placeholder="Nguyễn Văn An" />
              <InputField label={`Email ${accountType === 'admin' ? 'quản trị' : 'cá nhân'} *`} placeholder="name@example.com" />
              
              <InputField 
                label={accountType === 'admin' ? "Tên doanh nghiệp / Trường học *" : "Trường học / Đơn vị công tác *"} 
                placeholder="Ví dụ: Đại học Bách Khoa" 
              />
              
              <InputField 
                label={role === 'student' ? "Mã số sinh viên (MSSV) *" : "Mã định danh (MSNV/Khác)"} 
                placeholder={role === 'student' ? "VD: 2100xxxx" : "VD: NV-00123"} 
              />
            </div>

            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-black py-5 rounded-3xl shadow-2xl shadow-blue-900/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs">
              {accountType === 'admin' ? 'Khởi tạo hệ thống quản trị' : 'Xác nhận & Bắt đầu ngay'}
              <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-green-600" />
              Bảo mật dữ liệu chuẩn ISO 27001
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- Component phụ trợ --- */
const RoleCard = ({ active, onClick, icon, label }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer p-5 rounded-[30px] border-2 transition-all flex flex-col items-center gap-3 text-center ${active ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
  >
    <div className={`p-2.5 rounded-2xl transition-all ${active ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>{icon}</div>
    <span className={`text-[10px] font-black uppercase tracking-tight ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const InputField = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">{label}</label>
    <input type="text" required placeholder={placeholder} className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white outline-none transition-all font-bold text-sm shadow-inner" />
  </div>
);

export default Register;