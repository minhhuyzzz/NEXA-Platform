import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TrendingUp, Users, Award, CheckCircle2, Zap, Briefcase, GraduationCap, Building2, Menu, X } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const BenefitsPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* HEADER */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm' : 'bg-white/90 backdrop-blur-md border-b border-slate-100'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={LOGO_URL} alt="NEXA" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            <span className="text-2xl font-bold text-slate-800 tracking-tight">NEXA</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Trang chủ</Link>
            <Link to="/solutions" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Giải pháp</Link>
            <Link to="/benefits" className="text-sm font-bold text-blue-600 transition">Lợi ích</Link>
            <Link to="/testimonials" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Đánh giá</Link>
            <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Về chúng tôi</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition shadow-lg">Đăng nhập</button>
             <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-blue-50 to-white text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-8 uppercase tracking-wider">
            <TrendingUp size={14} /> Hiệu quả đầu tư (ROI) vượt trội
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Giá trị thực tiễn <br/> <span className="text-blue-600">Đo lường được</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            NEXA không chỉ cung cấp chứng chỉ. Chúng tôi mang đến sự chuyển đổi về chất lượng nhân sự và cơ hội nghề nghiệp.
        </p>
      </section>

      {/* FOR STUDENTS */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                    <GraduationCap size={28} />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Dành cho Cá nhân</h2>
                <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Định vị bản thân</h4>
                            <p className="text-slate-600">Biết chính xác điểm mạnh/yếu của mình so với thị trường lao động.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Chứng chỉ NFT trọn đời</h4>
                            <p className="text-slate-600">Không bao giờ mất, dễ dàng chia sẻ trên LinkedIn và CV.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Tăng 40% lương khởi điểm</h4>
                            <p className="text-slate-600">Ứng viên có kỹ năng số được doanh nghiệp ưu tiên tuyển dụng.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="order-1 md:order-2 bg-blue-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition duration-500" alt="Student" />
            </div>
        </div>
      </section>

      {/* FOR BUSINESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-indigo-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 -ml-16 -mb-16"></div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-2xl relative z-10 -rotate-3 hover:rotate-0 transition duration-500" alt="Business" />
            </div>
            <div className="space-y-8">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                    <Building2 size={28} />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Dành cho Tổ chức</h2>
                <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Giảm 60% thời gian tuyển dụng</h4>
                            <p className="text-slate-600">Sàng lọc hồ sơ tự động dựa trên điểm số năng lực đã được xác thực.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Báo cáo năng lực trực quan</h4>
                            <p className="text-slate-600">Dashboard phân tích kỹ năng của từng phòng ban/khoa theo thời gian thực.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Đào tạo đúng mục tiêu</h4>
                            <p className="text-slate-600">AI gợi ý lộ trình đào tạo bù đắp đúng lỗ hổng kiến thức của nhân viên.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center text-white">
         <h2 className="text-3xl font-black mb-8">Trải nghiệm sự khác biệt ngay hôm nay</h2>
         <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/register')} className="px-8 py-4 bg-blue-600 font-bold rounded-2xl hover:bg-blue-700 transition">Đăng ký Cá nhân</button>
            <button onClick={() => navigate('/register')} className="px-8 py-4 bg-transparent border border-white font-bold rounded-2xl hover:bg-white/10 transition">Đăng ký Tổ chức</button>
         </div>
      </section>

    </div>
  );
};

export default BenefitsPage;