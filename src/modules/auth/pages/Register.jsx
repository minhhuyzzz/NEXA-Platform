import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, GraduationCap 
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const Register = () => {
  const navigate = useNavigate();
  // Ba vai trò: 'business', 'school', 'individual'
  const [role, setRole] = useState('school'); 

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  // Hàm trả về Label động dựa trên vai trò
  const getDynamicLabels = () => {
    switch(role) {
      case 'business':
        return { org: "Tên doanh nghiệp", id: "Mã nhân viên (MSNV)", unit: "Phòng ban" };
      case 'school':
        return { org: "Trường Đại học / Cao đẳng", id: "Mã sinh viên (MSSV)", unit: "Khoa / Lớp" };
      default:
        return { org: "Đơn vị công tác", id: "Mã định danh", unit: "Bộ phận" };
    }
  };

  const labels = getDynamicLabels();

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      
      {/* CỘT TRÁI: THÔNG ĐIỆP THƯƠNG HIỆU (Màu xanh Navy trầm) */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1e3a8a] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 rounded-full -mr-40 -mt-40 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <img src={LOGO_URL} alt="NEXA Logo" className="h-10 w-auto object-contain" />
            <span className="text-white text-3xl font-black tracking-tighter">NEXA</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Kích hoạt Hồ sơ <br /> Năng lực số
          </h1>
          <p className="text-blue-100/80 text-lg max-w-md leading-relaxed">
            Tham gia cộng đồng học tập số lớn nhất Việt Nam. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội.
          </p>

          <div className="mt-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <p className="text-blue-50 italic text-sm leading-relaxed mb-4">
              "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center border border-white/10 text-blue-200 text-xs font-bold">NX</div>
              <div>
                <p className="text-white font-bold text-sm">Chuyên gia NEXA</p>
                <p className="text-blue-300/60 text-xs font-medium">Hội đồng cố vấn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-blue-300/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Hệ sinh thái đối tác</p>
          <div className="flex gap-8 opacity-40 grayscale brightness-200 text-white font-bold text-[11px]">
            <span>EDU.VN</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ CHI TIẾT */}
      <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-12 xl:p-16 justify-center bg-slate-50/50">
        <div className="max-w-xl mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-[#1e3a8a] transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-tight">Quay lại trang chủ</span>
          </button>

          <h2 className="text-3xl font-black text-slate-900 mb-2">Thông tin đăng ký</h2>
          <p className="text-slate-500 mb-8 font-medium">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* PHÂN LOẠI 3 ĐỐI TƯỢNG (Tách Doanh nghiệp & Trường học) */}
            <div className="space-y-3">
              <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider ml-1">Bạn là đối tượng nào?</p>
              <div className="grid grid-cols-3 gap-3">
                {/* Lựa chọn Sinh viên/Trường học */}
                <div 
                  onClick={() => setRole('school')}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 text-center ${role === 'school' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2 rounded-xl ${role === 'school' ? 'bg-[#1e3a8a] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <GraduationCap size={20} />
                  </div>
                  <span className={`text-[11px] font-black leading-tight ${role === 'school' ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>Sinh viên /<br/>Trường học</span>
                </div>

                {/* Lựa chọn Doanh nghiệp */}
                <div 
                  onClick={() => setRole('business')}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 text-center ${role === 'business' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2 rounded-xl ${role === 'business' ? 'bg-[#1e3a8a] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Building2 size={20} />
                  </div>
                  <span className={`text-[11px] font-black leading-tight ${role === 'business' ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>Cán bộ /<br/>Doanh nghiệp</span>
                </div>

                {/* Lựa chọn Cộng đồng */}
                <div 
                  onClick={() => setRole('individual')}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 text-center ${role === 'individual' ? 'border-[#1e3a8a] bg-blue-50 ring-4 ring-blue-900/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                }
                  <div className={`p-2 rounded-xl ${role === 'individual' ? 'bg-[#1e3a8a] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <User size={20} />
                  </div>
                  <span className={`text-[11px] font-black leading-tight ${role === 'individual' ? 'text-[#1e3a8a]' : 'text-slate-500'}`}>Cá nhân /<br/>Tự do</span>
                </div>
              </div>
            </div>

            {/* TRƯỜNG NHẬP LIỆU ĐỘNG */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-700 ml-1 uppercase">Họ và tên đầy đủ <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Ví dụ: Nguyễn Văn An" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-700 ml-1 uppercase">Email {role === 'individual' ? 'cá nhân' : 'tổ chức'} <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="email" required placeholder="name@domain.com" className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                </div>
              </div>

              {/* Hàng trường dữ liệu biến đổi theo Role */}
              {role !== 'individual' && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-slate-700 ml-1 uppercase">{labels.org} <span className="text-red-500">*</span></label>
                    <input type="text" required placeholder="Ví dụ: ĐH Bách Khoa" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-slate-700 ml-1 uppercase">{labels.id}</label>
                    <input type="text" placeholder="VD: CB-001 hoặc SV-001" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all shadow-sm font-medium" />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group transition-all active:scale-[0.98] uppercase tracking-wider text-sm mt-4">
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