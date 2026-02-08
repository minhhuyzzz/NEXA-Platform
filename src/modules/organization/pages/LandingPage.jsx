import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Users, ArrowRight, CheckCircle2, 
  MapPin, Mail, Globe 
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0F172A' }}>
      
      {/* --- 0. IMPORT FONT (Tự động tải font đẹp về) --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
          
          h1, h2, h3, button { font-family: 'Plus Jakarta Sans', sans-serif; }
          body, p, span, a { font-family: 'Inter', sans-serif; }
          
          .hover-card:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.1);
            border-color: #0F172A;
          }
        `}
      </style>

      {/* --- 1. NAVBAR (Siêu tối giản) --- */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 5%', borderBottom: '1px solid #F1F5F9', backgroundColor: 'white' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png" 
            alt="NEXA Logo" 
            style={{ height: '38px', objectFit: 'contain' }} 
          />
        </div>
        
        {/* Menu đơn giản */}
        <div style={{ display: 'flex', gap: '40px', fontSize: '14px', fontWeight: '500', color: '#64748B' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#0F172A' }}>Trang chủ</a>
          <a href="#" style={{ textDecoration: 'none', color: '#64748B' }}>Về NEXA</a>
          <a href="#" style={{ textDecoration: 'none', color: '#64748B' }}>Liên hệ</a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION (Tập trung vào 2 lựa chọn) --- */}
      <header style={{ padding: '80px 20px 100px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        
        <h1 style={{ 
          fontSize: '52px', fontWeight: '800', lineHeight: '1.1', 
          color: '#0F172A', marginBottom: '24px', letterSpacing: '-1px' 
        }}>
          Hệ sinh thái Năng lực số <br/> & Phát triển Bền vững
        </h1>
        
        <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto 60px', lineHeight: '1.6' }}>
          Nền tảng chuẩn hóa năng lực và đo lường tác động xã hội dành cho hai đối tượng mục tiêu.
        </p>

        {/* --- KHU VỰC CHỌN ĐỐI TƯỢNG (QUAN TRỌNG NHẤT) --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          
          {/* MỤC 1: DOANH NGHIỆP & TỔ CHỨC */}
          <div 
            className="hover-card"
            onClick={() => navigate('/org/dashboard')}
            style={{ 
              padding: '40px', borderRadius: '24px', cursor: 'pointer',
              backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
              textAlign: 'left', transition: 'all 0.3s ease'
            }}
          >
            <div style={{ width: '56px', height: '56px', backgroundColor: '#F1F5F9', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#0F172A' }}>
              <Building2 size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A', marginBottom: '12px' }}>Doanh nghiệp & Tổ chức</h3>
            <p style={{ color: '#64748B', marginBottom: '24px', lineHeight: '1.5' }}>
              Dành cho Nhà trường, Công ty muốn quản lý năng lực nhân sự, sinh viên và báo cáo chỉ số ESG/Phát triển bền vững.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: '600', fontSize: '15px' }}>
              Truy cập Portal Quản trị <ArrowRight size={18} />
            </div>
          </div>

          {/* MỤC 2: CÁ NHÂN & CỘNG ĐỒNG */}
          <div 
            className="hover-card"
            style={{ 
              padding: '40px', borderRadius: '24px', cursor: 'pointer',
              backgroundColor: '#0F172A', border: '1px solid #0F172A', // Nền đen cho nổi bật
              textAlign: 'left', transition: 'all 0.3s ease', color: 'white'
            }}
          >
            <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'white' }}>
              <Users size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>Cá nhân & Cộng đồng</h3>
            <p style={{ color: '#94A3B8', marginBottom: '24px', lineHeight: '1.5' }}>
              Dành cho Sinh viên, Người đi làm muốn đánh giá năng lực số, nhận chứng chỉ Blockchain và tham gia mạng lưới học tập.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: '600', fontSize: '15px' }}>
              Tải App Học tập <ArrowRight size={18} />
            </div>
          </div>

        </div>
      </header>

      {/* --- 3. FOOTER (Clean) --- */}
      <footer style={{ borderTop: '1px solid #F1F5F9', padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="https://i.postimg.cc/Vv0HrbfK/ảnh_logo_nexa.png" alt="Logo" style={{ height: '32px' }} />
              <span style={{ fontWeight: '700', fontSize: '20px' }}>NEXA</span>
            </div>
            <p style={{ color: '#64748B', fontSize: '14px', maxWidth: '300px' }}>
              Dự án tham gia Star Awards 2026. <br/>Kiến tạo tương lai số bền vững.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '60px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginBottom: '16px', textTransform: 'uppercase' }}>Liên hệ</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#64748B' }}>
                <span style={{ display: 'flex', gap: '8px' }}><Mail size={16}/> contact@nexa.edu.vn</span>
                <span style={{ display: 'flex', gap: '8px' }}><MapPin size={16}/> TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginBottom: '16px', textTransform: 'uppercase' }}>Social</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#64748B' }}>
                <a href="#" style={{ color: '#64748B', textDecoration: 'none' }}>LinkedIn</a>
                <a href="#" style={{ color: '#64748B', textDecoration: 'none' }}>Facebook</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default LandingPage;