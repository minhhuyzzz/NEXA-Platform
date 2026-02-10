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
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team" className="rounded-3xl shadow-2xl relative z-10" />
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

    </div>
  );
};

export default AboutPage;