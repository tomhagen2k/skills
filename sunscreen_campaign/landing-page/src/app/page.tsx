"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Star,
  ArrowRight,
  ShieldAlert,
  Frown,
  Activity,
  Zap
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass border-b border-white/20 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
            <Sun className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary-600">SUN<span className="text-foreground">SHIELD</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-primary-500 transition-colors">Tính năng</a>
          <a href="#benefits" className="hover:text-primary-500 transition-colors">Lợi ích</a>
          <a href="#testimonials" className="hover:text-primary-500 transition-colors">Đánh giá</a>
          <a href="#faq" className="hover:text-primary-500 transition-colors">Hỏi đáp</a>
          <button className="bg-primary-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition-all hover:scale-105 active:scale-95">
            Mua Ngay
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Tính năng</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Lợi ích</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Đánh giá</a>
            <button className="bg-primary-500 text-white py-3 rounded-xl font-bold">TƯ VẤN NGAY</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-4xl md:text-5xl font-black mb-4 tracking-tight", light ? "text-white" : "text-gray-900")}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-lg max-w-2xl mx-auto", light ? "text-white/80" : "text-gray-600")}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const BenefitCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50 hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
  >
    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const FeatureSection = ({ title, desc, img, reverse = false }: { title: string, desc: string, img: string, reverse?: boolean }) => (
  <div className={cn("flex flex-col md:flex-row items-center gap-12 mb-24", reverse && "md:flex-row-reverse")}>
    <div className="flex-1">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </div>
    <div className="flex-1 space-y-6">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-4">
          <Zap className="w-4 h-4" /> ĐỘT PHÁ CÔNG NGHỆ
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">{title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{desc}</p>
        <ul className="mt-8 space-y-3">
          {["Hiệu quả tức thì", "Kiểm nghiệm lâm sàng", "Phù hợp mọi loại da"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 font-semibold text-gray-800">
              <CheckCircle2 className="text-primary-500 w-5 h-5" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const Testimonial = ({ name, role, content, image, rating = 5 }: { name: string, role: string, content: string, image?: string, rating?: number }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />)}
    </div>
    <p className="text-gray-700 italic mb-6 flex-1">"{content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 relative">
        {image && <Image src={image} alt={name} fill className="object-cover" />}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-4">
      <button 
        className="w-full flex items-center justify-between py-2 text-left hover:text-primary-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <ChevronDown className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 py-2 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page ---

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({ h: 47, m: 59, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background image */}
        <div className="absolute inset-0 -z-20 opacity-30">
          <Image src="/images/abstract-background.png" alt="Background" fill className="object-cover" priority />
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary-100 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-orange-200 blur-[120px] rounded-full opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-primary-50">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">Sản phẩm bán chạy nhất 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Bảo vệ da <span className="text-primary-500">vô hình</span>, mỏng nhẹ như <span className="text-primary-600">Serum</span>.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Giải pháp chống nắng thế hệ mới dạng Fluid lai Serum siêu thấm. Bảo vệ toàn diện SPF 50+ PA++++ nhưng nhẹ tênh, không nhờn rít, không vệt trắng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-500 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-primary-500/30 hover:bg-primary-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Mua Ngay Để Nhận Ưu Đãi <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 text-lg font-bold px-10 py-5 rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Nhận Tư Vấn Da Miễn Phí
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200" />)}
              </div>
              <div className="text-sm font-medium text-gray-600">
                <span className="font-bold text-gray-900">1.200+</span> người đã tin dùng mỗi ngày
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="/images/hero-product-texture.png" alt="SunShield Texture" fill className="object-cover" />
              {/* Glass tag */}
              <div className="absolute bottom-8 left-8 glass p-6 rounded-3xl max-w-[200px]">
                <Droplets className="text-primary-500 w-8 h-8 mb-2" />
                <p className="font-bold text-gray-900">Kết cấu Fluid siêu lỏng</p>
                <p className="text-xs text-gray-600">Thấm thấu tức thì, không bết dính</p>
              </div>
            </div>
            
            {/* Float badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-5 rounded-2xl shadow-xl hidden lg:block"
            >
              <ShieldCheck className="text-green-500 w-8 h-8" />
              <p className="font-bold text-sm">Netlock Tech</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-3 rounded-xl shadow-xl hidden lg:block w-32 h-32 overflow-hidden border-2 border-white"
            >
              <Image src="/images/hero-model-skin.png" alt="Model Skin" fill className="object-cover rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-12 border-y border-gray-50 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Được khuyên dùng bởi các chuyên gia & Báo chí</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            {["VOGUE", "ELLE", "L'OFFICIEL", "BIZARRE", "COSMOPOLITAN"].map(brand => (
              <span key={brand} className="text-2xl font-black text-gray-900 tracking-tighter italic">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Đừng để kem chống nắng trở thành "nỗi ám ảnh" mỗi sáng.
              </h2>
              <div className="space-y-6">
                {[
                  { icon: ShieldAlert, text: "Sợ mặt trắng bệch, nâng tone giả như đeo mặt nạ" },
                  { icon: Frown, text: "Khó chịu vì lớp kem bết dính, nặng mặt cả ngày" },
                  { icon: Activity, text: "Lo lắng đổ dầu, trôi kem làm hỏng lớp makeup" },
                  { icon: Droplets, text: "Da dễ bí tắc, nổi mụn khi dùng KCN truyền thống" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <p className="text-lg text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border border-white/10"
              >
                <Image src="/images/problem-heavy-cream.png" alt="Problem" width={600} height={400} className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-3xl font-black text-primary-500 mb-2">SAI LẦM</p>
                    <p className="text-xl">Dùng KCN dày làm bí tắc lỗ chân lông là nguyên nhân gây mụn số #1</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES & BENEFITS (Z-PATTERN) --- */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Kết hợp giữa bảo vệ toàn diện và chăm sóc da chuyên sâu chỉ trong một bước.">
            Vì sao chọn SunShield?
          </SectionHeading>

          <FeatureSection 
            title="Công nghệ Netlock Tàng hình" 
            desc="Tạo một lớp màng bảo vệ siêu bền vững, chống trôi do mồ hôi, nước và cả ma sát. Nhưng vẫn để lại lớp finish trong suốt như tàng hình trên da."
            img="/images/feature-netlock-shield.png"
          />

          <FeatureSection 
            title="Kết cấu Invisible Fluid" 
            desc="Thẩm thấu nhanh như serum, khô thoáng ngay lập tức. Không để lại vệt trắng, không nâng tone giả, phù hợp với mọi tông da kể cả nam giới."
            img="/images/feature-invisible-finish.png"
            reverse
          />

          <FeatureSection 
            title="Lớp lót Makeup hoàn hảo" 
            desc="Đóng vai trò như một makeup base chuyên nghiệp, giúp lớp nền mịn mượt hơn và bám tốt hơn suốt cả ngày dài làm việc."
            img="/images/feature-waterproof.png"
          />
        </div>
      </section>

      {/* --- QUICK BENEFITS GRID --- */}
      <section id="benefits" className="py-24 bg-primary-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Chúng tôi mang đến giải pháp chống nắng thông minh nhất hiện nay.">
            Giá trị khác biệt
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={ShieldCheck} 
              title="Bảo vệ phổ rộng" 
              desc="SPF 50+ PA++++ bảo vệ da mạnh mẽ trước tia UVA, UVB - nguyên nhân chính gây sạm nám." 
              index={0}
            />
            <BenefitCard 
              icon={Droplets} 
              title="Dưỡng ẩm 24h" 
              desc="Bổ sung hoạt chất dưỡng ẩm và chống oxy hóa, bảo vệ da khỏi bụi mịn và gốc tự do." 
              index={1}
            />
            <BenefitCard 
              icon={Sparkles} 
              title="Không bít tắc" 
              desc="Công thức Non-comedogenic, không gây mụn, an toàn cho cả da dầu và da nhạy cảm nhất." 
              index={2}
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Hơn 10.000 khách hàng đã thay đổi thói quen chống nắng mỗi sáng.">
            Phản hồi từ khách hàng
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              name="Minh Anh" 
              role="Nhân viên văn phòng" 
              image="/images/testimonial-office-woman.png"
              content="Cảm giác mỏng nhẹ cực kỳ, bôi xong thấm ngay, da khô ráo suốt cả ngày ngồi điều hòa. Không còn bị đổ dầu như mấy loại trước."
            />
            <Testimonial 
              name="Tuấn Kiệt" 
              role="Nam giới - Freelancer" 
              image="/images/testimonial-active-man.png"
              content="Con trai ngại nhất là bôi gì lên mặt mà nhìn trắng bệch. Loại này đúng là tàng hình, dùng như không dùng, rất ưng ý."
            />
            <Testimonial 
              name="Thanh Hằng" 
              role="Makeup Artist" 
              image="/images/testimonial-sensitive-skin.png"
              content="Dùng làm lớp lót cực kỳ tốt, nền bám mịn và bền màu hơn hẳn. Khách hàng của mình ai dùng cũng khen nhẹ mặt."
            />
          </div>
        </div>
      </section>

      {/* --- PRICING & OFFER --- */}
      <section className="py-24 bg-primary-600 relative overflow-hidden">
        {/* Abstract decor */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="white" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl"
          >
            <div className="inline-block px-6 py-2 bg-primary-500 text-white rounded-full font-bold text-sm mb-8 animate-bounce">
              ƯU ĐÃI ĐỘC QUYỀN TRONG 48 GIỜ
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Sở hữu ngay với giá cực hời</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <Image src="/images/product-packaging.png" alt="Product Packaging" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-lg max-w-sm text-left">
                Nhận ngay giảm giá 30% và bộ quà tặng Sample dùng thử khi đặt hàng ngay hôm nay. Cam kết hoàn tiền 100% nếu không hài lòng.
              </p>
            </div>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mb-12">
              {[
                { label: "Giờ", value: timeLeft.h },
                { label: "Phút", value: timeLeft.m },
                { label: "Giây", value: timeLeft.s }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-3xl font-black mb-2 shadow-lg">
                    {t.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">{t.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 line-through text-2xl">650.000đ</span>
                <span className="text-primary-600 text-5xl font-black">455.000đ</span>
              </div>
              
              <button className="w-full bg-primary-600 text-white text-xl font-black py-6 rounded-3xl shadow-xl shadow-primary-600/30 hover:bg-primary-700 transition-all hover:scale-[1.02] active:scale-95">
                ĐẶT HÀNG NGAY - NHẬN QUÀ TẶNG
              </button>
              
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Chỉ còn 15 suất quà tặng cuối cùng trong hôm nay.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading>Giải đáp thắc mắc</SectionHeading>
          <div className="space-y-2">
            <FAQItem 
              question="Sản phẩm có gây cay mắt không?" 
              answer="SunShield được thiết kế với công nghệ Netlock cố định màng chống nắng trên bề mặt da, giúp sản phẩm không bị chạy vào mắt, hạn chế tối đa tình trạng cay mắt khi đổ mồ hôi." 
            />
            <FAQItem 
              question="Da dầu mụn có dùng được không?" 
              answer="Hoàn toàn có thể. Kết cấu Serum lai Fluid cực kỳ mỏng nhẹ và không gây bít tắc lỗ chân lông (Non-comedogenic), giúp da luôn thoáng khí, không gây mụn." 
            />
            <FAQItem 
              question="Có cần tẩy trang khi chỉ dùng kem chống nắng này không?" 
              answer="Có. Vì sản phẩm có khả năng chống nước và bám bền (Netlock), bạn nên sử dụng tẩy trang vào cuối ngày để làm sạch sâu màng bảo vệ, giúp da được nghỉ ngơi tốt nhất." 
            />
            <FAQItem 
              question="Nam giới dùng có bị lộ không?" 
              answer="Không hề. Sản phẩm thẩm thấu hoàn toàn và tàng hình trên da, không để lại vệt trắng hay lớp finish bóng dầu, rất phù hợp cho nam giới cần vẻ ngoài tự nhiên." 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER / FINAL CTA --- */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-8 h-8 text-primary-500" />
                <span className="text-2xl font-black text-gray-900 tracking-tight italic">SUNSHIELD</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Thương hiệu tiên phong trong các giải pháp bảo vệ da thông minh với công nghệ dược mỹ phẩm hiện đại nhất thế giới.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 bg-white border rounded-full flex items-center justify-center hover:bg-primary-50 hover:text-primary-500 transition-colors cursor-pointer"><Activity className="w-4 h-4" /></div>)}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1">
              <div>
                <h5 className="font-bold text-gray-900 mb-6">Về chúng tôi</h5>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-primary-500 cursor-pointer">Câu chuyện thương hiệu</li>
                  <li className="hover:text-primary-500 cursor-pointer">Công nghệ Netlock</li>
                  <li className="hover:text-primary-500 cursor-pointer">Bảo mật thông tin</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-6">Hỗ trợ khách hàng</h5>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li className="hover:text-primary-500 cursor-pointer">Chính sách hoàn tiền</li>
                  <li className="hover:text-primary-500 cursor-pointer">Giao hàng & Đổi trả</li>
                  <li className="hover:text-primary-500 cursor-pointer">Kiểm tra đơn hàng</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="font-bold text-gray-900 mb-6">Đăng ký nhận tin</h5>
                <div className="flex gap-2">
                  <input type="email" placeholder="Email của bạn" className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  <button className="bg-primary-500 text-white p-3 rounded-xl hover:bg-primary-600"><ArrowRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-200 text-center text-gray-400 text-xs font-medium">
            © 2026 SUNSHIELD VIETNAM. ALL RIGHTS RESERVED. 
          </div>
        </div>
      </footer>
    </div>
  );
}
