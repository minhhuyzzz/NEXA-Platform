import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap, Briefcase, CheckCircle2
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  // Giữ nguyên logic phân mục của bạn
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
    <div className="h-screen w-full flex overflow-hidden bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: THIẾT KẾ GỌN GÀNG, KHÔNG CUỘN */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-16 flex-col justify-between relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA" className="h-10 w-auto object-contain" />
            <span className="text-white text-3xl font-bold tracking-tight">NEXA</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white leading-tight tracking-tight uppercase">
              Kích hoạt Hồ sơ <br /> <span className="text-blue-400">Năng lực số</span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-md font-medium leading-relaxed">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội.
            </p>

            {/* QUOTE BOX TINH TẾ */}
            <div className="mt-10 p-8 bg-white/10 backdrop-blur-md rounded-[32px] border border-white/10 max-w-lg shadow-2xl">
              <p className="text-blue-50 italic text-base leading-relaxed mb-6 font-medium">
                "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/50"></div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Chuyên gia NEXA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ĐỐI TÁC GỌN Ở CHÂN TRANG */}
        <div className="relative z-10 text-white/40 font-bold text-[10px] tracking-[0.2em] uppercase">
          Hệ sinh thái đối tác: EDUVN • TECHCORP • OPENDATA
        </div>
      </div>

      {/* CỘT PHẢI: FORM CHUYÊN NGHIỆP, KÍCH THƯỚC CHỮ GỌN */}
      <div className="w-full lg:w-7/12 flex flex-col p-12 justify-center bg-white overflow-y-auto no-scrollbar">
        <div className="max-w-xl mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-8 transition-colors">
            <ChevronLeft size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Trở về</span>
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight uppercase">Thông tin đăng ký</h2>
            <p className="text-slate-400 text-sm font-bold">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* 01. MỤC ĐÍCH ĐĂNG KÝ (Nội dung cũ, Font mới) */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-widest ml-1 italic">01. Mục đích đăng ký?</p>
              <div className="flex p-1 bg-slate-100 rounded-2xl w-fit border border-slate-200">
                <button 
                  type="button" 
                  onClick={() => setAccountType('member')} 
                  className={`px-8 py-2.5 rounded-xl text-[11px] font-bold transition-all ${accountType === 'member' ? 'bg-white shadow-sm text-[#1e3a8a]' : 'text-slate-400'}`}
                >
                  TÔI LÀ THÍ SINH
                </button>
                <button 
                  type="button" 
                  onClick={() => {setAccountType('admin'); setRole('staff');}} 
                  className={`px-8 py-2.5 rounded-xl text-[11px] font-bold transition-all ${accountType === 'admin' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-400'}`}
                >
                  TÔI LÀ QUẢN TRỊ
                </button>
              </div>
            </div>

            {/* 02. NHÓM ĐỐI TƯỢNG */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 italic">02. Bạn thuộc nhóm nào?</p>
              <div className="grid grid-cols-3 gap-3">
                <RoleCard active={role === 'student'} onClick={() => setRole('student')} icon={<GraduationCap size={20}/>} title="Sinh viên" sub="Học tập" />
                <RoleCard active={role === 'staff'} onClick={() => setRole('staff')} icon={<Briefcase size={20}/>} title="Cán bộ" sub="Công ty/Trường" />
                <RoleCard active={role === 'individual'} onClick={() => setRole('individual')} icon={<User size={20}/>} title="Tự do" sub="Cộng đồng" />
              </div>
            </div>

            {/* INPUT FIELDS GỌN GÀNG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <InputGroup label="Họ và tên đầy đủ" placeholder="Nguyễn Văn An" />
              <InputGroup label={accountType === 'admin' ? "Email quản trị" : "Email cá nhân"} placeholder="email@domain.com" />
              <InputGroup label={role === 'student' ? "Trường Đại học" : "Tên tổ chức / Đơn vị"} placeholder="Ví dụ: ĐH Bách Khoa" />
              <InputGroup label={role === 'student' ? "Mã sinh viên (MSSV)" : "Mã định danh (MSNV)"} placeholder={role === 'student' ? "VD: 2100xxxx" : "VD: NV-00123"} />
            </div>

            <button type="submit" className="w-full bg-[#3b66f5] hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs">
              {accountType === 'admin' ? 'Khởi tạo hệ thống Nexa' : 'Xác nhận & Bắt đầu ngay'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="text-center pt-2">
              <p className="text-[10px] text-slate-400 font-bold uppercase flex items-center justify-center gap-1.5 tracking-wider">
                <ShieldCheck size={14} className="text-green-600" /> Bảo mật chuẩn quốc tế ISO 27001
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- COMPONENTS PHỤ TRỢ TINH GỌN --- */

const RoleCard = ({ active, onClick, icon, title, sub }) => (
  <div onClick={onClick} className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1.5 text-center group ${active ? 'border-[#1e3a8a] bg-blue-50/30 shadow-sm' : 'border-slate-50 bg-white hover:border-slate-200'}`}>
    <div className={`p-2 rounded-xl transition-all ${active ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>{icon}</div>
    <div className="leading-tight">
      <p className={`text-[10px] font-bold uppercase tracking-tighter ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{title}</p>
      <p className="text-[8px] font-bold text-slate-400 mt-0.5 uppercase">{sub}</p>
    </div>
  </div>
);

const InputGroup = ({ label, placeholder }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 italic">{label} *</label>
    <input type="text" required placeholder={placeholder} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white outline-none transition-all font-bold text-sm placeholder:text-slate-300 shadow-inner" />
  </div>
);

export default Register;