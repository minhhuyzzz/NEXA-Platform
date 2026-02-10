import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, Globe, Menu, X } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const AboutPage = () => {
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
       
       {/* HEADER (Đồng bộ) */}
       <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm' : 'bg-white/90 backdrop-blur-md border-b border-slate-100'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={LOGO_URL} alt="NEXA" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            <span className="text-2xl font-bold text-slate-800 tracking-tight">NEXA</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
  <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Trang chủ</Link>
  <Link to="/solutions" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Giải pháp</Link>
  <Link to="/benefits" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Lợi ích</Link>
  <Link to="/testimonials" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Đánh giá</Link>
  <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Về chúng tôi</Link>
</div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition">
                Đăng nhập
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Chúng tôi kiến tạo <br/> <span className="text-blue-600">Tương lai số</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sứ mệnh của NEXA là xóa bỏ khoảng cách số (Digital Divide) và mang đến cơ hội tiếp cận giáo dục chất lượng cao cho mọi người dân Việt Nam.
        </p>
      </section>

      {/* STATS */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="text-4xl font-black text-blue-600 mb-2">2024</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Thành lập</div>
            </div>
            <div>
                <div className="text-4xl font-black text-blue-600 mb-2">15K+</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Người dùng</div>
            </div>
            <div>
                <div className="text-4xl font-black text-blue-600 mb-2">Top 10</div>
                <div className="text-xs font-bold text-slate-500 uppercase">EdTech Startup</div>
            </div>
            <div>
                <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Tâm huyết</div>
            </div>
        </div>
      </section>

      {/* STORY & VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20"></div>
                <img src="https://i.postimg.cc/QtxHpQcz/team.jpg" alt="Team" className="rounded-3xl shadow-2xl relative z-10" />
            </div>
            <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900">Zero to One Team</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Được thành lập bởi nhóm sinh viên đam mê công nghệ từ Đại học Công Thương, NEXA bắt đầu từ một ý tưởng nhỏ: "Làm sao để đo lường năng lực số một cách chính xác?".
                </p>
                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <Heart className="text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900">Con người là trung tâm</h4>
                    </div>
                    <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                        <Globe className="text-indigo-600 mb-3" />
                        <h4 className="font-bold text-slate-900">Tác động xã hội</h4>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PARTNERS LOGO */}
      <section className="py-20 bg-slate-900 text-center">
         <p className="text-slate-400 font-bold uppercase tracking-widest mb-12">Được tin tưởng bởi</p>
         <div className="flex flex-wrap justify-center gap-12 opacity-60">
             <span className="text-2xl font-serif text-white font-bold">Harvard<span className="font-light">Business</span></span>
             <span className="text-2xl font-sans text-white font-black">GOOGLE</span>
             <span className="text-2xl font-mono text-white font-bold">MICROSOFT</span>
             <span className="text-2xl font-sans text-white font-bold italic">Coursera</span>
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

export default AboutPage;