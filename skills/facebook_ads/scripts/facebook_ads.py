"""
Skill: Viết Content Facebook Ads Hiệu Quả
Mô tả: Kỹ năng sáng tạo nội dung quảng cáo Facebook chuyên nghiệp sử dụng các Framework AIDA, PAS, BAB và kỹ thuật tối ưu chuyển đổi.
"""

from typing import List, Optional, Dict, Any

def build_facebook_ad_prompt(
    product_service: str,
    usp: str,
    target_audience: str,
    pain_point: str,
    desire: str,
    offer: str,
    cta: str,
    frameworks: List[str] = ["PAS", "AIDA", "BAB"],
    deadline: Optional[str] = None,
    tone: str = "thân thiện, chuyên nghiệp",
    word_count: str = "150-250 từ"
) -> str:
    """
    Tạo prompt chuẩn để sinh ra nội dung quảng cáo Facebook tối ưu chuyển đổi.
    """
    prompt = "Hãy đóng vai là một chuyên gia Copywriter Facebook Ads hàng đầu. "
    prompt += f"Hãy viết {len(frameworks)} phiên bản Facebook Ads content cho tôi dựa trên các thông tin sau:\n\n"
    
    prompt += "THÔNG TIN SẢN PHẨM & KHÁCH HÀNG:\n"
    prompt += f"- Sản phẩm/Dịch vụ: {product_service}\n"
    prompt += f"- USP (Điểm khác biệt): {usp}\n"
    prompt += f"- Target audience: {target_audience}\n"
    prompt += f"- Pain point chính: {pain_point}\n"
    prompt += f"- Kết quả/lợi ích nổi bật (Desire): {desire}\n"
    prompt += f"- Offer/Ưu đãi: {offer}\n"
    prompt += f"- CTA mong muốn: {cta}\n"
    
    if deadline:
        prompt += f"- Deadline/Urgency: {deadline}\n"
        
    prompt += "\nYÊU CẦU ĐẦU RA:\n"
    for i, framework in enumerate(frameworks, 1):
        prompt += f"- Phiên bản {i}: Sử dụng framework {framework}\n"
        
    prompt += "\nCÁC YÊU CẦU KỸ THUẬT & TỐI ƯU (Dựa trên SKILL.md):\n"
    prompt += f"- Mỗi bài có độ dài khoảng {word_count}.\n"
    prompt += f"- Viết bằng tiếng Việt, với giọng văn: {tone}.\n"
    prompt += "- Hook phải đủ mạnh để dừng scroll (gây sốc, đặt câu hỏi, nêu trúng nỗi đau).\n"
    prompt += "- Cấu trúc bài viết dễ đọc trên mobile (dòng ngắn, xuống hàng thường xuyên).\n"
    prompt += "- Sử dụng emoji phù hợp, làm điểm nhấn thị giác nhưng không lạm dụng.\n"
    prompt += "- Phải có CTA rõ ràng và duy nhất.\n"
    prompt += "- Áp dụng các kỹ thuật nâng cao: Social Proof mạnh mẽ, Specificity (Cụ thể hóa), Risk Reversal (Xóa bỏ rủi ro).\n"
    prompt += "- Không vi phạm chính sách quảng cáo của Facebook.\n"
    
    return prompt

def build_video_script_prompt(
    product_service: str,
    usp: str,
    target_audience: str,
    pain_point: str,
    offer: str,
    cta: str,
    duration: str = "30s"
) -> str:
    """
    Tạo prompt cho kịch bản video ngắn (TikTok/Reels/FB Ads).
    """
    prompt = "Hãy đóng vai là một Creative Director chuyên về Video Viral Ads. "
    prompt += f"Viết kịch bản video ngắn {duration} tối ưu chuyển đổi.\n\n"
    
    prompt += "THÔNG TIN CHIẾN DỊCH:\n"
    prompt += f"- Sản phẩm: {product_service}\n"
    prompt += f"- USP: {usp}\n"
    prompt += f"- Target: {target_audience}\n"
    prompt += f"- Nỗi đau: {pain_point}\n"
    prompt += f"- Offer: {offer}\n"
    prompt += f"- CTA: {cta}\n\n"
    
    prompt += "CẤU TRÚC KỊCH BẢN (2 CỘT: VISUAL & AUDIO):\n"
    prompt += "1. Hook (0-3s): Gây sốc hoặc nêu đúng nỗi đau.\n"
    prompt += "2. Problem (3-8s): Khoét sâu nỗi đau, đồng cảm.\n"
    prompt += "3. Solution (8-18s): Đưa ra giải pháp, nêu bật USP.\n"
    prompt += "4. Proof (18-25s): Bằng chứng (Review/Demo).\n"
    prompt += "5. CTA (25-30s): Kêu gọi hành động rõ ràng.\n\n"
    
    prompt += "YÊU CẦU KỸ THUẬT:\n"
    prompt += "- Nhịp điệu nhanh, lôi cuốn.\n"
    prompt += "- Ngôn ngữ đời thường, dễ hiểu.\n"
    prompt += "- Gợi ý các hiệu ứng chuyển cảnh (transitions) và text overlay.\n"
    
    return prompt

