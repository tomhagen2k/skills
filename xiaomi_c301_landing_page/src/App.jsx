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
  Mic
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
              <h1 className="hero-title section-title">
                An Tâm Tuyệt Đối - Bảo Mật <span className="highlight">Cấp Tài Chính</span> Cho Ngôi Nhà Của Bạn
              </h1>
              <p className="hero-description section-subtitle" style={{textAlign: 'left', margin: '0 0 40px 0'}}>
                Khám phá Xiaomi Smart Camera C301: Độ phân giải 2K sắc nét, nhìn đêm full-color, 
                cùng công nghệ màn che ống kính vật lý đảm bảo 100% sự riêng tư.
              </p>
              <button className="btn-cta" onClick={openModal}>
                BẢO VỆ GIA ĐÌNH NGAY - CHỈ 650.000Đ <ChevronRight size={20} />
              </button>
            </div>
            <div className="hero-image-container">
              {/* Note: In a real app, you'd use generate_image to get a real asset. 
                  Using a placeholder or abstract representation for now. */}
              <div className="hero-image-wrapper glass-card" style={{padding: '20px'}}>
                 <div style={{width: '300px', height: '400px', background: 'linear-gradient(to bottom, #2A2E38, #12151C)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Camera size={120} color="#FF6B00" strokeWidth={1} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="trust-badges">
            <div className="badge-item"><ShieldCheck size={24} /> Chứng nhận BSI</div>
            <div className="badge-item"><ShieldCheck size={24} /> ISO 27001</div>
            <div className="badge-item"><CheckCircle2 size={24} /> 50,000+ Người dùng</div>
            <div className="badge-item">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span>4.9/5 Đánh giá</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem & Agitation */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Cảnh báo rủi ro</span>
            <h2 className="section-title">Lắp camera để bảo vệ, hay đang rước thêm rủi ro?</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card glass-card">
              <div className="problem-icon"><EyeOff size={32} /></div>
              <h3>Nguy Cơ Lộ Đời Tư</h3>
              <p className="text-secondary">Camera trôi nổi dễ bị hacker xâm nhập, hình ảnh sinh hoạt gia đình bị phát tán trên mạng.</p>
            </div>
            <div className="problem-card glass-card">
              <div className="problem-icon"><AlertCircle size={32} /></div>
              <h3>Ban Đêm Bị "Mù"</h3>
              <p className="text-secondary">Hình ảnh ban đêm đen trắng, nhòe nhoẹt, khi có sự cố không thể nhận diện được khuôn mặt kẻ gian.</p>
            </div>
            <div className="problem-card glass-card">
              <div className="problem-icon"><BellRing size={32} /></div>
              <h3>Báo Động Giả Phiền Toái</h3>
              <p className="text-secondary">Chó mèo chạy qua cũng hú còi, làm gián đoạn giấc ngủ và gây hoang mang không đáng có.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features & Benefits */}
      <section className="section" style={{background: 'rgba(255,255,255,0.01)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Tính năng vượt trội</span>
            <h2 className="section-title">Công Nghệ Dẫn Đầu - Giữ Trọn Bình Yên</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-card">
              <EyeOff className="feature-icon" />
              <h4>Tấm Chắn Vật Lý Riêng Tư</h4>
              <p>Khi bạn ở nhà, ống kính có thể tự xoay giấu vào trong lớp vỏ. Không ai có thể nhìn thấy bạn, 100% riêng tư.</p>
            </div>
            <div className="feature-card glass-card">
              <Cpu className="feature-icon" />
              <h4>Chip Bảo Mật Kép MJA1</h4>
              <p>Mã hóa AES-128 chuẩn tài chính ngân hàng. Dữ liệu của bạn chỉ bạn mới có quyền xem, nói không với hacker.</p>
            </div>
            <div className="feature-card glass-card">
              <Camera className="feature-icon" />
              <h4>Nhìn Đêm Full-Color 2K</h4>
              <p>Bóng tối không còn là cản trở. Hình ảnh 3MP 2K siêu nét, màu sắc sống động dù trong bóng tối.</p>
            </div>
            <div className="feature-card glass-card">
              <Smartphone className="feature-icon" />
              <h4>AI Nhận Diện Người</h4>
              <p>Thuật toán thông minh lọc bỏ báo động giả từ thú cưng hay côn trùng, chỉ thông báo khi thực sự có người.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Đánh giá khách hàng</span>
            <h2 className="section-title">Khách Hàng Đã Trải Nghiệm Nói Gì?</h2>
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
              <p>"Điều mình thích nhất là chế độ che ống kính. Tối về hai vợ chồng bấm một phát là ống kính tự gập lại, cảm giác rất an tâm, không sợ bị ai nhìn lén."</p>
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
              <p>"Camera siêu nét! Quán mình tắt đèn vẫn nhìn rõ màu sắc, đàm thoại hai chiều âm thanh rất to và rõ, nhắc nhở nhân viên cực kỳ tiện lợi."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Offer & Pricing */}
      <section className="section">
        <div className="container">
          <div className="offer-box glass-card" style={{textAlign: 'center'}}>
            <span className="section-label">Ưu đãi độc quyền</span>
            <h2 className="section-title">Nâng Cấp An Ninh - Tiết Kiệm Tối Đa</h2>
            <div className="price-display">
              <span className="old-price">890.000đ</span>
              <span className="new-price">650.000đ</span>
            </div>
            <div style={{marginBottom: '40px'}}>
              <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 197, 94, 0.1)', color: '#22C55E', padding: '8px 16px', borderRadius: '50px', fontWeight: '600'}}>
                <CheckCircle2 size={18} /> Tặng gói Cloud 7 ngày miễn phí trọn đời
              </div>
            </div>
            <button className="btn-cta" style={{padding: '24px 60px', fontSize: '20px'}} onClick={openModal}>
              MUA NGAY - NHẬN ƯU ĐÃI <ChevronRight size={24} />
            </button>
            <div className="scarcity">
              <Clock size={18} /> Chỉ còn 45 suất ưu đãi trong tuần này!
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="section-label">Giải đáp thắc mắc</span>
            <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question"><ShieldCheck color="#FF6B00" /> Camera này có dễ bị hack không?</div>
              <p className="faq-answer">Không. C301 được trang bị chip MJA1 có chứng nhận bảo mật. Mỗi dòng dữ liệu truyền đi đều được mã hóa độc lập AES-128 chuẩn ngân hàng.</p>
            </div>
            <div className="faq-item">
              <div className="faq-question"><Smartphone color="#FF6B00" /> Có tự lắp đặt tại nhà được không?</div>
              <p className="faq-answer">Rất dễ dàng! Chỉ cần cắm điện, tải app Mi Home và quét mã QR là camera tự động kết nối trong 2 phút. Có thể treo ngược lên trần nhà tiện lợi.</p>
            </div>
            <div className="faq-item">
              <div className="faq-question"><Mic color="#FF6B00" /> Đàm thoại hai chiều có bị vang hoặc rè không?</div>
              <p className="faq-answer">Loa thiết kế khoang độc lập, khử ồn thông minh giúp âm thanh to, rõ, không bị tạp âm, hỗ trợ giao tiếp mượt mà như gọi điện thoại.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section footer-cta">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="section-title" style={{marginBottom: '32px'}}>
            Đừng Để Sự Riêng Tư Của Gia Đình<br />
            Trở Thành Món Đồ Chơi Của Kẻ Gian!
          </h2>
          <button className="btn-cta" onClick={openModal}>
            ĐẶT MUA XIAOMI C301 BÂY GIỜ - 650.000Đ <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Xiaomi Smart Camera C301. All rights reserved.</p>
          <p style={{fontSize: '12px', marginTop: '10px'}}>Sản phẩm được phân phối chính hãng bởi Xiaomi Vietnam.</p>
        </div>
      </footer>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
