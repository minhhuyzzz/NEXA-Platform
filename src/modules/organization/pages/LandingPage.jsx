import React, { useState, useEffect } from 'react';
// Không cần import lucide-react vì code của bạn đã tự vẽ Icon bên dưới rồi

// --- ICONS COMPONENTS (Giữ nguyên bộ icon bạn gửi) ---
const Icons = {
  Globe: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  ChevronRight: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  ),
  Login: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
  ),
  Award: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  Target: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  Users: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Leaf: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  TrendingUp: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ),
  Mail: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Phone: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  MapPin: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Brain: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
  ),
  Zap: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  CheckCircle: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  BookOpen: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Menu: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  Star: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Building: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  ),
  UserCheck: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
  ),
};

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const LandingPage = () => {
    const navigate = useNavigate(); // PHẢI CÓ DÒNG NÀY
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('business');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleStart = () => {
    navigate('/admin'); // Lệnh này sẽ mở trang Dashboard
  };
  const benefits = {
    business: [
      { icon: <Icons.Brain className="w-5 h-5" />, text: "Đánh giá năng lực số toàn tổ chức (Trường học/Doanh nghiệp) theo DigComp 2.2" },
      { icon: <Icons.TrendingUp className="w-5 h-5" />, text: "Dashboard thống kê & báo cáo chi tiết theo phòng ban/khoa" },
      { icon: <Icons.Award className="w-5 h-5" />, text: "Cấp Digital Badge được công nhận quốc tế cho nhân viên/sinh viên" },
      { icon: <Icons.BookOpen className="w-5 h-5" />, text: "Tích hợp LMS, HRIS & hệ thống quản lý hiện có" },
      { icon: <Icons.Users className="w-5 h-5" />, text: "Lộ trình đào tạo tập thể cho từng đơn vị/bộ phận" },
      { icon: <Icons.CheckCircle className="w-5 h-5" />, text: "API & White-label solution cho doanh nghiệp lớn" }
    ],
    community: [
      { icon: <Icons.Zap className="w-5 h-5" />, text: "Test năng lực số miễn phí với AI phân tích chi tiết" },
      { icon: <Icons.Target className="w-5 h-5" />, text: "Lộ trình học tập cá nhân hóa theo mục tiêu nghề nghiệp" },
      { icon: <Icons.Award className="w-5 h-5" />, text: "Nhận chứng chỉ số có giá trị khi xin việc & thăng tiến" },
      { icon: <Icons.Globe className="w-5 h-5" />, text: "Tài nguyên học tập mở (OER) chất lượng cao miễn phí" },
      { icon: <Icons.Users className="w-5 h-5" />, text: "Kết nối cộng đồng học tập & mentor từ doanh nghiệp" },
      { icon: <Icons.BookOpen className="w-5 h-5" />, text: "Webinar & workshop hàng tuần từ chuyên gia hàng đầu" }
    ]
  };

  const testimonials = [
    {
      name: "TS. Nguyễn Văn A",
      role: "Trưởng khoa CNTT - ĐH Công nghệ",
      avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=3b82f6&color=fff&size=80",
      content: "NEXA đã giúp chúng tôi đánh giá chính xác năng lực số của 5000+ sinh viên, từ đó xây dựng chương trình đào tạo phù hợp hơn."
    },
    {
      name: "Phạm Thị B",
      role: "Sinh viên năm 3 - ĐH Kinh tế",
      avatar: "https://ui-avatars.com/api/?name=Pham+Thi+B&background=6366f1&color=fff&size=80",
      content: "Nhờ lộ trình cá nhân hóa của NEXA, mình đã tự tin hơn với kỹ năng số và nhận được job offer từ công ty công nghệ lớn."
    },
    {
      name: "Lê Văn C",
      role: "CEO - Startup EdTech",
      avatar: "https://ui-avatars.com/api/?name=Le+Van+C&background=8b5cf6&color=fff&size=80",
      content: "Là đối tác của NEXA, chúng tôi ấn tượng với độ chính xác của AI và khả năng mở rộng hệ sinh thái học tập."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm' : 'bg-white/90 backdrop-blur-md border-b border-slate-100'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={LOGO_URL} alt="NEXA Logo" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
              <span className="text-2xl font-bold text-slate-800 tracking-tight">NEXA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Giải pháp</a>
              <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Lợi ích</a>
              <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Đánh giá</a>
              <a href="#sdg" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Về chúng tôi</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition px-4 py-2">
                <Icons.Login className="w-4 h-4" />
                Đăng nhập
              </button>
              <button onClick={handleStart} 
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5">
                Bắt đầu ngay
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-slate-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Giải pháp</a>
                <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Lợi ích</a>
                <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Đánh giá</a>
                <a href="#sdg" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Về chúng tôi</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-32 relative bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.1)_80%,transparent_100%)] -z-10"></div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center relative">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm mb-8 hover:border-blue-300 transition cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-sm font-bold text-slate-700">✨ Tiêu chuẩn Năng lực số 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight max-w-6xl mx-auto text-slate-900">
            Nền tảng đánh giá<br/>
            <span className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Năng lực số
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Hệ sinh thái toàn diện dựa trên AI & DigComp 2.2, giúp <span className="text-blue-600 font-bold">Doanh nghiệp</span>, <span className="text-blue-600 font-bold">Trường học</span> và <span className="text-blue-600 font-bold">Cá nhân</span> phát triển năng lực số bền vững
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={handleStart} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-700 transition shadow-xl shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Icons.Zap className="w-5 h-5" />
              Test năng lực miễn phí
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 text-base font-bold rounded-full hover:border-blue-300 hover:shadow-lg transition flex items-center justify-center gap-2">
              <Icons.BookOpen className="w-5 h-5" />
              Tìm hiểu thêm
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 px-6 md:px-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">15K+</div>
              <div className="text-slate-600 font-semibold text-xs md:text-sm">Người dùng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">120+</div>
              <div className="text-slate-600 font-semibold text-xs md:text-sm">Tổ chức</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">98%</div>
              <div className="text-slate-600 font-semibold text-xs md:text-sm">Hài lòng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">50K+</div>
              <div className="text-slate-600 font-semibold text-xs md:text-sm">Đánh giá</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section with Tabs */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Giải pháp cho mọi đối tượng</h2>
            <p className="text-slate-600 text-lg">
              Hệ sinh thái NEXA phục vụ cả tổ chức (B2B) và cá nhân (B2C)
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-10 py-5 rounded-2xl font-bold text-base transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'business' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-300'
              }`}
            >
              <Icons.Building className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-80">Dành cho</div>
                <div className="text-lg font-black">Doanh nghiệp & Trường học</div>
              </div>
            </button>
            
            <button 
              onClick={() => setActiveTab('community')}
              className={`px-10 py-5 rounded-2xl font-bold text-base transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'community' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-300'
              }`}
            >
              <Icons.UserCheck className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-80">Dành cho</div>
                <div className="text-lg font-black">Cá nhân & Cộng đồng</div>
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits[activeTab].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {benefit.icon}
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Tính năng vượt trội</h2>
            <p className="text-slate-600 text-lg">
              Công nghệ AI tiên tiến kết hợp với khung năng lực quốc tế
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1 */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Icons.Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">AI Đánh giá thông minh</h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6 relative z-10">
                Hệ thống AI phân tích đa chiều dựa trên DigComp 2.2, đánh giá chính xác 5 lĩnh vực năng lực số với 21 năng lực cụ thể
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm relative z-10">
                <span>Tìm hiểu thêm</span>
                <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Icons.Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Lộ trình Adaptive</h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6 relative z-10">
                Tự động cá nhân hóa lộ trình học tập dựa trên kết quả đánh giá, mục tiêu nghề nghiệp và tốc độ tiếp thu của từng cá nhân
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm relative z-10">
                <span>Khám phá</span>
                <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 shadow-sm hover:shadow-2xl hover:border-teal-300 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Icons.Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Digital Badge</h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6 relative z-10">
                Chứng chỉ số được công nhận quốc tế, có thể chia sẻ trên LinkedIn và hồ sơ xin việc, tăng cơ hội nghề nghiệp
              </p>
              <div className="flex items-center gap-2 text-teal-600 font-bold text-sm relative z-10">
                <span>Xem mẫu</span>
                <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Người dùng nói gì về NEXA</h2>
            <p className="text-slate-600 text-lg">
              Hơn 15,000 người dùng và 120+ tổ chức tin tưởng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icons.Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section id="sdg" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-sm font-bold mb-8">
                <Icons.Leaf className="w-4 h-4" />
                Cam kết SDGs
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Kiến tạo xã hội số<br/>
                <span className="text-blue-400">Bình đẳng & Bền vững</span>
              </h2>
              <p className="text-slate-300 text-xl mb-10 leading-relaxed">
                NEXA đóng góp trực tiếp vào các Mục tiêu Phát triển Bền vững (SDGs) của Liên Hợp Quốc, thúc đẩy giáo dục chất lượng và cơ hội việc làm công bằng cho mọi người
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition cursor-default text-center">
                  <div className="text-4xl font-black text-white mb-2">SDG 4</div>
                  <div className="text-xs text-slate-300 uppercase tracking-wide font-bold">Giáo dục chất lượng</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition cursor-default text-center">
                  <div className="text-4xl font-black text-white mb-2">SDG 8</div>
                  <div className="text-xs text-slate-300 uppercase tracking-wide font-bold">Việc làm bền vững</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition cursor-default text-center">
                  <div className="text-4xl font-black text-white mb-2">SDG 10</div>
                  <div className="text-xs text-slate-300 uppercase tracking-wide font-bold">Giảm bất bình đẳng</div>
                </div>
              </div>

              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-900/50">
                Đọc báo cáo tác động
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
                <Icons.CheckCircle className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">15,000+ người học</h3>
                <p className="text-slate-400 leading-relaxed">
                  được tiếp cận giáo dục năng lực số chất lượng, bất kể hoàn cảnh kinh tế
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-30"></div>
                <Icons.TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Tăng 40% cơ hội việc làm</h3>
                <p className="text-slate-400 leading-relaxed">
                  cho sinh viên hoàn thành chương trình đào tạo năng lực số
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Đối tác tin cậy</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="text-2xl font-black text-slate-800 font-serif">ĐẠI HỌC<span className="text-blue-600">.EDU</span></div>
            <div className="text-2xl font-bold text-slate-800 flex items-center gap-1">
              <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
              TECH.INSTITUTE
            </div>
            <div className="text-2xl font-extrabold text-slate-800 tracking-tighter">FUTURE<span className="font-light">ACADEMY</span></div>
            <div className="text-2xl font-bold text-slate-800 border-2 border-slate-800 px-3 py-1">OPENSOURCE</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Sẵn sàng nâng cao năng lực số?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn người và hàng trăm tổ chức đang phát triển năng lực số với NEXA
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-full hover:bg-blue-50 transition shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Icons.Zap className="w-6 h-6" />
              Bắt đầu test miễn phí
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white text-lg font-bold rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Icons.Phone className="w-5 h-5" />
              Đặt lịch tư vấn
            </button>
          </div>
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
                <li><a href="#" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Đánh giá năng lực</a></li>
                <li><a href="#" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Lộ trình học tập</a></li>
                <li><a href="#" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Cộng đồng NEXA</a></li>
                <li><a href="#" className="hover:text-blue-400 transition flex items-center gap-2"><span className="text-slate-500">&gt;</span> Dữ liệu mở</a></li>
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

export default LandingPage;
