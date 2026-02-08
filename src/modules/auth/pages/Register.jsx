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
    
    // LẤY DỮ LIỆU THỰC TẾ TỪ FORM
    const formData = new FormData(e.target);
    const userData = {
      fullName: formData.get('fullName'),
      university: formData.get('orgName'),
      role: role
    };

    // LƯU VÀO TRÌNH DUYỆT ĐỂ DASHBOARD LẤY RA
    localStorage.setItem('nexa_user', JSON.stringify(userData));

    if (accountType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user'); 
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: NAVY BLUE */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-16 flex-col justify-between relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-20">
            <img src={LOGO_URL} alt="NEXA" className="h-12 w-auto object-contain" />
            <span className="text-white text-4xl font-[1000] tracking-tighter uppercase italic">Nexa</span>
          </div>
          <div className="space-y-8 text-white">
            <h1 className="text-5xl font-[1000] leading-tight tracking-tight uppercase">
              Kích hoạt Hồ sơ <br /> <span className="text-blue-400">Năng lực số</span>
            </h1>
            <p className="text-blue-100/80 text-xl max-w-md font-medium leading-relaxed">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân và kết nối cơ hội.
            </p>
          </div>
        </div>
        <div className="relative z-10 text-white/40 font-black text-[10px] tracking-[0.3em] uppercase">
          Hệ sinh thái đối tác: Eduvn • Techcorp • Opendata
        </div>
      </div>

      {/* CỘT PHẢI: CĂN GIỮA - CHỮ TO - BLACK 1000 */}
      <div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-12 bg-[#F8FAFC]">
        <div className="max-w-xl mx-auto w-full">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-8 transition-all font-black uppercase text-xs">
            <ChevronLeft size={18} /> Quay lại trang chủ
          </button>

          <div className="mb-10">
            <h2 className="text-4xl font-[1000] text-slate-900 mb-2 tracking-tighter uppercase">Thông tin đăng ký</h2>
            <p className="text-slate-500 text-base font-bold">Vui lòng điền đúng thông tin để cấp chứng chỉ chính xác.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-xs font-[1000] text-[#1e3a8a] uppercase tracking-widest ml-1">01. Mục đích đăng ký?</p>
              <div className="flex p-1.5 bg-slate-200/50 rounded-2xl w-fit border border-slate-200">
                <button type="button" onClick={() => setAccountType('member')} className={`px-10 py-3.5 rounded-xl text-xs font-[1000] transition-all ${accountType === 'member' ? 'bg-white shadow-xl text-[#1e3a8a]' : 'text-slate-400'}`}>TÔI LÀ THÍ SINH</button>
                <button type="button" onClick={() => {setAccountType('admin'); setRole('staff');}} className={`px-10 py-3.5 rounded-xl text-xs font-[1000] transition-all ${accountType === 'admin' ? 'bg-[#1e3a8a] text-white shadow-xl' : 'text-slate-400'}`}>TÔI LÀ QUẢN TRỊ</button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-[1000] text-slate-400 uppercase tracking-widest ml-1">02. Bạn thuộc nhóm nào?</p>
              <div className="grid grid-cols-3 gap-4">
                <RoleCard active={role === 'student'} onClick={() => setRole('student')} icon={<GraduationCap size={24}/>} title="Sinh viên" sub="Học tập" />
                <RoleCard active={role === 'staff'} onClick={() => setRole('staff')} icon={<Briefcase size={24}/>} title="Cán bộ" sub="Đơn vị" />
                <RoleCard active={role === 'individual'} onClick={() => setRole('individual')} icon={<User size={24}/>} title="Tự do" sub="Cộng đồng" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup name="fullName" label="Họ và tên đầy đủ" placeholder="Ví dụ: Trần Minh Huy" />
              <InputGroup name="email" label="Email" placeholder="email@domain.com" />
              <InputGroup name="orgName" label={role === 'student' ? "Trường Đại học" : "Tên tổ chức"} placeholder="Ví dụ: Đại học Công nghiệp" />
              <InputGroup name="idCode" label={role === 'student' ? "Mã sinh viên (MSSV)" : "Mã định danh"} placeholder="VD: 2100xxxx" />
            </div>

            <button type="submit" className="w-full bg-[#3b66f5] hover:bg-blue-700 text-white font-[1000] py-6 rounded-[24px] shadow-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-[0.2em] text-xs">
              Xác nhận & Bắt đầu ngay <ArrowRight size={22} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const RoleCard = ({ active, onClick, icon, title, sub }) => (
  <div onClick={onClick} className={`cursor-pointer p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-2 text-center ${active ? 'border-[#1e3a8a] bg-white shadow-2xl scale-105' : 'border-slate-100 bg-white hover:border-slate-300'}`}>
    <div className={`p-3 rounded-2xl ${active ? 'bg-[#1e3a8a] text-white' : 'bg-slate-50 text-slate-300'}`}>{icon}</div>
    <p className={`text-[11px] font-[1000] uppercase ${active ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>{title}</p>
    <p className="text-[9px] font-black text-slate-400 uppercase">{sub}</p>
  </div>
);

const InputGroup = ({ label, placeholder, name }) => (
  <div className="space-y-3">
    <label className="text-[11px] font-[1000] text-slate-500 uppercase tracking-widest ml-1">{label} *</label>
    <input name={name} required type="text" placeholder={placeholder} className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-[20px] focus:border-[#1e3a8a] outline-none font-black text-sm shadow-sm" />
  </div>
);

export default Register;