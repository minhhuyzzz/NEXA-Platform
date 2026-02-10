import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import icon nếu cần, ở đây dùng ảnh có sẵn nên không bắt buộc import Lucide

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập delay mạng 1 giây
    setTimeout(() => {
      setIsLoading(false);
      
      // LOGIC CHUYỂN HƯỚNG (GIỮ NGUYÊN TỪ CODE CŨ CỦA BẠN)
      if (email.includes('admin')) {
        localStorage.setItem('nexa_role', 'admin');
        localStorage.setItem('nexa_user', JSON.stringify({ fullName: 'Quản trị viên', role: 'admin' }));
        navigate('/admin');
      } else {
        localStorage.setItem('nexa_role', 'user');
        localStorage.setItem('nexa_user', JSON.stringify({ fullName: 'Trần Minh Huy', university: 'ĐH Công Thương', role: 'student' }));
        navigate('/user/dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex font-sans text-slate-900 bg-slate-50">
      
      {/* CỘT TRÁI: FORM ĐĂNG NHẬP */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white lg:max-w-xl xl:max-w-2xl">
        <div className="w-full max-w-md space-y-8">
          
          {/* Logo & Header */}
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => navigate('/')}>
             <img src="https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png" alt="NEXA" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
             <span className="text-2xl font-black text-blue-900 tracking-tighter">NEXA</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Chào mừng trở lại! 👋</h1>
            <p className="text-slate-500 text-lg">Nhập thông tin để truy cập hệ thống.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                required
                placeholder="admin@nexa.edu.vn hoặc user@school.edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-bold text-slate-700 placeholder:font-normal"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Mật khẩu</label>
                 <a href="#" className="text-xs text-blue-600 font-bold hover:underline uppercase">Quên mật khẩu?</a>
              </div>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-bold text-slate-700 placeholder:font-normal"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 active:scale-[0.98]"
            >
              {isLoading ? (
                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                "Đăng nhập ngay"
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-slate-400 font-bold text-xs uppercase tracking-widest">Hoặc tiếp tục với</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="py-3.5 border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google"/> Google
             </button>
             <button className="py-3.5 border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2">
                <img src="https://www.svgrepo.com/show/475661/microsoft.svg" className="w-5 h-5" alt="Microsoft"/> Microsoft
             </button>
          </div>

          <p className="text-center text-slate-500 font-medium pt-4">
            Chưa có tài khoản? <span onClick={() => navigate('/register')} className="text-blue-600 font-bold cursor-pointer hover:underline">Đăng ký miễn phí</span>
          </p>
        </div>
      </div>

      {/* CỘT PHẢI: ẢNH MINH HỌA (Giữ nguyên concept nhưng làm đẹp hơn) */}
      <div className="hidden lg:flex flex-1 bg-[#0f172a] relative overflow-hidden items-center justify-center p-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20"></div>
        
        <div className="relative z-10 text-white max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-200 text-xs font-bold mb-8">
                ✨ Phiên bản 2.0 đã sẵn sàng
            </div>
            <h2 className="text-6xl font-black mb-8 leading-tight tracking-tight">
                Phát triển <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Năng lực số</span> <br/>
                Bền vững.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
                NEXA giúp sinh viên và nhân sự định hình lộ trình phát triển bản thân thông qua dữ liệu thực tế và trí tuệ nhân tạo.
            </p>
            
            {/* Thẻ Testimonial giả lập */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors cursor-default">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">A</div>
                <div>
                    <div className="font-bold text-lg">AI Assessment Engine</div>
                    <div className="text-sm text-blue-200 font-medium">Powered by DigComp 2.2 Standard</div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Login;