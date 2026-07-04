import React from "react";
import { motion } from "motion/react";

interface NewsPost {
  category: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
}

const newsPosts: NewsPost[] = [
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Cách xác định loại da chính xác tại nhà: Đừng skincare theo cảm giác nữa",
    image: "/images/tin-tuc/xac-dinh-loai-da-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/cach-xac-dinh-loai-da-tai-nha/"
  },
  {
    category: "SKINCARE CÁ NHÂN HÓA",
    title: "Vì sao skincare mãi không hiệu quả? Có thể bạn đang chăm sóc da theo cách của người khác",
    image: "/images/tin-tuc/skincare-ca-nhan-hoa-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/skincare-ca-nhan-hoa/"
  },
  {
    category: "CHĂM SÓC DA KHOA HỌC",
    title: "Bàn trang điểm hay \"nghĩa địa mỹ phẩm\"? Cách chăm da thông minh giúp bà giữ chặt ví tiền!",
    image: "/images/tin-tuc/cham-soc-da-tinh-trang-1.jpg",
    date: "04 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/cham-soc-da-theo-tinh-trang-da/"
  },
  {
    category: "GÓC NHÌN SKINCARE",
    title: "Clip triệu view, da triệu mụn: Vì sao bạn mua mỹ phẩm theo review mãi vẫn không đẹp?",
    image: "/images/tin-tuc/review-my-pham-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/mua-my-pham-theo-review/"
  },
  {
    category: "THIẾT BỊ LÀM ĐẸP",
    title: "Cúng tiền cho mỹ phẩm nhưng da vẫn nát: Do bà xài sai hay tại... đoán mò?",
    image: "/images/tin-tuc/may-phan-tich-da-1.jpg",
    date: "04 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/may-phan-tich-da/"
  },
  {
    category: "CÔNG NGHỆ SOI DA AI",
    title: "Da gào cứu bên dưới mà mắt thường không thấy: Vì sao bạn skincare mãi vẫn xấu?",
    image: "/images/tin-tuc/guong-soi-ai-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/guong-soi-ai/"
  },
  {
    category: "XU HƯỚNG LÀM ĐẸP",
    title: "Beauty Tech là gì? Xu hướng công nghệ làm đẹp đang thay đổi skincare như thế nào?",
    image: "/images/tin-tuc/beauty-tech-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/beauty-tech-la-gi/"
  },
  {
    category: "CÔNG NGHỆ LÀM ĐẸP",
    title: "AI Skincare là gì? Khi công nghệ bắt đầu hiểu làn da của bạn",
    image: "/images/tin-tuc/ai-skincare-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/ai-skincare-la-gi/"
  }
];

export function News() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-bg-dark)] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-12">
        {/* Header Section */}
        <div className="mb-16 border-b border-[var(--color-panel-border)] pb-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-eyebrow mb-3"
          >
            Luvia Journal & Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-h2 text-[#241C1B] mb-6"
          >
            Cập nhật Khoa Học & Công Nghệ Sắc Đẹp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[16px] text-white/60 leading-relaxed max-w-[600px]"
          >
            Khám phá các bài phân tích chuyên sâu về khoa học biểu bì, trí tuệ nhân tạo riêng tư (Edge AI) và nghệ thuật chế tác gương kết tinh bởi đội ngũ cố vấn y khoa của LUVIA.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-white p-8 rounded border border-[var(--color-panel-border)] shadow-sm hover:shadow-md hover:border-[var(--color-brand)]/30 transition-all duration-300 flex flex-col justify-between no-underline"
            >
              <div>
                <span className="editorial-label text-[var(--color-brand)] font-semibold tracking-wider block mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-[22px] font-normal leading-snug text-[#241C1B] mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="overflow-hidden rounded-md mb-6 border border-[var(--color-panel-border)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-brand)] mb-4 group-hover:gap-2 transition-all duration-200">
                  Đọc tiếp →
                </span>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-panel-border)]/50 font-mono text-[10px] text-white/40">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
