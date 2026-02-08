import React from 'react';
import { Leaf, Zap, Shield, Users, ArrowRight, CheckCircle, Globe } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1E293B', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. NAVBAR (Thanh menu trên cùng) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 0, background: 'white', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #0EA5E9, #2563EB)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>N</div>
          <span style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A' }}>NEXA</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', color: '#64748B' }}>
          <a href="#" style={{ color: '#0F172A' }}>Trang chủ</a>
          <a href="#features">Tính năng</a>
          <a href="#about">Về chúng tôi</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <button style={{ padding: '10px 24px', backgroundColor: '#0EA5E9', color: 'white', border: 'none', borderRadius: '30px', fontWeight: '600', cursor: 'pointer' }}>
          Tham gia ngay
        </button>
      </nav>

      {/* 2. HERO SECTION (Banner chính) */}
      <header style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#F8FAFC' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#ECFDF5', color: '#059669', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
          <Leaf size={16} /> Giải pháp Chuyển đổi Số Xanh 2026
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px', color: '#0F172A' }}>
          Nâng tầm Năng lực Số <br /> <span style={{ color: '#0EA5E9' }}>Gắn liền Phát triển Bền vững</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          NEXA là nền tảng tiên phong kết hợp AI Mentoring và Báo cáo ESG, giúp Doanh nghiệp và Trường học tối ưu hóa nguồn nhân lực số trong kỷ nguyên xanh.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px', background: '#0F172A', color: 'white', border: 'none', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Tìm hiểu thêm <ArrowRight size={20} />
          </button>
          <button style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px', background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', fontWeight: '600', cursor: 'pointer' }}>
            Xem Demo
          </button>
        </div>
        
        {/* Ảnh minh họa giả lập Dashboard (để khoe cái chúng ta đã làm) */}
        <div style={{ marginTop: '60px', padding: '10px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', maxWidth: '1000px', margin: '60px auto 0', border: '1px solid #E2E8F0' }}>
            <div style={{ backgroundColor: '#F1F5F9', height: '400px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="Dashboard Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', opacity: 0.8 }} />
            </div>
        </div>
      </header>

      {/* 3. FEATURES (Tính năng nổi bật) */}
      <section id="features" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>Tính năng cốt lõi</h2>
          <p style={{ color: '#64748B', fontSize: '18px' }}>Giải pháp toàn diện cho cả Doanh nghiệp (B2B) và Nhà trường (B2S)</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <FeatureCard 
            icon={<Zap size={32} color="white" />} 
            bg="#0EA5E9"
            title="Đánh giá Năng lực Số" 
            desc="Hệ thống bài test chuẩn khung DigComp, tự động phân tích lỗ hổng kỹ năng của nhân sự bằng AI." 
          />
          <FeatureCard 
            icon={<Leaf size={32} color="white" />} 
            bg="#10B981"
            title="Báo cáo Tác động Xanh" 
            desc="Đo lường chỉ số ESG, quy đổi hoạt động đào tạo trực tuyến thành lượng CO2 giảm thiểu." 
          />
          <FeatureCard 
            icon={<Shield size={32} color="white" />} 
            bg="#F59E0B"
            title="Chứng chỉ Blockchain" 
            desc="Cấp chứng chỉ NFT không thể làm giả, minh bạch hóa hồ sơ năng lực học viên trọn đời." 
          />
        </div>
      </section>

      {/* 4. STATS (Con số ấn tượng) */}
      <section style={{ backgroundColor: '#0F172A', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '40px' }}>
          <StatItem number="10,000+" label="Học viên Tiên phong" />
          <StatItem number="500+" label="Doanh nghiệp Đối tác" />
          <StatItem number="15 Tấn" label="CO2 Được Giảm Thiểu" />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ padding: '40px 20px', backgroundColor: 'white', textAlign: 'center', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '20px', color: '#0F172A' }}>NEXA Platform</div>
        <p style={{ color: '#64748B', marginBottom: '20px' }}>Dự án tham gia cuộc thi Star Awards 2024</p>
        <div style={{ color: '#94A3B8', fontSize: '14px' }}>© 2026 Bản quyền thuộc về Đội thi NEXA.</div>
      </footer>
    </div>
  );
};

// Component phụ
const FeatureCard = ({ icon, bg, title, desc }) => (
  <div style={{ padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', transition: 'all 0.3s hover:shadow-lg' }}>
    <div style={{ width: '56px', height: '56px', backgroundColor: bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#0F172A' }}>{title}</h3>
    <p style={{ color: '#64748B', lineHeight: '1.6' }}>{desc}</p>
  </div>
);

const StatItem = ({ number, label }) => (
  <div>
    <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px', color: '#38BDF8' }}>{number}</div>
    <div style={{ fontSize: '16px', color: '#94A3B8' }}>{label}</div>
  </div>
);

export default LandingPage;