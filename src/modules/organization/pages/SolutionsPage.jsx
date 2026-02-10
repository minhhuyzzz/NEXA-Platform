import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, Shield, Zap, CheckCircle2, ArrowRight, Layout, Server, Users, Menu, X } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const SolutionsPage = () => {
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
      
      {/* HEADER (Đồng bộ với Landing Page) */}
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
            <button onClick={() => navigate('/login')} className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition shadow-lg">
              Truy cập Dashboard
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-8 uppercase tracking-wider">
            <Zap size={14} /> Công nghệ lõi 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            Giải pháp Đánh giá <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Toàn diện & Chính xác</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            NEXA không chỉ là bài kiểm tra. Chúng tôi cung cấp một hệ sinh thái chuyển đổi số hoàn chỉnh dựa trên khung năng lực Châu Âu (DigComp).
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Brain size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">AI Adaptive Testing</h3>
                <p className="text-slate-600 leading-relaxed">
                    Thuật toán thích ứng (CAT) tự động điều chỉnh độ khó câu hỏi dựa trên năng lực thời gian thực của người học, giúp đánh giá chính xác hơn 40% so với bài test truyền thống.
                </p>
            </div>

            <div className="space-y-6 group">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <Layout size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">DigComp 2.2 Framework</h3>
                <p className="text-slate-600 leading-relaxed">
                    Hệ thống tiêu chuẩn hóa quốc tế bao gồm 5 lĩnh vực năng lực và 21 kỹ năng thành phần, đảm bảo chứng chỉ NEXA có giá trị toàn cầu.
                </p>
            </div>

            <div className="space-y-6 group">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                    <Shield size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Blockchain Verification</h3>
                <p className="text-slate-600 leading-relaxed">
                    Mỗi chứng chỉ cấp ra được mã hóa thành NFT trên mạng lưới Polygon, giúp nhà tuyển dụng xác thực tức thì và chống làm giả tuyệt đối.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center">Ứng dụng thực tế</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600 rounded-xl"><Server size={24}/></div>
                    <h3 className="text-2xl font-bold">Cho Doanh Nghiệp</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400"/> Sàng lọc ứng viên đầu vào tự động</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400"/> Đánh giá năng lực nhân sự định kỳ</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400"/> Báo cáo ESG về phát triển nguồn nhân lực</li>
                </ul>
            </div>

            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-600 rounded-xl"><Users size={24}/></div>
                    <h3 className="text-2xl font-bold">Cho Giáo Dục</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400"/> Chuẩn đầu ra tin học cho sinh viên</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400"/> Cá nhân hóa lộ trình học tập</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400"/> Cấp chứng chỉ số (Micro-credentials)</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
         <h2 className="text-3xl font-black mb-8 text-slate-900">Sẵn sàng chuyển đổi số?</h2>
         <button onClick={() => navigate('/register')} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition flex items-center gap-3 mx-auto">
            Bắt đầu dùng thử miễn phí <ArrowRight size={20}/>
         </button>
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

export default SolutionsPage; 