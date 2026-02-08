import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap, Briefcase, ChevronDown, CreditCard
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // 'student', 'staff', 'community'

  const handleRegister = (e) => {
    e.preventDefault();
    if (role === 'community') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: NHẬN DIỆN THƯƠNG HIỆU (Tỉ lệ 5/12) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-16 flex-col justify-between relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA" className="h-10 w-auto object-contain" />
            <span className="text-white text-3xl font-bold tracking-tight">NEXA</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white leading-tight tracking-tight">
              Kích hoạt Hồ sơ <br /> Năng lực số
            </h1>
            <p className="text-blue-100/90 text-lg max-w-md font-normal leading-relaxed">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội.
            </p>

            {/* QUOTE BOX */}
            <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 max-w-md">
              <p className="text-blue-50 italic text-base leading-relaxed mb-6">
                "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/50"></div>
                <div>
                  <p className="text-white font-bold text-sm">Chuyên gia NEXA</p>
                  <p className="text-blue-300/60 text-[11px] font-semibold uppercase tracking-wider">Hội đồng cố vấn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ĐỐI TÁC */}
        <div className="relative z-10 pt-10">
          <p className="text-blue-300/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Hệ sinh thái đối tác</p>
          <div className="flex gap-8 opacity-40 grayscale brightness-200 text-white font-bold text-xs">
            <span>EDUVN</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ (Tỉ lệ 7/12) */}
      <div className="w-full lg:w-7/12 flex flex-col p-12 justify-center bg-white overflow-y-auto no-scrollbar">
        <div className="max-w-xl mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] mb-10 transition-colors">
            <ChevronLeft size={16} />
            <span className="text-xs font-bold">Quay lại trang chủ</span>
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Thông tin đăng ký</h2>
            <p className="text-slate-400 text-sm font-medium">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* LỰA CHỌN VAI TRÒ (Sinh viên, Giảng viên, Cộng đồng) */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-700">Bạn là đối tượng nào?</p>
              <div className="grid grid-cols-3 gap-4">
                <RoleCard 
                  active={role === 'student'} 
                  onClick={() => setRole('student')} 
                  icon={<GraduationCap size={22}/>} 
                  title="Sinh viên" 
                  sub="Đại học / Cao đẳng" 
                />
                <RoleCard 
                  active={role === 'staff'} 
                  onClick={() => setRole('staff')} 
                  icon={<Briefcase size={22}/>} 
                  title="Giảng viên" 
                  sub="Cán bộ / Nhân viên" 
                />
                <RoleCard 
                  active={role === 'community'} 
                  onClick={() => setRole('community')} 
                  icon={<User size={22}/>} 
                  title="Cộng đồng" 
                  sub="Tự do / Doanh nghiệp" 
                />
              </div>
            </div>

            {/* CÁC TRƯỜNG NHẬP LIỆU GỌN GÀNG */}
            <div className="space-y-4">
              <InputGroup 
                label="Họ và tên đầy đủ" 
                icon={<User size={18} className="text-slate-400" />} 
                placeholder="Ví dụ: Nguyễn Văn An" 
              />
              
              <div className="space-y-1">
                <InputGroup 
                  label="Email tổ chức / trường học" 
                  icon={<Mail size={18} className="text-slate-400" />} 
                  placeholder="email@domain.com" 
                />
                <p className="text-[11px] text-slate-400 font-medium ml-1">Ưu tiên email đuôi .edu.vn</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Trường Đại học *</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl appearance-none focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-600">
                      <option>Chọn đơn vị...</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                </div>
                <InputGroup 
                  label="Mã số sinh viên (MSSV)" 
                  icon={<CreditCard size={18} className="text-slate-400" />} 
                  placeholder="VD: 2100xxxx" 
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#3b66f5] hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all group">
              Xác nhận & Bắt đầu
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-[11px] text-slate-400 font-medium pt-2">
              Dữ liệu của bạn được bảo mật theo tiêu chuẩn ISO 27001.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- COMPONENTS PHỤ TRỢ --- */

const RoleCard = ({ active, onClick, icon, title, sub }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 text-center ${active ? 'border-blue-600 bg-blue-50/30 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
  >
    <div className={`p-2.5 rounded-full transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
      {icon}
    </div>
    <div className="space-y-0.5">
      <p className={`text-sm font-bold ${active ? 'text-blue-700' : 'text-slate-700'}`}>{title}</p>
      <p className="text-[10px] text-slate-400 font-semibold">{sub}</p>
    </div>
  </div>
);

const InputGroup = ({ label, icon, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700">{label} *</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">{icon}</div>
      <input 
        type="text" 
        required 
        placeholder={placeholder} 
        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-medium text-sm placeholder:text-slate-300" 
      />
    </div>
  </div>
);

export default Register;