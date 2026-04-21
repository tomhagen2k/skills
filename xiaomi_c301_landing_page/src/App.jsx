import { useState } from 'react';
import { 
  ShieldCheck, 
  EyeOff, 
  Camera, 
  Cpu, 
  BellRing, 
  Star, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Smartphone,
  Mic,
  ArrowRight
} from 'lucide-react';
import OrderModal from './OrderModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="landing-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="section-label">🔒 Bảo mật cấp tài chính</span>
              <h1 className="hero-title">
                An Tâm Tuyệt Đối - Bảo Mật <span className="highlight">Cấp Tài Chính</span> Cho Ngôi Nhà
              </h1>
              <p className="section-subtitle" style={{textAlign: 'left', margin: '0 0 40px 0'}}>
                Xiaomi Smart Camera C301: Độ phân giải 2K sắc nét, nhìn đêm full-color, 
                cùng công nghệ màn che ống kính vật lý đảm bảo 100% sự riêng tư.
              </p>
              <div className="hero-btns">
                <button className="btn-cta" onClick={openModal}>
                  BẢO VỆ GIA ĐÌNH NGAY <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="/images/hero.png" alt="Xiaomi Smart Camera C301" className="hero-image" />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="trust-badges">
            <div className="badge-item"><ShieldCheck size={22} color="var(--primary)" /> Chứng nhận BSI</div>
            <div className="badge-item"><ShieldCheck size={22} color="var(--primary)" /> ISO 27001</div>
            <div className="badge-item"><CheckCircle2 size={22} color="var(--primary)" /> 50,000+ Người dùng</div>
            <div className="badge-item">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span style={{marginLeft: '8px'}}>4.9/5 Đánh giá</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Image Quality Comparison Section */}
      <section className="section quality-comp">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <span className="section-label">Chất lượng hình ảnh</span>
            <h2 className="section-title">Độ Nét 2K - Vượt Xa Chuẩn 1080P</h2>
            <p className="section-subtitle">Sự khác biệt rõ rệt về chi tiết giúp bạn quan sát mọi ngóc ngách dễ dàng.</p>
          </div>
          
          <div className="comparison-wrapper">
            <div className="comparison-image-container">
              <img src="/images/compare-2k.png" alt="Comparison 1080p vs 2K" className="comparison-main-img" />
              <div className="comparison-overlay-labels">
                <span className="overlay-label left">Camera 1080P</span>
                <span className="overlay-label right">Xiaomi C301 (2K)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem & Agitation */}
      <section className="section" style={{background: 'var(--bg-section-alt)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Vấn đề bạn quan tâm</span>
            <h2 className="section-title">Lắp camera để bảo vệ, hay đang rước thêm rủi ro?</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card glass-card">
              <div className="problem-icon"><EyeOff size={30} /></div>
              <h3>Nguy Cơ Lộ Đời Tư</h3>
              <p>Camera trôi nổi dễ bị hacker xâm nhập, hình ảnh sinh hoạt gia đình bị phát tán trên mạng.</p>
            </div>
            <div className="problem-card glass-card">
              <div className="problem-icon"><AlertCircle size={30} /></div>
              <h3>Ban Đêm Bị "Mù"</h3>
              <p>Hình ảnh ban đêm đen trắng, nhòe nhoẹt, khi có sự cố không thể nhận diện được khuôn mặt kẻ gian.</p>
            </div>
            <div className="problem-card glass-card">
              <div className="problem-icon"><BellRing size={30} /></div>
              <h3>Báo Động Giả</h3>
              <p>Chó mèo chạy qua cũng hú còi, làm gián đoạn giấc ngủ và gây hoang mang không đáng có.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features & Benefits */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Tính năng vượt trội</span>
            <h2 className="section-title">Công Nghệ Dẫn Đầu - Giữ Trọn Bình Yên</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-img-box">
                <img src="/images/privacy.png" alt="Privacy Shield" />
              </div>
              <div className="feature-card-content">
                <h4>Tấm Chắn Vật Lý</h4>
                <p>Ống kính tự xoay giấu vào trong lớp vỏ khi bạn về nhà. Đảm bảo 100% sự riêng tư.</p>
              </div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-img-box">
                <img src="/images/chip.png" alt="Security Chip" />
              </div>
              <div className="feature-card-content">
                <h4>Chip Bảo Mật MJA1</h4>
                <p>Mã hóa AES-128 chuẩn tài chính. Dữ liệu của bạn được bảo vệ bởi lớp bảo mật ngân hàng.</p>
              </div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-img-box">
                <img src="/images/night-vision.png" alt="Full Color Night Vision" />
              </div>
              <div className="feature-card-content">
                <h4>Nhìn Đêm Full-Color</h4>
                <p>Hình ảnh 2K siêu nét, giữ trọn màu sắc sống động ngay cả trong điều kiện thiếu sáng nhất.</p>
              </div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-img-box">
                <img src="/images/ai-detection.png" alt="AI Human Detection" />
              </div>
              <div className="feature-card-content">
                <h4>AI Nhận Diện Người</h4>
                <p>Thuật toán thông minh lọc bỏ báo động giả từ vật nuôi, chỉ thông báo khi có người xuất hiện.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section" style={{background: 'var(--bg-section-alt)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Khách hàng nói gì</span>
            <h2 className="section-title">Hơn 50,000+ Gia Đình Tin Dùng</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="avatar">TH</div>
                <div>
                  <strong>Chị Thu Hương</strong>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p>"Chế độ che ống kính rất hay, mình không còn lo lắng bị hack camera nữa. Hình ảnh 2K thực sự rất nét."</p>
            </div>
            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="avatar">MN</div>
                <div>
                  <strong>Anh Minh Nhật</strong>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p>"Lắp cho tiệm cafe thấy rất ưng ý. Ban đêm nhìn rõ mặt khách, loa đàm thoại to rõ, dễ sử dụng."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Offer & Pricing */}
      <section className="section">
        <div className="container">
          <div className="offer-box glass-card" style={{textAlign: 'center'}}>
            <span className="section-label">Ưu đãi giới hạn</span>
            <h2 className="section-title">Bảo Vệ Tổ Ấm Với Chi Phí Tốt Nhất</h2>
            <div className="price-display">
              <span className="old-price">890.000đ</span>
              <span className="new-price">650.000đ</span>
            </div>
            <div style={{marginBottom: '40px'}}>
              <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', padding: '10px 20px', borderRadius: '50px', fontWeight: '700', fontSize: '15px'}}>
                <CheckCircle2 size={18} /> Tặng gói Cloud 7 ngày miễn phí trọn đời
              </div>
            </div>
            <button className="btn-cta" style={{padding: '24px 60px', fontSize: '20px'}} onClick={openModal}>
              ĐẶT MUA NGAY <ArrowRight size={24} />
            </button>
            <div className="scarcity">
              <Clock size={18} /> Số lượng ưu đãi chỉ còn 45 suất!
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section" style={{background: 'var(--bg-section-alt)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question"><ShieldCheck color="var(--primary)" size={22} /> Bảo mật có thực sự an toàn?</div>
              <p className="faq-answer">Mọi dữ liệu được mã hóa chuẩn AES-128 bởi chip MJA1. Bạn là người duy nhất có quyền truy cập hình ảnh.</p>
            </div>
            <div className="faq-item">
              <div className="faq-question"><Smartphone color="var(--primary)" size={22} /> Cài đặt có phức tạp không?</div>
              <p className="faq-answer">Rất đơn giản qua app Mi Home. Chỉ mất 2 phút để kết nối và bắt đầu sử dụng.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Xiaomi Smart Camera C301. Sản phẩm phân phối chính hãng.</p>
        </div>
      </footer>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
