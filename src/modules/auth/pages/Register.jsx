import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('organization');

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      
      {/* CỘT TRÁI: TÔNG MÀU XANH TRẦM (NAVY/DEEP BLUE) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-12 flex-col justify-between relative overflow-hidden">
        {/* Hiệu ứng nền chìm sang trọng */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full -ml-32 -mb-32 opacity-10"></div>
        
        <div className="relative z-10">
          {/* LOGO CHÍNH THỨC */}
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA Logo" className="h-10 w-auto object-contain" />
            <span className="text-white text-3xl font-black tracking-tighter">NEXA</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Kích hoạt Hồ sơ <br /> Năng lực số
          </h1>
          <p className="text-blue-100/80 text-lg max-w-md leading-relaxed">
            Tham gia cộng đồng học tập số lớn nhất. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội cùng DigComp 2.2.
          </p>

          {/* Trích dẫn chuyên gia */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <p className="text-blue-50 italic text-sm leading-relaxed mb-4">
              "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center border border-white/10">
                <User className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Chuyên gia NEXA</p>
                <p className="text-blue-300/60 text-xs font-medium">Hội đồng cố vấn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hệ sinh thái đối tác */}
        <div className="relative z-10">
          <p className="text-blue-300/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Hệ sinh thái đối tác</p>
          <div className="flex gap-8 opacity-40 grayscale brightness-200 text-white font-bold text-[11px]">
            <span>ĐẠI HỌC.EDU</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM NHẬP LIỆU */}
      <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-12 xl:p-20 justify-center bg-slate-50">
        <div className="max-w-md mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] transition-colors mb-10 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Quay lại trang chủ</span>
          </button>

          <h2 className="text-3xl font-black text-slate-900 mb-2">Thông tin đăng ký</h2>
          <p className="text-slate-500 mb-8 font-medium">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* Lựa chọn đối tượng (Dựa trên image_c1fb1e.png) */}
            <div className="space-y-3">
              <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider ml-1">Bạn là đối tượng nào?</p>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setRole('organization')}
                  className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${role === 'organization' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${role === 'organization' ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                    <Building2 size={22} />
                  </div>
                  <span className={`text-[12px] font-black text-center leading-tight ${role === 'organization' ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>Doanh nghiệp &<br/>Trường học</span>
                </div>

                <div 
                  onClick={() => setRole('individual')}
                  className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${role === 'individual' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${role === 'individual' ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'}`}>
                    <User size={22} />
                  </div>
                  <span className={`text-[12px] font-black text-center leading-tight ${role === 'individual' ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>Cá nhân &<br/>Cộng đồng</span>
                </div>
              </div>
            </div>

            {/* Các trường nhập liệu */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 ml-1 uppercase">Họ và tên đầy đủ <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" required placeholder="Ví dụ: Nguyễn Văn An" className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 ml-1 uppercase">Email {role === 'organization' ? 'tổ chức' : 'cá nhân'} <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="email" required placeholder="name@domain.com" className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                </div>
              </div>

              {role === 'organization' && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-700 ml-1 uppercase">Đơn vị công tác</label>
                    <select className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium text-slate-600 appearance-none">
                      <option>Chọn đơn vị...</option>
                      <option>Khối văn phòng</option>
                      <option>Khối kỹ thuật</option>
                      <option>Khối quản lý</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-700 ml-1 uppercase">Mã định danh</label>
                    <input type="text" placeholder="VD: CB-001" className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                  </div>
                </div>
              )}
            </div>

            {/* NÚT XÁC NHẬN MÀU XANH TRẦM */}
            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group transition-all active:scale-[0.98] uppercase tracking-wider text-sm">
              Xác nhận & Bắt đầu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-[10px] text-slate-400 mt-6 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-green-600" />
              Dữ liệu của bạn được bảo mật theo tiêu chuẩn ISO 27001.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;