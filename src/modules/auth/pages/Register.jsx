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
    <div className="h-screen w-full flex overflow-hidden bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: NHẬN DIỆN THƯƠNG HIỆU (Navy Blue #1e3a8a) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-16 flex-col justify-between relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-20">
            <img src={LOGO_URL} alt="NEXA" className="h-12 w-auto object-contain" />
            <span className="text-white text-4xl font-[1000] tracking-tighter uppercase">Nexa</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl font-[1000] text-white leading-tight tracking-tight uppercase">
              Kích hoạt Hồ sơ <br /> <span className="text-blue-400">Năng lực số</span>
            </h1>
            <p className="text-blue-100/80 text-xl max-w-md font-medium leading-relaxed">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội.
            </p>

            <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 shadow-2xl max-w-lg">
              <p className="text-blue-50 text-base leading-relaxed mb-6 font-medium">
                "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
              </p>
              <div className="flex items-center gap-3 font-bold">
                <div className="w-10 h-10 rounded-full bg-blue-400/50"></div>
                <p className="text-white text-sm uppercase tracking-wider">Chuyên gia NEXA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/40 font-black text-[10px] tracking-[0.3em] uppercase">
          Hệ sinh thái đối tác: Eduvn • Techcorp • Opendata
        </div>
      </div>

      {/* CỘT PHẢI: CĂN GIỮA TUYỆT ĐỐI - KHÔNG IN NGHIÊNG - CHỮ TO RÕ */}
      <div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-12 bg-[#F8FAFC]">
        <div className="max-w-xl mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-8 transition-all group">
            <ChevronLeft size={18} className="group-hover:-translate-x-1" />
            <span className="text-xs font-black uppercase tracking-widest">Quay lại trang chủ</span>
          </button>

          <div className="mb-10">
            <h2 className="text-4xl font-[1000] text-slate-900 mb-2 tracking-tighter uppercase">Thông tin đăng ký</h2>
            <p className="text-slate-500 text-base font-bold">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-8">
            
            {/* 01. MỤC ĐÍCH ĐĂNG KÝ (To, rõ, không in nghiêng) */}
            <div className="space-y-4">
              <p className="text-xs font-[1000] text-[#1e3a8a] uppercase tracking-widest ml-1">01. Mục đích đăng ký?</p>
              <div className="flex p-1.5 bg-slate-200/50 rounded-2xl w-fit border border-slate-200">
                <button 
                  type="button" 
                  onClick={() => setAccountType('member')} 
                  className={`px-10 py-3.5 rounded-xl text-xs font-[1000] transition-all ${accountType === 'member' ? 'bg-white shadow-xl text-[#1e3a8a]' : 'text-slate-400'}`}
                >
                  TÔI LÀ THÍ SINH
                </button>
                <button 
                  type="button" 
                  onClick={() => {setAccountType('admin'); setRole('staff');}} 
                  className={`px-10 py-3.5 rounded-xl text-xs font-[1000] transition-all ${accountType === 'admin' ? 'bg-[#1e3a8a] text-white shadow-xl' : 'text-slate-400'}`}
                >
                  TÔI LÀ QUẢN TRỊ
                </button>
              </div>
            </div>

            {/* 02. NHÓM ĐỐI TƯỢNG (Thẻ to rõ) */}
            <div className="space-y-4">
              <p className="text-xs font-[1000] text-slate-400 uppercase tracking-widest ml-1">02. Bạn thuộc nhóm nào?</p>
              <div className="grid grid-cols-3 gap-4">
                <RoleCard active={role === 'student'} onClick={() => setRole('student')} icon={<GraduationCap size={24}/>} title="Sinh viên" sub="Học tập" />
                <RoleCard active={role === 'staff'} onClick={() => setRole('staff')} icon={<Briefcase size={24}/>} title="Cán bộ" sub="Đơn vị" />
                <RoleCard active={role === 'individual'} onClick={() => setRole('individual')} icon={<User size={24}/>} title="Tự do" sub="Cộng đồng" />
              </div>
            </div>

            {/* INPUT FIELDS (Chữ to, Font Black, Không nghiêng) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <InputGroup label="Họ và tên đầy đủ" placeholder="Nguyễn Văn An" />
              <InputGroup label={accountType === 'admin' ? "Email quản trị" : "Email cá nhân"} placeholder="email@domain.com" />
              <InputGroup label={role === 'student' ? "Trường Đại học" : "Tên tổ chức"} placeholder="Ví dụ: ĐH Bách Khoa" />
              <InputGroup label={role === 'student' ? "Mã sinh viên (MSSV)" : "Mã định danh (MSNV)"} placeholder={role === 'student' ? "VD: 2100xxxx" : "VD: NV-00123"} />
            </div>

            <button type="submit" className="w-full bg-[#3b66f5] hover:bg-blue-700 text-white font-[1000] py-6 rounded-[24px] shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs">
              {accountType === 'admin' ? 'Khởi tạo hệ thống Nexa' : 'Xác nhận & Bắt đầu ngay'}
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="text-center pt-2">
              <p className="text-[11px] text-slate-400 font-black uppercase flex items-center justify-center gap-2 tracking-wider">
                <ShieldCheck size={16} className="text-green-600" /> Bảo mật chuẩn quốc tế ISO 27001
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- COMPONENTS PHỤ TRỢ (Đã xóa in nghiêng, tăng kích thước) --- */

const RoleCard = ({ active, onClick, icon, title, sub }) => (
  <div onClick={onClick} className={`cursor-pointer p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-2 text-center group ${active ? 'border-[#1e3a8a] bg-white shadow-2xl shadow-blue-900/10 scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}>
    <div className={`p-3 rounded-2xl transition-all ${active ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>{icon}</div>
    <div className="leading-tight">
      <p className={`text-[11px] font-[1000] uppercase tracking-tighter ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{title}</p>
      <p className="text-[9px] font-black text-slate-400 mt-1 uppercase tracking-tighter">{sub}</p>
    </div>
  </div>
);

const InputGroup = ({ label, placeholder }) => (
  <div className="space-y-3">
    <label className="text-[11px] font-[1000] text-slate-500 uppercase tracking-widest ml-1">{label} *</label>
    <input 
      type="text" 
      required 
      placeholder={placeholder} 
      className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-[20px] focus:ring-4 focus:ring-blue-900/5 focus:border-[#1e3a8a] outline-none transition-all font-black text-sm placeholder:text-slate-300 shadow-sm" 
    />
  </div>
);

export default Register;