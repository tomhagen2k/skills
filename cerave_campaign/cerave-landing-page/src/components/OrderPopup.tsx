"use client";

import { useState } from "react";
import { X, CheckCircle2, Loader2, Gift } from "lucide-react";

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderPopup({ isOpen, onClose }: OrderPopupProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    package: "combo",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fake webhook delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In real scenario, post to webhook here
      /*
      await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, order_id: `CV-${Date.now()}` })
      });
      */

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {success ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Đặt hàng thành công!</h3>
            <p className="text-slate-600 mb-6">
              Mã đơn hàng của bạn là: <span className="font-bold text-[#007680]">CV-{Math.floor(Math.random() * 100000)}</span><br />
              Chuyên viên da liễu sẽ liên hệ với bạn trong vòng 24h.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#007680] text-white rounded-xl font-medium hover:bg-[#005a61] transition-colors"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Đăng Ký Tư Vấn & Mua Hàng</h2>
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-2 rounded-lg">
                <Gift className="w-5 h-5" />
                <span className="text-sm font-medium">Tặng mini-size cho 100 khách hàng đầu tiên!</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Gói ưu đãi</label>
                <select 
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007680] focus:border-transparent bg-slate-50"
                >
                  <option value="combo">Combo Sữa rửa mặt + Kem dưỡng (Giảm 20%)</option>
                  <option value="single">Chỉ mua Sữa rửa mặt CeraVe Da Dầu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007680] focus:border-transparent"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007680] focus:border-transparent"
                  placeholder="09xx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Địa chỉ nhận hàng</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007680] focus:border-transparent"
                  placeholder="Nhập địa chỉ giao hàng"
                  rows={2}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-4 bg-[#007680] text-white rounded-xl font-bold text-lg hover:bg-[#005a61] transition-colors flex items-center justify-center disabled:opacity-70 shadow-lg shadow-[#007680]/30"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Đang xử lý...</>
                ) : (
                  "Xác Nhận Đặt Hàng"
                )}
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">
                Thông tin của bạn được bảo mật tuyệt đối. Cam kết hàng chính hãng 100%.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
