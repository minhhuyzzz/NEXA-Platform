import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, User, Mail, ShieldCheck, 
  ChevronLeft, ArrowRight, CheckCircle2 
} from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('organization'); // 'organization' hoặc 'individual'

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      
      {/* CỘT TRÁI: THÔNG ĐIỆP & THƯƠNG HIỆU (Layout giống image_c1f722.png) */}
      <div className="hidden lg:flex lg:w-5/12 bg-blue-600 p-12 flex-col justify-between relative overflow-hidden">
        {/* Trang trí nền */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-blue-600 text-xl">N</div>
            <span className="text-white text-2xl font-bold tracking-tight">NEXA</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Kích hoạt Hồ sơ <br /> Năng lực số
          </h1>
          <p className="text-blue-100 text-lg max-w-md leading-relaxed">
            Tham gia cộng đồng học tập số lớn nhất. Định vị bản thân, phát triển kỹ năng và kết nối cơ hội cùng DigComp 2.2.
          </p>

          {/* Blockquote chuyên gia */}
          <div className="mt-12 p-6 bg-blue-700/40 backdrop-blur-md rounded-2xl border border-blue-500/30">
            <p className="text-blue-50 italic text-sm leading-relaxed mb-4">
              "Trong xã hội số, khả năng tự học và thích ứng công nghệ là chìa khóa quan trọng nhất để thành công."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-400 opacity-80"></div>
              <div>
                <p className="text-white font-bold text-sm">Chuyên gia NEXA</p>
                <p className="text-blue-300 text-xs">Hội đồng cố vấn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Đối tác ở chân trang */}
        <div className="relative z-10">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Hệ sinh thái đối tác</p>
          <div className="flex gap-6 opacity-60 grayscale brightness-200 text-white font-bold text-sm">
            <span>ĐẠI HỌC.EDU</span>
            <span>TECHCORP</span>
            <span>OPENDATA</span>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: FORM ĐĂNG KÝ */}
      <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-12 xl:p-20 justify-center bg-slate-50/50">
        <div className="max-w-md mx-auto w-full">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Quay lại trang chủ</span>
          </button>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">Thông tin đăng ký</h2>
          <p className="text-slate-500 mb-8">Chọn vai trò phù hợp để tối ưu hóa bài đánh giá.</p>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* LỰA CHỌN ĐỐI TƯỢNG (Khớp với trang chủ image_b52d1a.png) */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-700">Bạn là đối tượng nào?</p>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setRole('organization')}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${role === 'organization' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2 rounded-lg ${role === 'organization' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Building2 size={20} />
                  </div>
                  <span className={`text-xs font-bold ${role === 'organization' ? 'text-blue-700' : 'text-slate-500'}`}>Doanh nghiệp / Trường học</span>
                </div>

                <div 
                  onClick={() => setRole('individual')}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${role === 'individual' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-2 rounded-lg ${role === 'individual' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <User size={20} />
                  </div>
                  <span className={`text-xs font-bold ${role === 'individual' ? 'text-blue-700' : 'text-slate-500'}`}>Cá nhân / Cộng đồng</span>
                </div>
              </div>
            </div>

            {/* CÁC TRƯỜNG NHẬP LIỆU */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên đầy đủ <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="text" required placeholder="Ví dụ: Nguyễn Văn An" className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Email tổ chức / Trường học <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="email" required placeholder="email@domain.com" className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Đơn vị công tác <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm">
                    <option>Chọn đơn vị...</option>
                    <option>Kỹ thuật</option>
                    <option>Kinh doanh</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mã nhân viên / SV <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="VD: CB00xxxx" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group transition-all active:scale-[0.98]">
              Xác nhận & Bắt đầu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={14} className="text-green-500" />
              Dữ liệu của bạn được bảo mật theo tiêu chuẩn ISO 27001.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;