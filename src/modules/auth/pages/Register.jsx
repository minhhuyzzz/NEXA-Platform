import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  // Ba vai trò: 'school', 'business', 'individual'
  const [role, setRole] = useState('school'); 

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  // Logic nhãn động để phân biệt MSSV và MSNV
  const labels = {
    school: { org: "Trường Đại học / Cao đẳng", id: "Mã sinh viên (MSSV)", unit: "Khoa / Lớp" },
    business: { org: "Tên doanh nghiệp / Tổ chức", id: "Mã nhân viên (MSNV)", unit: "Phòng ban" },
    individual: { org: "Đơn vị công tác", id: "Mã định danh", unit: "Bộ phận" }
  };

  const currentLabels = labels[role];

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-900">
      
      {/* CỘT TRÁI: THÔNG ĐIỆP THƯƠNG HIỆU (Navy Blue #1e3a8a) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA Logo" className="h-10 w-auto object-contain" />
            <span className="text-white text-3xl font-black tracking-tighter">NEXA</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 uppercase tracking-tight">
            Kích hoạt Hồ sơ <br /> Năng lực số
          </h1>
          <p className="text-blue-100/80 text-lg max-w-md leading-relaxed font-medium">
            Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân và kết nối cơ hội cùng DigComp 2.2.
          </p>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            <p className="text-blue-50 italic text-sm leading-relaxed mb-6 font-medium">
              "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#1e40af] flex items-center justify-center border border-white/20 text-blue-200 text-xs font-black shadow-inner">NX</div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-wider">Chuyên gia NEXA</p>
                <p className="text-blue-300/60 text-[10px] font-bold uppercase tracking-widest">Hội đồng cố vấn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-blue-300/40 text-[10px] font-black uppercase tracking-[0.3em] mb-5">Hệ sinh thái đối tác</p>
          <div className="flex gap-8 opacity-40 grayscale brightness-200 text-white font-black text-[11px] tracking-tighter">
            <span>EDU.VN</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ CHI TIẾT */}
      <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-12 xl:p-16 justify-center bg-slate-50/50">
        <div className="max-w-xl mx-auto w-full bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-slate-100">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Quay lại trang chủ</span>
          </button>

          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Thông tin đăng ký</h2>
          <p className="text-slate-500 mb-8 font-semibold text-sm">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* PHÂN LOẠI 3 ĐỐI TƯỢNG */}
            <div className="space-y-4">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Bạn là đối tượng nào?</p>
              <div className="grid grid-cols-3 gap-3">
                {/* 1. Sinh viên */}
                <div 
                  onClick={() => setRole('school')}
                  className={`cursor-pointer p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 text-center group ${role === 'school' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2.5 rounded-2xl transition-all ${role === 'school' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                    <GraduationCap size={22} />
                  </div>
                  <span className={`text-[10px] font-black leading-tight uppercase tracking-tight ${role === 'school' ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>Sinh viên /<br/>Học sinh</span>
                </div>

                {/* 2. Doanh nghiệp */}
                <div 
                  onClick={() => setRole('business')}
                  className={`cursor-pointer p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 text-center group ${role === 'business' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2.5 rounded-2xl transition-all ${role === 'business' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                    <Building2 size={22} />
                  </div>
                  <span className={`text-[10px] font-black leading-tight uppercase tracking-tight ${role === 'business' ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>Cán bộ /<br/>Nhân viên</span>
                </div>

                {/* 3. Cá nhân */}
                <div 
                  onClick={() => setRole('individual')}
                  className={`cursor-pointer p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 text-center group ${role === 'individual' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2.5 rounded-2xl transition-all ${role === 'individual' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                    <User size={22} />
                  </div>
                  <span className={`text-[10px] font-black leading-tight uppercase tracking-tight ${role === 'individual' ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>Cá nhân /<br/>Cộng đồng</span>
                </div>
              </div>
            </div>

            {/* CÁC TRƯỜNG DỮ LIỆU ĐỘNG */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">Họ và tên <span className="text-red-500">*</span></label>
                  <input type="text" required placeholder="Nguyễn Văn An" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all font-bold text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">Email {role === 'individual' ? 'cá nhân' : 'tổ chức'} *</label>
                  <input type="email" required placeholder="name@domain.com" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all font-bold text-sm" />
                </div>
              </div>

              {role !== 'individual' && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-500">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">{currentLabels.org} *</label>
                    <input type="text" required placeholder="Ví dụ: ĐH Bách Khoa" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all font-bold text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">{currentLabels.id}</label>
                    <input type="text" placeholder="SV-001 / NV-001" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all font-bold text-sm" />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-black py-5 rounded-[20px] shadow-2xl shadow-blue-900/20 flex items-center justify-center gap-3 group transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs mt-4">
              Xác nhận & Bắt đầu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-[10px] text-slate-400 mt-6 flex items-center justify-center gap-2 font-bold uppercase tracking-tighter">
              <ShieldCheck size={14} className="text-green-600" />
              Bảo mật theo tiêu chuẩn quốc tế ISO 27001
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;