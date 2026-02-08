import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Leaf, Zap, ShieldCheck, Users, ArrowRight, 
  Globe, Award, Building2, ChevronRight, MapPin, Mail, Phone 
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  // Bảng màu chuẩn NEXA
  const colors = {
    primary: '#0EA5E9',       // Xanh dương
    primaryDark: '#0284C7',
    success: '#10B981',       // Xanh lá
    dark: '#0F172A',          // Màu đen xanh (Text chính)
    gray: '#64748B',          // Màu chữ phụ
    lightBg: '#F8FAFC',       // Nền sáng
    white: '#FFFFFF'
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: colors.dark, backgroundColor: colors.white, overflowX: 'hidden' }}>
      
      {/* --- 1. NAVBAR --- */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '16px 5%', backgroundColor: 'rgba(255,255,255,0.95)', 
        backdropFilter: 'blur(10px)', borderBottom: '1px solid #F1F5F9',
        position: 'sticky', top: 0, zIndex: 100 
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img 
            src="https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png" 
            alt="NEXA Logo" 
            style={{ height: '42px', objectFit: 'contain' }} 
          />
        </div>

        {/* Menu Desktop */}
        <div style={{ display: 'flex', gap: '40px', fontWeight: '600', color: colors.gray, fontSize: '15px' }} className="hidden-mobile">
          <a href="#solutions" style={{ textDecoration: 'none', color: colors.gray, transition: '0.2s' }}>Giải pháp</a>
          <a href="#esg" style={{ textDecoration: 'none', color: colors.gray, transition: '0.2s' }}>Về ESG</a>
          <a href="#partners" style={{ textDecoration: 'none', color: colors.gray, transition: '0.2s' }}>Đối tác</a>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => navigate('/org/dashboard')} 
            style={{ 
              padding: '10px 24px', borderRadius: '30px', border: 'none', 
              background: `linear-gradient(135deg, ${colors.primary}, #2563EB)`, 
              color: 'white', fontWeight: '700', cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(14, 165, 233, 0.3)',
              transition: 'transform 0.2s'
            }}
          >
            Truy cập Dashboard
          </button>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <header style={{ 
        textAlign: 'center', padding: '100px 20px 80px', 
        background: 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.08) 0%, rgba(255, 255, 255, 0) 70%)' 
      }}>
        {/* Badge */}
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '8px', 
          padding: '8px 16px', backgroundColor: '#ECFDF5', 
          color: colors.success, borderRadius: '20px', 
          fontSize: '14px', fontWeight: '700', marginBottom: '30px',
          border: '1px solid #D1FAE5'
        }}>
          <span style={{ position: 'relative', display: 'flex', height: '10px', width: '10px' }}>
            <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: colors.success, opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
            <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '10px', width: '10px', backgroundColor: colors.success }}></span>
          </span>
          Tiêu chuẩn Năng lực số & ESG 2026
        </div>

        {/* Headline */}
        <h1 style={{ 
          fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '900', lineHeight: '1.1', 
          marginBottom: '24px', color: colors.dark, maxWidth: '900px', margin: '0 auto 24px' 
        }}>
          Nâng tầm Năng lực Số <br /> 
          <span style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.success})`, 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
          }}>
            Gắn liền Phát triển Bền vững
          </span>
        </h1>

        {/* Sub-headline */}
        <p style={{ fontSize: '18px', color: colors.gray, maxWidth: '700px', margin: '0 auto 60px', lineHeight: '1.6' }}>
          Hệ sinh thái duy nhất kết hợp <strong>Đánh giá năng lực chuẩn Châu Âu</strong> và <strong>Báo cáo Tác động Xanh (ESG)</strong> dành cho Nhà trường & Doanh nghiệp.
        </p>

        {/* --- 2 BIG BUTTONS (Replaced the 3 columns) --- */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', maxWidth: '800px', margin: '0 auto' 
        }}>
          
          {/* Box 1: Dành cho Tổ chức (Hợp nhất) */}
          <div 
            onClick={() => navigate('/org/dashboard')}
            style={{ 
              padding: '24px', borderRadius: '20px', cursor: 'pointer',
              backgroundColor: 'white', border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              transition: 'all 0.2s ease', textAlign: 'left'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = colors.primary; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#E0F2FE', color: colors.primary }}>
                <Building2 size={28} />
              </div>
              <div>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', color: colors.gray, fontWeight: '600', letterSpacing: '0.5px' }}>Dành cho Quản lý</p>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: colors.dark, margin: '2px 0 0' }}>Tổ chức / Nhà trường</h3>
              </div>
            </div>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={16} color={colors.primary} />
            </div>
          </div>

          {/* Box 2: Dành cho Người học */}
          <div 
            style={{ 
              padding: '24px', borderRadius: '20px', cursor: 'pointer',
              backgroundColor: 'white', border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              transition: 'all 0.2s ease', textAlign: 'left'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = colors.success; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#ECFDF5', color: colors.success }}>
                <Users size={28} />
              </div>
              <div>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', color: colors.gray, fontWeight: '600', letterSpacing: '0.5px' }}>Dành cho Người học</p>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: colors.dark, margin: '2px 0 0' }}>Sinh viên / Nhân sự</h3>
              </div>
            </div>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={16} color={colors.success} />
            </div>
          </div>

        </div>
      </header>

      {/* --- 3. STATS STRIP --- */}
      <div style={{ borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '40px 20px' }}>
          <StatItem number="10,000+" label="Người học Tích cực" color={colors.primary} />
          <StatItem number="12.5 Tấn" label="CO2 Giảm thiểu" color={colors.success} />
          <StatItem number="50+" label="Đối tác Chiến lược" color={colors.dark} />
        </div>
      </div>

      {/* --- 4. FEATURES SECTION --- */}
      <section id="solutions" style={{ padding: '100px 20px', backgroundColor: colors.lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: colors.dark, marginBottom: '16px' }}>Giải pháp Toàn diện</h2>
            <p style={{ color: colors.gray, fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              NEXA không chỉ đánh giá, chúng tôi kiến tạo lộ trình phát triển bền vững.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <FeatureCard 
              icon={<Award size={32} />} 
              color={colors.primary}
              title="Đánh giá Chuẩn hóa" 
              desc="Hệ thống bài test chuẩn khung DigComp 2.2, tự động phân tích lỗ hổng kỹ năng bằng AI." 
            />
            <FeatureCard 
              icon={<Leaf size={32} />} 
              color={colors.success}
              title="Tác động Xanh (ESG)" 
              desc="Quy đổi hoạt động học tập số thành tín chỉ giảm thải carbon, hỗ trợ báo cáo ESG cho tổ chức." 
            />
            <FeatureCard 
              icon={<ShieldCheck size={32} />} 
              color="#F59E0B"
              title="Chứng chỉ Blockchain" 
              desc="Cấp chứng chỉ NFT (Soulbound Token) không thể làm giả, minh bạch hóa hồ sơ năng lực." 
            />
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer style={{ backgroundColor: '#0F172A', color: '#94A3B8', padding: '80px 20px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Cot 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png" alt="Logo" style={{ height: '32px', borderRadius: '6px' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>NEXA</span>
            </div>
            <p style={{ lineHeight: '1.6', fontSize: '14px' }}>
              Nền tảng AI tiên phong trong việc đánh giá và nâng cao năng lực số, định hình tương lai giáo dục và phát triển bền vững.
            </p>
          </div>

          {/* Cot 2 */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>Liên hệ</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '10px' }}><MapPin size={16} /> TP. Hồ Chí Minh, Việt Nam</li>
              <li style={{ display: 'flex', gap: '10px' }}><Mail size={16} /> contact@nexa.edu.vn</li>
              <li style={{ display: 'flex', gap: '10px' }}><Phone size={16} /> (+84) 90 123 4567</li>
            </ul>
          </div>

          {/* Cot 3 */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>Hệ sinh thái</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Đánh giá năng lực</a></li>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Báo cáo ESG</a></li>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Cộng đồng NEXA</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '30px', textAlign: 'center', fontSize: '14px' }}>
          © 2026 NEXA Education. Phát triển bởi Zero to One Team.
        </div>
      </footer>
    </div>
  );
};

/* --- Component phụ (Giúp code gọn hơn) --- */
const StatItem = ({ number, label, color }) => (
  <div style={{ textAlign: 'center', borderRight: '1px solid #F1F5F9' }}>
    <div style={{ fontSize: '36px', fontWeight: '900', color: color, marginBottom: '5px' }}>{number}</div>
    <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '1px' }}>{label}</div>
  </div>
);

const FeatureCard = ({ icon, color, title, desc }) => (
  <div style={{ 
    backgroundColor: 'white', padding: '40px', borderRadius: '24px', 
    border: '1px solid #F1F5F9', transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
  }}>
    <div style={{ 
      width: '60px', height: '60px', borderRadius: '16px', marginBottom: '24px',
      backgroundColor: `${color}15`, color: color, // Màu nền nhạt 15% opacity
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', color: '#0F172A' }}>{title}</h3>
    <p style={{ color: '#64748B', lineHeight: '1.6' }}>{desc}</p>
  </div>
);

export default LandingPage;