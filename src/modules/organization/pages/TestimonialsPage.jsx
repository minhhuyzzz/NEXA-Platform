import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star, Quote, Menu, X } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png";

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
    {
      name: "Trần Minh Huy",
      role: "Sinh viên ĐH Công Thương",
      content: "Nhờ NEXA, mình đã biết mình hổng kiến thức ở mảng An toàn thông tin. Sau khóa học gợi ý, mình đã tự tin hơn hẳn khi đi thực tập.",
      avatar: "https://ui-avatars.com/api/?name=Tran+Minh+Huy&background=0D8ABC&color=fff"
    },
    {
      name: "Nguyễn Thị Lan",
      role: "HR Manager - TechCorp",
      content: "Chúng tôi đã tiết kiệm được hàng trăm giờ phỏng vấn nhờ yêu cầu ứng viên nộp chứng chỉ năng lực số của NEXA.",
      avatar: "https://ui-avatars.com/api/?name=Nguyen+Thi+Lan&background=random"
    },
    {
      name: "Lê Văn Bằng",
      role: "Giảng viên CNTT",
      content: "Hệ thống câu hỏi rất sát với thực tế và khung DigComp. Đây là công cụ hỗ trợ tuyệt vời cho công tác giảng dạy.",
      avatar: "https://ui-avatars.com/api/?name=Le+Van+Bang&background=random"
    },
    {
      name: "Phạm Hoàng",
      role: "Freelancer",
      content: "Chứng chỉ NFT của NEXA giúp profile Upwork của tôi uy tín hơn rất nhiều trong mắt khách hàng quốc tế.",
      avatar: "https://ui-avatars.com/api/?name=Pham+Hoang&background=random"
    },
    {
      name: "Võ Tường Vy",
      role: "Sinh viên năm cuối",
      content: "Giao diện đẹp, dễ dùng. Thích nhất là tính năng so sánh điểm số với các bạn cùng ngành để biết mình đang đứng ở đâu.",
      avatar: "https://ui-avatars.com/api/?name=Vo+Tuong+Vy&background=random"
    },
    {
      name: "Đỗ Hùng Dũng",
      role: "Giám đốc Đào tạo",
      content: "Báo cáo phân tích của NEXA giúp chúng tôi xây dựng kế hoạch đào tạo nội bộ chính xác đến từng nhân viên.",
      avatar: "https://ui-avatars.com/api/?name=Do+Hung+Dung&background=random"
    }
  ];

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
            <Link to="/benefits" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Lợi ích</Link>
            <Link to="/testimonials" className="text-sm font-bold text-blue-600 transition">Đánh giá</Link>
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
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Niềm tin từ <br/> <span className="text-blue-600">Cộng đồng</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Lắng nghe những câu chuyện thành công từ hơn 15,000 người dùng đã thay đổi sự nghiệp cùng NEXA.
        </p>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Quote className="text-blue-200 mb-6" size={40} />
                    <p className="text-slate-600 mb-6 leading-relaxed min-h-[80px]">"{review.content}"</p>
                    <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full bg-slate-100" />
                        <div>
                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                            <p className="text-xs font-bold text-slate-400 uppercase">{review.role}</p>
                        </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest mb-12">Đồng hành cùng</p>
        <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8" alt="Google" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" className="h-8" alt="Microsoft" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-8" alt="IBM" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="h-8" alt="Slack" />
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

export default TestimonialsPage;