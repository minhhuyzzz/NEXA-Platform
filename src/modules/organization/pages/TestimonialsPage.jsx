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
    </div>
  );
};

export default TestimonialsPage;