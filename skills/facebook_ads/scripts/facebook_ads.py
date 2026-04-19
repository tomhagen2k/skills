"""
Skill: Viết Content Facebook Ads Hiệu Quả
Mô tả: Kỹ năng sáng tạo nội dung quảng cáo Facebook chuyên nghiệp sử dụng các Framework AIDA, PAS, BAB và kỹ thuật tối ưu chuyển đổi.
"""

from typing import List, Optional

def build_facebook_ad_prompt(
    product_service: str,
    usp: str,
    target_audience: str,
    pain_point: str,
    desire: str,
    offer: str,
    cta: str,
    frameworks: List[str] = ["PAS", "AIDA", "Storytelling"],
    deadline: Optional[str] = None,
    tone: str = "thân thiện, chuyên nghiệp",
    word_count: str = "150-250 từ"
) -> str:
    """
    Tạo prompt chuẩn (system prompt) để sinh ra nội dung quảng cáo Facebook tối ưu chuyển đổi.
    Hàm này kết hợp các thông tin đầu vào (Input) với các Framework (AIDA, PAS, BAB...) 
    để tạo ra một yêu cầu viết bài chi tiết cho AI.

    Args:
        product_service (str): Tên và mô tả ngắn về sản phẩm hoặc dịch vụ.
        usp (str): Điểm bán hàng độc nhất (Unique Selling Proposition) - lý do khách hàng chọn bạn.
        target_audience (str): Chân dung khách hàng mục tiêu.
        pain_point (str): Nỗi đau hoặc vấn đề khách hàng đang gặp phải.
        desire (str): Điều khách hàng khao khát đạt được (kết quả/lợi ích nổi bật).
        offer (str): Ưu đãi hoặc lời đề nghị hấp dẫn (giảm giá, quà tặng, bonus).
        cta (str): Lời kêu gọi hành động (Call To Action) mong muốn khách hàng thực hiện.
        frameworks (List[str], optional): Danh sách các framework viết bài muốn sử dụng. Mặc định là ["PAS", "AIDA", "Storytelling"].
        deadline (Optional[str], optional): Thời hạn để tạo sự khan hiếm (Urgency/Scarcity). Mặc định là None.
        tone (str, optional): Giọng điệu của bài viết (vd: thân thiện, chuyên nghiệp, mạnh mẽ). Mặc định là "thân thiện, chuyên nghiệp".
        word_count (str, optional): Giới hạn độ dài cho mỗi bài viết. Mặc định là "150-250 từ".

    Returns:
        str: Một chuỗi prompt hoàn chỉnh, chi tiết để yêu cầu mô hình ngôn ngữ (LLM) viết content.
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
        
    prompt += "\nCÁC YÊU CẦU KỸ THUẬT & TỐI ƯU:\n"
    prompt += f"- Mỗi bài có độ dài khoảng {word_count}.\n"
    prompt += f"- Viết bằng tiếng Việt, với giọng văn: {tone}.\n"
    prompt += "- Hook phải đủ mạnh để dừng scroll (gây sốc, đặt câu hỏi, nêu trúng nỗi đau).\n"
    prompt += "- Cấu trúc bài viết dễ đọc trên mobile (dòng ngắn, xuống hàng thường xuyên).\n"
    prompt += "- Sử dụng emoji phù hợp, làm điểm nhấn thị giác nhưng không lạm dụng.\n"
    prompt += "- Phải có CTA rõ ràng và duy nhất.\n"
    prompt += "- Không vi phạm chính sách quảng cáo của Facebook (không hứa hẹn viển vông, không dùng từ ngữ cấm).\n"
    
    return prompt

def evaluate_ad_content(
    ad_content: str,
    target_audience: str,
    objective: str = "Conversion"
) -> dict:
    """
    Đánh giá nhanh nội dung bài quảng cáo dựa trên checklist tối ưu.

    Args:
        ad_content (str): Nội dung bài viết quảng cáo cần đánh giá.
        target_audience (str): Khách hàng mục tiêu của bài viết.
        objective (str, optional): Mục tiêu chiến dịch (Awareness, Traffic, Lead Generation, Conversion). Mặc định là "Conversion".

    Returns:
        dict: Kết quả đánh giá bao gồm điểm số ước lượng và các gợi ý cải thiện.
    """
    issues = []
    score = 100
    
    # Kiểm tra Hook
    if len(ad_content.split('\n')[0]) > 100:
        issues.append("Dòng đầu tiên (Hook) quá dài. Hãy làm nó ngắn gọn và gây chú ý mạnh hơn.")
        score -= 10
        
    # Kiểm tra độ dài
    words = len(ad_content.split())
    if objective == "Conversion" and words < 100:
        issues.append("Bài viết hơi ngắn so với mục tiêu Conversion (nên từ 150-300 từ).")
        score -= 5
    elif objective == "Traffic" and words > 200:
        issues.append("Bài viết hơi dài so với mục tiêu Traffic (nên từ 80-150 từ).")
        score -= 5
        
    # Kiểm tra định dạng (xuống dòng)
    if ad_content.count('\n\n') == 0 and words > 100:
        issues.append("Bài viết đang thiếu khoảng trắng. Cần xuống dòng và chia đoạn ngắn (1-2 dòng/đoạn) để dễ đọc trên mobile.")
        score -= 15
        
    return {
        "score": max(0, score),
        "issues_found": issues,
        "recommendation": "Pass" if score >= 80 else "Needs Revision"
    }
