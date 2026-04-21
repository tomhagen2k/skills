import { useState } from 'react';
import './OrderModal.css';

const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/27295251/uj8gsy7/';
const PRODUCT_PRICE = 650000;

function generateOrderId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `XMC301-${ts}-${rand}`;
}

function formatPrice(p) {
  return p.toLocaleString('vi-VN') + 'đ';
}

export default function OrderModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    quantity: 1,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'quantity' ? Math.max(1, Number(value)) : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.address) return;

    setStatus('loading');
    const newOrderId = generateOrderId();
    const totalPrice = PRODUCT_PRICE * form.quantity;

    const payload = {
      Order_id: newOrderId,
      Name: form.name,
      Phone: form.phone,
      City: form.city,
      Address: form.address,
      Quantity: form.quantity,
      Price: formatPrice(totalPrice),
      Product: 'Xiaomi Smart Camera C301',
      Timestamp: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setOrderId(newOrderId);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function handleReset() {
    setForm({ name: '', phone: '', city: '', address: '', quantity: 1 });
    setStatus('idle');
    setOrderId('');
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label="Form đặt hàng">

        {status !== 'success' && (
          <button id="modal-close-btn" className="modal-close-btn" onClick={onClose} aria-label="Đóng">×</button>
        )}

        {status === 'success' ? (
          <div className="success-screen">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="success-title">Đặt hàng thành công! 🎉</h2>
            <p className="success-text">
              Cảm ơn bạn đã tin tưởng Xiaomi Vietnam.<br />
              Đội ngũ tư vấn sẽ liên hệ xác nhận đơn hàng trong vòng <strong>30 phút</strong>.
            </p>
            <div className="success-order-id">
              <p>Mã đơn hàng của bạn:</p>
              <strong>{orderId}</strong>
            </div>
            <button id="success-close-btn" className="success-close-btn" onClick={handleReset}>Về trang chủ</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-badge">🛒 Đặt Hàng Ngay</span>
              <h2 className="modal-title">Xiaomi Smart Camera C301</h2>
              <p className="modal-subtitle">Điền thông tin để chúng tôi giao hàng tận nơi cho bạn!</p>
              <div className="modal-price-tag">
                <span className="modal-price-old">890.000đ</span>
                <span className="modal-price-new">{formatPrice(PRODUCT_PRICE * form.quantity)}</span>
              </div>
            </div>

            <form id="order-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Họ và Tên *</label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Số Điện Thoại *</label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-input"
                    type="tel"
                    placeholder="0901 234 567"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">Số Lượng</label>
                  <input
                    id="quantity"
                    name="quantity"
                    className="form-input"
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="city">Tỉnh / Thành Phố *</label>
                <input
                  id="city"
                  name="city"
                  className="form-input"
                  type="text"
                  placeholder="TP. Hồ Chí Minh"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="address">Địa Chỉ Chi Tiết *</label>
                <input
                  id="address"
                  name="address"
                  className="form-input"
                  type="text"
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'error' && (
                <p style={{ color: '#EF4444', fontSize: '14px', marginBottom: '12px', textAlign: 'center' }}>
                  Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline!
                </p>
              )}

              <button
                id="submit-order-btn"
                type="submit"
                className="modal-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><div className="spinner" /> Đang xử lý đơn hàng...</>
                ) : (
                  <>🛡️ XÁC NHẬN ĐẶT HÀNG — {formatPrice(PRODUCT_PRICE * form.quantity)}</>
                )}
              </button>
              <p className="modal-note">
                🔒 Thông tin được bảo mật. <span>Miễn phí vận chuyển toàn quốc.</span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
