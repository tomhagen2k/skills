"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Sparkles, Clock, CheckCircle2, Star, ArrowRight, ChevronDown, X, Gift } from "lucide-react";
import OrderPopup from "@/components/OrderPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute -top-20 -right-20 -z-10 opacity-40 w-[600px] h-[600px] pointer-events-none mix-blend-multiply hidden lg:block">
           <Image src="/images/shape-blob-1.png" alt="blob" fill className="object-contain" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0f2f1] text-[#007680] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Giải pháp số 1 cho da dầu mụn</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Sạch sâu ráo dầu.<br />
              <span className="text-gradient">Không khô căng.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Sữa rửa mặt CeraVe Foaming Cleanser với công thức chứa 3 loại Ceramide thiết yếu và Niacinamide, giúp làm sạch sâu bã nhờn mà vẫn bảo vệ lớp màng ẩm tự nhiên của da.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="px-8 py-4 rounded-full bg-[#007680] text-white font-bold text-lg hover:bg-[#005a61] transition-all shadow-xl shadow-[#007680]/30 flex items-center justify-center gap-2 hover:gap-3"
              >
                Nhận ưu đãi & Quà tặng <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                    User
                  </div>
                ))}
              </div>
              <p>Hơn <span className="font-bold text-slate-700">10,000+</span> khách hàng tin dùng</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:h-[600px] flex items-center justify-center"
          >
            {/* Hero Image */}
            <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-white/50 glass-card">
              <Image 
                src="/images/hero-main.png" 
                alt="Cô gái có làn da sạch mịn với CeraVe" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="border-y border-slate-200/60 bg-white/50 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 tracking-widest uppercase mb-6">Được khuyên dùng bởi</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-black text-slate-800 flex items-center gap-2"><ShieldCheck/> Hiệp hội da liễu</div>
            <div className="text-xl font-black text-slate-800">Elle Beauty</div>
            <div className="text-xl font-black text-slate-800">Vogue</div>
            <div className="text-xl font-black text-slate-800">Cosmopolitan</div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto bg-white/80 rounded-3xl p-6 shadow-sm border border-slate-100/50">
             <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden relative shrink-0 shadow-md">
               <Image src="/images/dermatologist.png" alt="Bác sĩ da liễu" fill className="object-cover" />
             </div>
             <div className="text-center sm:text-left">
               <p className="text-slate-700 font-medium italic mb-3">"Sữa rửa mặt CeraVe Da Dầu là lựa chọn hàng đầu tôi khuyên dùng cho bệnh nhân nhờ khả năng làm sạch sâu bã nhờn mà không phá hủy màng bảo vệ da."</p>
               <p className="text-[#007680] font-bold text-sm">— Dr. Sarah, Chuyên gia Da liễu</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & AGITATION */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Bạn đang bị mắc kẹt trong vòng lặp đổ dầu?</h2>
            <p className="text-lg text-slate-600">Sử dụng sữa rửa mặt có tính tẩy rửa mạnh làm mất đi lớp màng ẩm tự nhiên. Khi da khô, tuyến bã nhờn sẽ hoạt động mạnh hơn để bù đắp, dẫn đến tình trạng bóng dầu và nổi mụn nhiều hơn.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-red-100"
            >
              <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6">
                <Image src="/images/problem-dry-wash.png" alt="Da khô nứt nẻ do rửa mặt sai cách" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sữa rửa mặt thông thường</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Sạch "kin kít" nhưng làm tổn thương hàng rào bảo vệ da.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Gây cảm giác khô rát, căng tức sau khi rửa.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Kích thích tuyến bã nhờn tiết nhiều dầu hơn vào giữa ngày.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#007680] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#007680]/20 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 border-2 border-white/20">
                <Image src="/images/texture-gel-foam.png" alt="Bọt gel mềm mịn của CeraVe" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">CeraVe Sạch Sâu Da Dầu</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Làm sạch sâu bụi bẩn, bã nhờn dịu nhẹ với dạng gel bọt mịn.</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Duy trì màng ẩm tự nhiên, da mềm mịn không căng rát.</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Kiểm soát lượng dầu thừa, hỗ trợ thu nhỏ lỗ chân lông.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES & BENEFITS (Z-Pattern) */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Công thức khoa học phục hồi làn da</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Sự kết hợp hoàn hảo giữa các thành phần thiết yếu giúp làm sạch sâu mà không phá vỡ cân bằng tự nhiên của da.</p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#e0f2f1] flex items-center justify-center text-[#007680] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">3 Ceramides Thiết Yếu (1, 3, 6-II)</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Ceramide chiếm 50% hàng rào bảo vệ da. CeraVe bổ sung trực tiếp 3 loại Ceramide thiết yếu giống hệt Ceramide tự nhiên, giúp phục hồi và củng cố hàng rào bảo vệ, ngăn ngừa tình trạng mất nước qua da.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-[#007680]"/> Giữ ẩm sâu từ bên trong</li>
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-[#007680]"/> Ngăn chặn vi khuẩn xâm nhập</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square rounded-[2.5rem] relative overflow-hidden shadow-xl"
              >
                <Image src="/images/feature-ceramides.png" alt="3 Ceramides thiết yếu" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-[2.5rem] relative overflow-hidden shadow-xl"
              >
                <Image src="/images/feature-niacinamide.png" alt="Tinh chất Niacinamide" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Niacinamide (Vitamin B3)</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Thành phần "vàng" cho làn da dầu mụn. Niacinamide có khả năng làm dịu da đáng kể, giảm thiểu các nốt mụn sưng đỏ, đồng thời kiểm soát lượng bã nhờn tiết ra, giúp lỗ chân lông luôn thông thoáng.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Điều tiết bã nhờn hiệu quả</li>
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Làm dịu nốt mụn sưng đỏ</li>
                </ul>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Công nghệ phát hành chậm MVE</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Không giống như các sản phẩm thông thường, công nghệ độc quyền MVE bao bọc Ceramide trong các quả cầu siêu nhỏ, từ từ giải phóng dưỡng chất vào da liên tục suốt 24 giờ.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-amber-500"/> Da ẩm mượt suốt cả ngày</li>
                  <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-amber-500"/> Không bị khô căng khi ngồi điều hòa</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square rounded-[2.5rem] relative overflow-hidden shadow-xl"
              >
                <Image src="/images/feature-mve.png" alt="Công nghệ giải phóng chậm MVE" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Sự thay đổi ngoạn mục</h2>
            <p className="text-lg text-slate-600">Được yêu thích bởi hàng triệu người dùng trên toàn thế giới.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Minh Anh", type: "Da hỗn hợp thiên dầu", img: "/images/review-1.png", review: "Từ ngày chuyển sang CeraVe, da mình không còn bị bóng dầu vào giữa ngày nữa. Cảm giác rửa xong da sạch bong nhưng sờ lên vẫn mềm mịn rất thích. Lỗ chân lông cũng nhỏ hẳn đi!" },
              { id: 2, name: "Hà Trang", type: "Da dầu mụn", img: "/images/review-2.png", review: "Sữa rửa mặt chân ái của mình! Dùng 2 tuần thấy bã nhờn giảm rõ rệt, mụn viêm cũng xẹp nhanh hơn. Texture dạng gel tạo bọt rất êm, rửa xong không hề có cảm giác khô rát." },
              { id: 3, name: "Hoàng Tùng", type: "Da siêu dầu", img: "/images/review-3.png", review: "Là nam giới nên mình ưu tiên nhanh gọn. Em này làm sạch cực tốt, rửa xong da mát mẻ dễ chịu, kiềm dầu ổn đến chiều. Rất đáng đồng tiền bát gạo, sẽ mua lại." }
            ].map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6 italic grow">"{item.review}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-slate-100 shadow-sm">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 lg:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
               <Image src="/images/lifestyle-washing.png" alt="Thư giãn rửa mặt với CeraVe" fill className="object-cover" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Câu hỏi thường gặp</h2>
                <p className="text-slate-600">Giải đáp những thắc mắc phổ biến về chăm sóc da dầu mụn cùng CeraVe.</p>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Sản phẩm có làm khô da không?", a: "Hoàn toàn không. CeraVe Foaming Cleanser được thiết kế đặc biệt để làm sạch sâu bã nhờn mà không phá vỡ lớp màng ẩm tự nhiên của da nhờ 3 Ceramides thiết yếu." },
                  { q: "Da nhạy cảm có dùng được không?", a: "Có. Sản phẩm không chứa hương liệu, không cồn, không gây bít tắc lỗ chân lông và đã được kiểm nghiệm lâm sàng bởi các bác sĩ da liễu." },
                  { q: "Độ pH của sản phẩm là bao nhiêu?", a: "Sản phẩm có độ pH chuẩn 5.5, hoàn toàn phù hợp với độ pH tự nhiên của da, giúp da khỏe mạnh và hạn chế mụn." }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                  >
                    <button 
                      className="w-full px-6 py-4 flex items-center justify-between font-bold text-left text-slate-800 hover:bg-slate-100 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ml-4 ${activeFaq === index ? "rotate-180" : ""}`} />
                    </button>
                    {activeFaq === index && (
                      <div className="px-6 pb-4 text-slate-600 border-t border-slate-200/60 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 lg:py-32 bg-[#007680] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">Sẵn sàng để có làn da sạch thoáng?</h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12">Chấm dứt nỗi ám ảnh da bóng dầu và mụn ngay hôm nay.</p>
          
          <div className="bg-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md border border-white/20 inline-flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8 text-center sm:text-left mb-12 max-w-2xl w-full mx-auto">
            <div className="w-40 h-40 sm:w-48 sm:h-auto aspect-square relative rounded-2xl overflow-hidden shrink-0 bg-white shadow-xl">
              <Image src="/images/offer-gift.png" alt="Quà tặng mini size" fill className="object-cover p-2" />
            </div>
            <div className="flex flex-col justify-center w-full">
               <h3 className="text-2xl font-bold text-white mb-2">Combo Phục Hồi Chuyên Sâu</h3>
               <p className="text-white/80 mb-4 text-sm sm:text-base">Sữa rửa mặt + Kem dưỡng CeraVe</p>
               <div className="flex items-end justify-center sm:justify-start gap-3 mb-6">
                 <span className="text-3xl sm:text-4xl font-black text-amber-300">Giảm 20%</span>
                 <span className="text-lg line-through text-white/50">850.000đ</span>
               </div>
               <p className="text-sm inline-flex bg-amber-500/20 text-amber-200 py-2 px-3 rounded-lg items-center justify-center sm:justify-start gap-2">
                 <Gift className="w-4 h-4 shrink-0"/> Tặng thêm 1 Mini-size trị giá 95k
               </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-[#007680] font-black text-lg sm:text-xl hover:bg-slate-100 transition-transform hover:scale-105 shadow-2xl shadow-black/20 w-full sm:w-auto"
            >
              ĐẶT HÀNG NGAY HÔM NAY
            </button>
          </div>
        </div>
      </section>

      <OrderPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}
