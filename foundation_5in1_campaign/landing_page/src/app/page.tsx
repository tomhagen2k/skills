"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CheckCircle2, Shield, Droplets, Clock, Star, X, ChevronRight, PlayCircle } from "lucide-react";

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Use standard img tags to bypass Next.js hostname config issues for this demo
  const images = {
    heroBg: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000",
    heroProduct: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000",
    featureTexture: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000",
    featureHydration: "https://images.unsplash.com/photo-1601049541289-9b1b7ce81938?q=80&w=1000",
    featureSun: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000",
    featureTime: "https://images.unsplash.com/photo-1512496015851-a1cbfc38d011?q=80&w=1000",
    skinCloseUp: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000",
    giftSponge: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1000",
    packaging: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000",
    lifestyle: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000",
    user1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
    user2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
    user3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate webhook call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] font-sans overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={images.heroBg} alt="Background texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-gold text-sm font-semibold tracking-wide border border-rose-100 mb-2">
              ✨ ĐỘT PHÁ CÔNG NGHỆ LIGHTWEAR
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Lớp Nền Hoàn Hảo <br />
              <span className="gradient-text">Chỉ Trong 30 Giây.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Giải pháp trang điểm thế hệ mới kết hợp 5 tính năng ưu việt. Giấu nhẹm thâm mụn, sạm nám và nếp nhăn với một lớp dặm mỏng nhẹ tựa như không.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="px-8 py-4 bg-[#b76e79] hover:bg-[#a05d68] text-white rounded-full font-bold text-lg shadow-xl shadow-rose-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Nhận Ưu Đãi Giảm 30% <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-gray-100">
                <PlayCircle size={20} className="text-[#b76e79]" /> Xem Video Review
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 pt-4">
              <div className="flex -space-x-2">
                <img src={images.user1} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src={images.user2} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src={images.user3} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Hơn 5,000+ phụ nữ đã tin dùng</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img src={images.heroProduct} alt="Kem nền đa năng 5-in-1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="text-white font-medium ml-2">4.9/5 (1,280 Đánh giá)</span>
              </div>
              <p className="text-white/90 font-medium">"Sản phẩm cứu cánh cho làn da thâm mụn của tôi mỗi sáng đi làm. Quá nhanh và tiện lợi!" - Chị Lan Anh</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Badge Section */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Shield size={28} className="text-[#b76e79]" /> Dermatologist Tested</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><CheckCircle2 size={28} className="text-[#b76e79]" /> 100% An Toàn</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><CheckCircle2 size={28} className="text-[#b76e79]" /> Không Cồn & Paraben</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><CheckCircle2 size={28} className="text-[#b76e79]" /> Phù Hợp Da Nhạy Cảm</div>
        </div>
      </section>

      {/* 3. Problem & Agitation */}
      <section className="py-24 px-4 bg-[#faf7f5]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Bạn đang "hành hạ" làn da <br/> bằng những lớp nền dày cộp?</h2>
          <p className="text-xl text-gray-600">Trang điểm lỉnh kỉnh 5-7 bước, bít tắc lỗ chân lông, lớp nền loang lổ mốc phấn chỉ sau nửa ngày. Càng cố che khuyết điểm, nếp nhăn và mụn càng lộ rõ.</p>
          <div className="mt-10 rounded-3xl overflow-hidden shadow-xl h-[400px]">
            <img src={images.skinCloseUp} alt="Làn da" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Features & Benefits (Z-pattern) */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sức Mạnh 5-Trong-1 <br/>Đánh Thức Làn Da Rạng Rỡ</h2>
            <p className="text-lg text-gray-600">Công nghệ độc quyền gộp 5 bước trang điểm và dưỡng da phức tạp vào 1 thao tác dặm duy nhất.</p>
          </div>

          {/* Feature 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-[#b76e79]"><CheckCircle2 size={32} /></div>
              <h3 className="text-3xl font-bold">Che Phủ Hoàn Hảo & Tự Nhiên</h3>
              <p className="text-lg text-gray-600">Công nghệ "Lightwear" xóa mờ nếp nhăn, thâm mụn và đốm nâu ngay tức thì. Lớp finish căng bóng ngọc trai, không bết dính, không trắng ảo.</p>
            </div>
            <div className="order-1 lg:order-2 h-[400px] rounded-[2rem] overflow-hidden shadow-xl">
              <img src={images.featureTexture} alt="Texture kem nền" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-xl">
              <img src={images.featureHydration} alt="Dưỡng ẩm sâu" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500"><Droplets size={32} /></div>
              <h3 className="text-3xl font-bold">Dưỡng Ẩm Chuyên Sâu</h3>
              <p className="text-lg text-gray-600">Chiết xuất Trà xanh & Niacinamide cấp nước liên tục. Chấm dứt tình trạng cakey (mốc nền) thường gặp, nuôi dưỡng làn da khỏe mạnh từ bên trong.</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500"><Shield size={32} /></div>
              <h3 className="text-3xl font-bold">Bảo Vệ Da Với SPF 50+</h3>
              <p className="text-lg text-gray-600">Chống nắng quang phổ rộng, ngăn chặn tia UVA/UVB và ánh sáng xanh, chống lại sự hình thành sạm nám và lão hóa sớm do môi trường.</p>
            </div>
            <div className="order-1 lg:order-2 h-[400px] rounded-[2rem] overflow-hidden shadow-xl">
              <img src={images.featureSun} alt="Chống nắng SPF" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-xl">
              <img src={images.featureTime} alt="Bền màu 24h" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500"><Clock size={32} /></div>
              <h3 className="text-3xl font-bold">Bền Màu Suốt 24 Giờ</h3>
              <p className="text-lg text-gray-600">Khả năng kiềm dầu xuất sắc, chống nước và mồ hôi. Tự tin hoạt động cả ngày dài mà lớp nền không hề xuống tông hay xê dịch.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Image Gallery Extra */}
      <section className="py-16 bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-10">Vẻ Đẹp Hoàn Hảo Từ Mọi Góc Nhìn</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-64 rounded-2xl overflow-hidden shadow-md"><img src={images.lifestyle} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/></div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-md"><img src={images.packaging} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/></div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-md"><img src={images.giftSponge} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/></div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-md"><img src={images.heroBg} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/></div>
           </div>
        </div>
      </section>

      {/* 6. Offer & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={images.lifestyle} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">Sẵn Sàng Cho Sự Thay Đổi?</h2>
          <p className="text-xl text-gray-300">Đăng ký ngay hôm nay để trở thành 1 trong 50 khách hàng may mắn nhận ưu đãi giới hạn.</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
             <div>
                <h3 className="text-2xl font-bold text-rose-300 mb-4">Gói Trải Nghiệm</h3>
                <ul className="space-y-3">
                   <li className="flex gap-2 items-center"><CheckCircle2 className="text-rose-400" size={20}/> Kem nền Đa Năng 5-in-1</li>
                   <li className="flex gap-2 items-center"><CheckCircle2 className="text-rose-400" size={20}/> Freeship Toàn Quốc</li>
                   <li className="flex gap-2 items-center font-bold text-yellow-300"><CheckCircle2 className="text-yellow-300" size={20}/> TẶNG: Mút tán cao cấp (Trị giá 150k)</li>
                </ul>
             </div>
             <div className="flex flex-col justify-center items-center border-l border-white/20 pl-0 md:pl-8 mt-6 md:mt-0">
                <p className="text-gray-400 line-through text-xl">850,000đ</p>
                <p className="text-5xl font-bold text-white mb-6">595k</p>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full py-4 bg-[#b76e79] hover:bg-[#a05d68] rounded-xl font-bold text-lg shadow-lg shadow-rose-900/50 transition-all hover:-translate-y-1"
                >
                  ĐĂNG KÝ MUA NGAY
                </button>
                <p className="text-sm text-rose-300 mt-3 animate-pulse">⏰ Ưu đãi kết thúc sau 24h</p>
             </div>
          </div>
        </div>
      </section>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => !isSubmitting && setIsPopupOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {isSuccess ? (
                <div className="p-10 text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Đặt hàng thành công!</h3>
                  <p className="text-gray-600">Chuyên viên của chúng tôi sẽ liên hệ với bạn trong vòng 30 phút để xác nhận tone da và địa chỉ giao hàng.</p>
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-[#f5ebe6] p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Nhận Ưu Đãi 30%</h3>
                    <p className="text-sm text-gray-600">Điền thông tin để chuyên gia tư vấn tone da phù hợp miễn phí cho bạn.</p>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b76e79] focus:border-transparent outline-none transition-all" placeholder="Nhập họ và tên của bạn" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b76e79] focus:border-transparent outline-none transition-all" placeholder="Nhập số điện thoại" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ nhận hàng (Tùy chọn)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b76e79] focus:border-transparent outline-none transition-all" placeholder="Nhập địa chỉ của bạn" />
                    </div>
                    
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full py-4 mt-4 bg-[#b76e79] hover:bg-[#a05d68] text-white rounded-xl font-bold text-lg shadow-md transition-all flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Đang xử lý...</span>
                      ) : (
                        "ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY"
                      )}
                    </button>
                    <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-3">
                      <Shield size={12} /> Thông tin của bạn được bảo mật an toàn 100%
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
