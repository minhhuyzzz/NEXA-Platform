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
{/* Footer */}
<footer className="bg-[#1a1e27] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 mb-12 lg:mb-16">
            {/* Column 1 - Brand */}
            <div className="space-y-4 lg:max-w-xs">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="NEXA Logo" className="w-10 h-10 md:w-11 md:h-11 rounded-lg object-cover shadow-lg flex-shrink-0" />
                <span className="text-xl md:text-2xl font-black text-white tracking-tight">NEXA</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nền tảng AI tiên phong trong việc đánh giá và nâng cao năng lực số, định hình tương lai giáo dục Đại học và Xã hội học tập tại Việt Nam.
              </p>
            </div>

            {/* Column 2 - Hệ sinh thái */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Hệ sinh thái</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm text-slate-300">
                <li><Link to="/solutions" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Đánh giá năng lực</Link></li>
                <li><Link to="/solutions" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Lộ trình học tập</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Cộng đồng NEXA</Link></li>
                <li><Link to="/solutions" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Dữ liệu mở</Link></li>
              </ul>
            </div>

            {/* Column 3 - Hỗ trợ & Pháp lý */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Hỗ trợ & Pháp lý</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Liên hệ hợp tác</a></li>
              </ul>
            </div>

            {/* Column 4 - Liên hệ */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Liên hệ</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <Icons.MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">TP. Hồ Chí Minh, Việt Nam</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icons.Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="mailto:contact@nexa.edu.vn" className="hover:text-white transition">contact@nexa.edu.vn</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icons.Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="tel:1900xxxx" className="hover:text-white transition">1900 xxxx</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-600/80 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 NEXA Education. Phát triển bởi Zero to One Team.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BenefitsPage;