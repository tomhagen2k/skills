import React, { useState, useEffect } from 'react';
import { 
  Sun, EyeOff, Monitor, ShieldCheck, ZapOff, ThumbsUp, 
  Clock, Truck, RotateCcw, ChevronRight, XCircle
} from 'lucide-react';
import './index.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = (e) => {
    e.preventDefault();
    document.getElementById('offer-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '24px 0', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
            <span className="text-gradient">Lumi</span>Smart
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Bảo Vệ Đôi Mắt Con Yêu Khỏi Cận Thị Với <span className="text-gradient">Ánh Sáng Tự Nhiên</span></h1>
            <p className="subtitle">
              Đèn bàn học LED thông minh công nghệ Full Spectrum. Triệt tiêu ánh sáng xanh, chống nhấp nháy, giúp con tập trung không lo mỏi mắt. Phù hợp cho cả dân văn phòng & thiết kế đồ họa.
            </p>
            <a href="#offer" onClick={scrollToOffer} className="btn btn-primary">
              NHẬN ƯU ĐÃI & QUÀ TẶNG <ChevronRight size={20} />
            </a>
          </div>
          <div className="hero-image">
            <div className="glow"></div>
            <div className="hero-img-inner">
              <img src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Đèn bàn học thông minh" />
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <p>Được tin dùng bởi 10.000+ phụ huynh và dân văn phòng trên toàn quốc</p>
          <div className="logo-strip">
            <ShieldCheck size={40} />
            <ThumbsUp size={40} />
            <Monitor size={40} />
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container problem-grid">
          <div>
            <img src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Đứa trẻ đang mỏi mắt" style={{ borderRadius: '24px', opacity: 0.8 }} />
          </div>
          <div>
            <h2>Ánh sáng kém chất lượng đang <span style={{color: '#fca5a5'}}>"phá hủy"</span> thị lực của gia đình bạn?</h2>
            <ul className="problem-list">
              <li>
                <XCircle className="icon" />
                <span>Đỏ mắt, nhức mỏi, giảm tập trung sau 30 phút ngồi học?</span>
              </li>
              <li>
                <XCircle className="icon" />
                <span>Ánh sáng xanh từ đèn LED rẻ tiền gây rối loạn giấc ngủ?</span>
              </li>
              <li>
                <XCircle className="icon" />
                <span>Hiện tượng chớp tắt (flicker) làm não bộ mệt mỏi mà bạn không hề hay biết?</span>
              </li>
            </ul>
            <p style={{marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600}}>
              Tỷ lệ cận thị học đường đang ở mức báo động! Đã đến lúc phải thay đổi.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Trải nghiệm ánh sáng chuẩn mực như đang dưới <span className="text-gradient">bóng râm tự nhiên</span></h2>
            <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>Giải pháp toàn diện bảo vệ "cửa sổ tâm hồn" cho bạn và các bé.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Sun size={32} /></div>
              <h3>Công nghệ Full Spectrum (CRI &gt; 95)</h3>
              <p>Mô phỏng hoàn hảo dải ánh sáng mặt trời. Màu sắc chân thực tuyệt đối, không gây lóa, phù hợp cho mọi nhu cầu học tập và làm việc, đặc biệt là thiết kế đồ họa.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><EyeOff size={32} /></div>
              <h3>Triệt tiêu ánh sáng xanh & Nhấp nháy</h3>
              <p>Công nghệ chip LED cao cấp bảo vệ võng mạc, ngăn ngừa cận thị và suy giảm thị lực. Mắt luôn dịu êm dù làm việc hay học tập xuyên đêm.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><ZapOff size={32} /></div>
              <h3>Thiết kế tối giản, hiện đại</h3>
              <p>Giải phóng không gian làm việc. Không còn dây nhợ lằng nhằng, điều khiển cảm ứng thông minh mang lại cảm hứng sáng tạo mỗi ngày.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" style={{background: 'var(--bg-darker)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Hàng ngàn khách hàng đã <span className="text-gradient">hài lòng</span></h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote">"Từ ngày đổi sang đèn này, bé nhà mình học bài không còn kêu mỏi mắt hay dụi mắt nữa. Đèn sáng rất dịu và êm. Cháu ngồi học cũng tập trung hơn hẳn."</p>
              <div className="author">
                <img className="author-avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" />
                <div className="author-info">
                  <h4>Chị Mai Hương</h4>
                  <span>Phụ huynh, 32 tuổi</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="quote">"Ánh sáng của đèn này hiển thị màu sắc trên bản vẽ rất chuẩn do CRI cao. Thiết kế đẹp, góc làm việc trông xịn hẳn ra, làm việc đêm không bị đau đầu."</p>
              <div className="author">
                <img className="author-avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="Avatar" />
                <div className="author-info">
                  <h4>Anh Tuấn Minh</h4>
                  <span>UI/UX Designer, 28 tuổi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer-section" className="offer-section">
        <div className="container">
          <div className="offer-card">
            <h2>Đầu tư cho thị lực chưa bao giờ <span style={{color: 'var(--accent)'}}>xứng đáng</span> đến thế!</h2>
            
            <ul className="offer-list">
              <li>
                <Clock className="icon" size={28} />
                <span><strong>Tặng kèm Đồng hồ Pomodoro</strong> trị giá 150.000đ</span>
              </li>
              <li>
                <Truck className="icon" size={28} />
                <span><strong>MIỄN PHÍ Vận chuyển toàn quốc</strong></span>
              </li>
              <li>
                <RotateCcw className="icon" size={28} />
                <span><strong>Bảo hành 1 ĐỔI 1 tận nhà</strong> trong suốt 12 tháng.</span>
              </li>
            </ul>
            
            <button className="btn btn-accent" style={{width: '100%', fontSize: '1.2rem', padding: '20px'}}>
              ĐẶT HÀNG NGAY - NHẬN QUÀ TẶNG
            </button>
            
            <div className="urgency-text">
              ⏱ Ưu đãi kết thúc sau: <strong>{formatTime(timeLeft)}</strong> (Chỉ còn 12 suất quà tặng)
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Câu hỏi thường gặp</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">Đèn này trẻ con có dễ tự sử dụng không?</div>
              <div className="faq-a">Đèn sử dụng phím cảm ứng một chạm siêu nhạy và rất trực quan, trẻ em từ lớp 1 đã có thể tự bật/tắt và điều chỉnh độ sáng dễ dàng.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Nếu đèn bị lỗi thì chế độ bảo hành thế nào?</div>
              <div className="faq-a">Chúng tôi áp dụng chính sách 1 đổi 1 tận nhà trong 12 tháng. Nếu có bất kỳ lỗi nào từ nhà sản xuất, nhân viên bưu cục sẽ mang đèn mới tới đổi tận nơi cho bạn.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Đèn có tích điện không hay cắm điện trực tiếp?</div>
              <div className="faq-a">Để đảm bảo độ sáng chuẩn Full Spectrum và công suất ổn định tối đa, đèn sử dụng nguồn cắm điện trực tiếp 220V.</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <h2>Đừng để thị lực bị ảnh hưởng thêm một ngày nào nữa!</h2>
          <p style={{margin: '16px 0 32px'}}>Hãy mang ánh sáng tự nhiên an toàn nhất về góc học tập của con bạn.</p>
          <a href="#offer" onClick={scrollToOffer} className="btn btn-primary">
            MUA NGAY BÂY GIỜ
          </a>
          <div style={{marginTop: '60px', opacity: 0.5, fontSize: '0.9rem'}}>
            &copy; 2026 LumiSmart. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
