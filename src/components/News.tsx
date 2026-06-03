import React from "react";
import { motion } from "motion/react";

interface NewsPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const newsPosts: NewsPost[] = [
  {
    category: "CÔNG NGHỆ AI",
    title: "Cách mô hình Edge AI đo lường lỗ chân lông không xâm lấn",
    excerpt: "Tìm hiểu cơ chế lõi thông minh tại biên giúp định danh chính xác 98% kích thước lỗ chân lông và đánh giá bít tắc ngay dưới ánh sáng phòng tắm bình thường, đảm bảo bảo mật dữ liệu tuyệt đối.",
    date: "03 TH06, 2026",
    readTime: "5 phút đọc"
  },
  {
    category: "KHOA HỌC DA LIỄU",
    title: "Hiểu về nhịp sinh học biểu bì vào lúc 7:00 sáng",
    excerpt: "Độ ẩm của da bắt đầu sụt giảm mạnh khi tiếp xúc với không khí khô và tia UV buổi sớm. Nghiên cứu mới lý giải tại sao việc tinh chỉnh routine cấp ẩm lúc này là quan trọng nhất cho sức khỏe biểu bì.",
    date: "01 TH06, 2026",
    readTime: "7 phút đọc"
  },
  {
    category: "PHONG CÁCH SỐNG ELITE",
    title: "Chế tác dòng sản phẩm giới hạn Luvia Genesis: Định hình phong cách sống mới",
    excerpt: "Từ sự kết hợp hoàn hảo giữa nhôm hàng không CNC, lớp phủ Brushed Rose Gold và tấm gương mạ bạc Bỉ huyền thoại. Tìm hiểu quy trình tuyển chọn vật liệu khắt khe của các nhà thiết kế Thụy Sĩ.",
    date: "28 TH05, 2026",
    readTime: "4 phút đọc"
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
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-white p-8 rounded border border-[var(--color-panel-border)] shadow-sm hover:shadow-md hover:border-[var(--color-brand)]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="editorial-label text-[var(--color-brand)] font-semibold tracking-wider block mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-[22px] font-normal leading-snug text-[#241C1B] mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-panel-border)]/50 font-mono text-[10px] text-white/40">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
