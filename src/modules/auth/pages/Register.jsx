import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, ChevronLeft, ArrowRight, GraduationCap, Briefcase, Building2
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); 
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập delay
    setTimeout(() => {
        setIsLoading(false);

        // LẤY DỮ LIỆU TỪ FORM
        const formData = new FormData(e.target);
        const userData = {
            fullName: formData.get('fullName'),
            university: formData.get('orgName'),
            role: role
        };

        // LƯU VÀO STORAGE
        localStorage.setItem('nexa_user', JSON.stringify(userData));
        localStorage.setItem('nexa_role', role === 'student' ? 'user' : 'admin'); // Giả lập role logic

        // CHUYỂN HƯỚNG
        if (role === 'student') {
            navigate('/user/dashboard');
        } else {
            navigate('/admin');
        }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f8fafc] font-sans text-slate-900">
      
      {/* CỘT TRÁI: NAVY BLUE (Giữ nguyên concept nhưng clean hơn) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#0f172a] p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16 cursor-pointer" onClick={() => navigate('/')}>
            <img src={LOGO_URL} alt="NEXA" className="h-10 w-10 rounded-xl object-cover" />
            <span className="text-white text-2xl font-black tracking-tight">NEXA</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white">
              Kích hoạt <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hồ sơ Năng lực số</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">
              Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân và kết nối cơ hội nghề nghiệp toàn cầu.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Eduvn Partner</span> • <span>Techcorp</span> • <span>Opendata</span>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center p-8 lg:p-16 relative">
        <button onClick={() => navigate('/')} className="absolute top-8 left-8 lg:left-16 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-all font-bold text-sm group">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Quay lại trang chủ
        </button>

        <div className="max-w-2xl mx-auto w-full pt-12">
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">Tạo tài khoản mới</h2>
            <p className="text-slate-500 text-lg">Điền thông tin để bắt đầu hành trình của bạn.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-8">
            
            {/* CHỌN VAI TRÒ */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bạn là ai?</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RoleCard 
                    active={role === 'student'} 
                    onClick={() => setRole('student')} 
                    icon={<GraduationCap size={24}/>} 
                    title="Sinh viên" 
                    desc="Học tập & Rèn luyện" 
                />
                <RoleCard 
                    active={role === 'staff'} 
                    onClick={() => setRole('staff')} 
                    icon={<Briefcase size={24}/>} 
                    title="Giảng viên" 
                    desc="Quản lý & Đào tạo" 
                />
                <RoleCard 
                    active={role === 'admin'} 
                    onClick={() => setRole('admin')} 
                    icon={<Building2 size={24}/>} 
                    title="Tổ chức" 
                    desc="Doanh nghiệp/Trường" 
                />
              </div>
            </div>

            {/* INPUT FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Họ và tên</label>
                <input name="fullName" required type="text" placeholder="Nguyễn Văn A" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 placeholder:font-normal transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
                <input name="email" required type="email" placeholder="email@domain.com" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 placeholder:font-normal transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{role === 'student' ? 'Trường Đại học' : 'Tên Tổ chức'}</label>
                <input name="orgName" required type="text" placeholder="VD: ĐH Công Thương" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 placeholder:font-normal transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{role === 'student' ? 'Mã sinh viên' : 'Mã định danh'}</label>
                <input name="idCode" required type="text" placeholder="VD: 2024xxxx" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 placeholder:font-normal transition-all" />
              </div>
            </div>

            {/* BUTTON SUBMIT */}
            <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all active:scale-[0.99]"
            >
              {isLoading ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                  <>Hoàn tất đăng ký <ArrowRight size={20} /></>
              )}
            </button>

            <p className="text-center text-slate-500 font-medium">
                Đã có tài khoản? <span onClick={() => navigate('/login')} className="text-blue-600 font-bold cursor-pointer hover:underline">Đăng nhập ngay</span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

// Sub-component cho thẻ chọn vai trò
const RoleCard = ({ active, onClick, icon, title, desc }) => (
  <div 
    onClick={onClick} 
    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col gap-3
    ${active 
        ? 'border-blue-600 bg-blue-50/50 shadow-md transform scale-[1.02]' 
        : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm'}`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
        {icon}
    </div>
    <div>
        <h3 className={`font-black text-sm uppercase ${active ? 'text-blue-700' : 'text-slate-700'}`}>{title}</h3>
        <p className="text-xs font-medium text-slate-400 mt-1">{desc}</p>
    </div>
  </div>
);

export default Register;