def build_landing_page_prompt(
    product_service: str,
    usp: str,
    target_audience: str,
    pain_point: str,
    offer: str,
    brand_identity: str = "Hiện đại, Công nghệ"
) -> str:
    """
    Tạo prompt xây dựng Landing Page (Next.js + Tailwind).
    """
    prompt = "Hãy đóng vai là một Senior Frontend Developer & UI/UX Specialist. "
    prompt += "Xây dựng Landing Page cao cấp tối ưu chuyển đổi bằng Next.js và Tailwind CSS.\n\n"
    
    prompt += "THÔNG TIN NỘI DUNG:\n"
    prompt += f"- Sản phẩm: {product_service}\n"
    prompt += f"- USP: {usp}\n"
    prompt += f"- Target Audience: {target_audience}\n"
    prompt += f"- Pain Point: {pain_point}\n"
    prompt += f"- Offer: {offer}\n"
    prompt += f"- Brand Identity: {brand_identity}\n\n"
    
    prompt += "YÊU CẦU THIẾT KẾ & KỸ THUẬT (Dựa trên SKILL.md):\n"
    prompt += "- Bố cục: Tràn viền (Full-width), Z-pattern, Adaptive Layout.\n"
    prompt += "- Thẩm mỹ: Glassmorphism, Soft & Deep Shadows, Modern Typography (Inter/Outfit).\n"
    prompt += "- Interactive: Micro-interactions, Scroll Reveal, Hover Effects.\n"
    prompt += "- Sections bắt buộc:\n"
    prompt += "  1. Hero Section (Headline mạnh + CTA Popup)\n"
    prompt += "  2. Social Proof (Trust badges)\n"
    prompt += "  3. Problem & Agitation\n"
    prompt += "  4. Features & Benefits (Xen kẽ ảnh/text)\n"
    prompt += "  5. Testimonials (Carousel/Grid)\n"
    prompt += "  6. Offer & Countdown Timer\n"
    prompt += "  7. FAQ & Final CTA\n\n"
    
    prompt += "YÊU CẦU CODE:\n"
    prompt += "- Clean code, component-based.\n"
    prompt += "- Mobile-first responsive.\n"
    prompt += "- Tích hợp Webhook cho Form đăng ký.\n"
    prompt += "- Gợi ý 12-15 prompt tạo ảnh Midjourney trong file prompt_image.md.\n"
    
    return prompt

def analyze_ads_kpi(
    ctr: float,
    cpc: float,
    cpl: float,
    roas: float,
    relevance_score: int,
    frequency: float
) -> Dict[str, Any]:
    """
    Phân tích chỉ số KPI quảng cáo và đưa ra khuyến nghị.
    """
    recommendations = []
    status = "Healthy"
    
    if ctr < 0.01: # < 1%
        recommendations.append("CTR thấp (< 1%): Hook hoặc Creative không đủ hấp dẫn. Hãy thử thay đổi hình ảnh hoặc câu tiêu đề.")
        status = "Needs Optimization"
    
    if relevance_score < 5:
        recommendations.append("Relevance Score thấp (< 5/10): Nội dung không phù hợp với đối tượng mục tiêu. Hãy kiểm tra lại target audience.")
        status = "Critical"
        
    if frequency > 4.0:
        recommendations.append("Frequency quá cao (> 4): Khán giả đã 'chai mặt' với quảng cáo. Cần thay mới Creative ngay lập tức.")
        status = "Needs Optimization"
        
    if roas < 1.5:
        recommendations.append("ROAS thấp (< 1.5x): Chiến dịch đang lỗ hoặc hòa vốn. Cần tối ưu lại Offer hoặc Phễu bán hàng.")
        status = "Critical"

    return {
        "status": status,
        "metrics": {
            "CTR": f"{ctr*100:.2f}%",
            "ROAS": f"{roas:.2f}x",
            "Frequency": frequency
        },
        "recommendations": recommendations if recommendations else ["Các chỉ số đang tốt. Tiếp tục theo dõi và scale budget."]
    }

def evaluate_ad_content(
    ad_content: str,
    target_audience: str,
    objective: str = "Conversion"
) -> Dict[str, Any]:
    """
    Đánh giá chi tiết nội dung bài quảng cáo.
    """
    issues = []
    score = 100
    
    # Check Hook
    lines = ad_content.strip().split('\n')
    if not lines:
        return {"score": 0, "issues": ["Nội dung trống"]}
        
    hook = lines[0]
    if len(hook) > 100:
        issues.append("Hook quá dài, dễ bị ẩn trên mobile.")
        score -= 10
    
    # Check CTA
    cta_keywords = ["nhắn tin", "đăng ký", "mua ngay", "liên hệ", "inbox", "comment", "click"]
    has_cta = any(kw in ad_content.lower() for kw in cta_keywords)
    if not has_cta:
        issues.append("Thiếu lời kêu gọi hành động (CTA) rõ ràng.")
        score -= 20
        
    # Check Social Proof
    if not any(char.isdigit() for char in ad_content):
        issues.append("Thiếu bằng chứng số liệu (Social Proof/Specificity).")
        score -= 10
        
    # Check formatting
    if ad_content.count('\n\n') < 2:
        issues.append("Thiếu khoảng trống trắng, bài viết khó đọc trên mobile.")
        score -= 15
        
    return {
        "score": max(0, score),
        "issues": issues,
        "recommendation": "Pass" if score >= 80 else "Needs Revision"
    }
