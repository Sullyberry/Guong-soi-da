import React from "react";
import { motion } from "motion/react";

interface NewsPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
}

const newsPosts: NewsPost[] = [
  {
    category: "CÔNG NGHỆ SOI DA AI",
    title: "Cách công nghệ AI soi da phát hiện bít tắc lỗ chân lông và mụn ẩn sớm nhất",
    excerpt: "Tìm hiểu cơ chế hoạt động của thuật toán Edge AI tích hợp trong gương thông minh giúp định danh chính xác 98% mức độ tắc nghẽn bã nhờn, nhân mụn ẩn và mụn đầu đen trực tiếp ngay tại nhà.",
    date: "03 TH06, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/cong-nghe-ai-soi-da-phat-hien-mun-an/"
  },
  {
    category: "CHĂM SÓC DA KHOA HỌC",
    title: "Bật mí cách đo độ ẩm da và thiết lập skincare routine buổi sáng cực chuẩn",
    excerpt: "Khi độ ẩm sụt giảm, màng bảo vệ da suy yếu gây mụn và kích ứng. Khám phá tần suất đo lượng nước biểu bì và cách tùy chỉnh sữa rửa mặt, kem dưỡng ẩm phù hợp theo thời tiết hàng ngày.",
    date: "01 TH06, 2026",
    readTime: "7 phút đọc",
    url: "/tin-tuc/do-do-am-da-skincare-routine-buoi-sang/"
  },
  {
    category: "THIẾT BỊ LÀM ĐẸP",
    title: "Gương thông minh phân tích da LUVIA: Đột phá chăm sóc da nhạy cảm",
    excerpt: "Một thiết bị đột phá giúp theo dõi nhạy cảm da liên tục. Không cần sử dụng các máy soi da cồng kềnh tại spa, bạn hoàn toàn có thể tự khám da mặt và tối ưu quy trình trị mụn ẩn ngay trước gương phòng tắm.",
    date: "28 TH05, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/guong-thong-minh-luvia-cham-soc-da-nhay-cam/"
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
                <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
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
