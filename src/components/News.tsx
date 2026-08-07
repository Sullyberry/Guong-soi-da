import { motion } from "motion/react";
import { Img } from "./Img";

export interface NewsPost {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
}

// Xuất ra để trang chủ tái sử dụng 3 bài mới nhất, tránh khai báo trùng lặp.
export const newsPosts: NewsPost[] = [
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Xu hướng Tech-Beauty hiện đại cùng Gương AI chăm sóc da theo tình trạng da",
    excerpt:
      "Tech-Beauty đang thay đổi cách chăm sóc da. Gương AI chăm sóc da theo tình trạng da giúp bạn hiểu làn da bằng dữ liệu thay vì chỉ theo cảm tính.",
    image: "/images/tin-tuc/xu-huong-tech-beauty-1.jpg",
    date: "07 TH08, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/xu-huong-tech-beauty/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Lựa chọn mỹ phẩm hiệu quả hơn với Review mỹ phẩm bằng AI",
    excerpt:
      "Khám phá Review mỹ phẩm bằng AI cùng Luvia giúp hiểu rõ tình trạng da, lựa chọn mỹ phẩm phù hợp và xây dựng quy trình skincare khoa học.",
    image: "/images/tin-tuc/review-my-pham-bang-ai-1.jpg",
    date: "06 TH08, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/review-my-pham-bang-ai/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Tiết kiệm thời gian skincare với Gương AI chăm sóc da theo tình trạng da Luvia",
    excerpt:
      "Gương AI chăm sóc da theo tình trạng da Luvia giúp kiểm tra tình trạng da, theo dõi sự thay đổi của làn da và hỗ trợ skincare khoa học tại nhà.",
    image: "/images/tin-tuc/tiet-kiem-thoi-gian-skincare-1.jpg",
    date: "06 TH08, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/tiet-kiem-thoi-gian-skincare/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Chăm sóc da hiệu quả hơn cùng Máy phân tích da",
    excerpt:
      "Máy phân tích da Luvia giúp kiểm tra tình trạng da, theo dõi các chỉ số làn da và hỗ trợ xây dựng quy trình smart skincare phù hợp với từng người.",
    image: "/images/tin-tuc/cham-soc-da-cung-may-phan-tich-da-1.jpg",
    date: "05 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/cham-soc-da-cung-may-phan-tich-da/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Skincare không còn \"đoán mò\" với Máy phân tích da",
    excerpt:
      "Khám phá Máy phân tích da Luvia giúp kiểm tra tình trạng da, theo dõi các chỉ số làn da và xây dựng quy trình smart skincare hiệu quả hơn.",
    image: "/images/tin-tuc/skincare-khong-doan-mo-1.jpg",
    date: "05 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/skincare-khong-doan-mo/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Skincare mãi không hiệu quả? Hãy thử Gương AI",
    excerpt:
      "Khám phá Gương AI Luvia giúp kiểm tra tình trạng da, phân tích gương mặt bằng AI và hỗ trợ xây dựng quy trình smart skincare phù hợp.",
    image: "/images/tin-tuc/guong-ai-luvia-1.jpg",
    date: "04 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/guong-ai-luvia/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Ngừng lãng phí tiền mỹ phẩm với Gương AI",
    excerpt:
      "Khám phá Gương AI Luvia giúp kiểm tra tình trạng da, phân tích gương mặt và xây dựng quy trình smart skincare dựa trên dữ liệu thay vì cảm tính.",
    image: "/images/tin-tuc/ngung-lang-phi-tien-my-pham-1.jpg",
    date: "04 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/ngung-lang-phi-tien-my-pham/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Đơn giản hóa skincare bằng công nghệ AI: Gương AI chăm sóc da thông minh",
    excerpt:
      "Chăm sóc da không cần thật nhiều bước. Khi hiểu rõ tình trạng làn da, bạn có thể xây dựng routine đơn giản mà vẫn hiệu quả nhờ công nghệ AI.",
    image: "/images/tin-tuc/don-gian-hoa-routine-skincare-1.jpg",
    date: "03 TH08, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/don-gian-hoa-routine-skincare/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Giải pháp theo dõi sự thay đổi của làn da mỗi ngày: Gương AI chăm sóc da thông minh",
    excerpt:
      "Làn da thay đổi mỗi ngày nhưng không phải lúc nào ta cũng nhận ra. Theo dõi bằng công nghệ AI giúp bạn điều chỉnh skincare đúng thời điểm.",
    image: "/images/tin-tuc/theo-doi-thay-doi-lan-da-1.jpg",
    date: "03 TH08, 2026",
    readTime: "4 phút đọc",
    url: "/tin-tuc/theo-doi-thay-doi-lan-da/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Giải pháp giúp hiểu đúng làn da trước khi skincare: Gương AI phân tích da bằng AI",
    excerpt:
      "Chăm sóc da hiệu quả không bắt đầu từ việc mua thêm mỹ phẩm, mà từ việc hiểu làn da đang cần gì. Công nghệ AI giúp phân tích da ngay tại nhà.",
    image: "/images/tin-tuc/guong-ai-phan-tich-da-1.jpg",
    date: "02 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/guong-ai-phan-tich-da/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Đừng mua mỹ phẩm khi chưa hiểu làn da: Gương AI phân tích da bằng AI",
    excerpt:
      "Đầu tư nhiều mỹ phẩm chưa chắc cho làn da khỏe đẹp. Khi chưa hiểu rõ tình trạng da, bạn rất dễ chọn sai sản phẩm và tốn kém không cần thiết.",
    image: "/images/tin-tuc/hieu-lan-da-truoc-khi-mua-my-pham-1.jpg",
    date: "02 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/hieu-lan-da-truoc-khi-mua-my-pham/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Skincare đủ bước nhưng da vẫn không đẹp? Khám phá giải pháp với Gương AI cho skincare không hiệu quả",
    excerpt:
      "Chăm sóc da mỗi ngày nhưng kết quả vẫn không như mong muốn? Có thể vấn đề không phải skincare chưa đủ, mà là bạn chưa hiểu đúng tình trạng da.",
    image: "/images/tin-tuc/guong-ai-skincare-khong-hieu-qua-1.jpg",
    date: "01 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/guong-ai-skincare-khong-hieu-qua/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Skincare theo TikTok nhưng vẫn không hiệu quả? Giải pháp từ Gương AI cho skincare không hiệu quả",
    excerpt:
      "Xu hướng skincare trên TikTok cho nhiều gợi ý hay, nhưng không phải routine nào cũng hợp với da bạn. Hiểu đúng tình trạng da trước khi chạy theo trend.",
    image: "/images/tin-tuc/skincare-theo-tiktok-1.jpg",
    date: "01 TH08, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/skincare-theo-tiktok/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Bước đầu tiên để xây dựng routine skincare phù hợp: Gương AI xác định loại da",
    excerpt:
      "Không phải loại mỹ phẩm nào cũng phù hợp với mọi làn da. Hiểu chính xác tình trạng da trước khi thay đổi sản phẩm hay thử thêm một routine mới.",
    image: "/images/tin-tuc/guong-ai-xac-dinh-loai-da-1.jpg",
    date: "31 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/guong-ai-xac-dinh-loai-da/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Vì sao routine từng hiệu quả nay không còn phù hợp? Gương AI xác định loại da",
    excerpt:
      "Da thay đổi theo tuổi tác, thời tiết, nội tiết và môi trường sống. Routine hiệu quả không phải routine cố định mà là routine hợp với da ở từng thời điểm.",
    image: "/images/tin-tuc/routine-skincare-thay-doi-1.jpg",
    date: "31 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/routine-skincare-thay-doi/"
  },
  {
    category: "KIẾN THỨC CHĂM SÓC DA",
    title: "Cách xác định loại da chính xác tại nhà: Đừng skincare theo cảm giác nữa",
    excerpt:
      "Hiểu đúng làn da của mình thuộc loại nào trước khi mua thêm mỹ phẩm, bước quan trọng nhất mà nhiều người bỏ qua khi skincare.",
    image: "/images/tin-tuc/xac-dinh-loai-da-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/cach-xac-dinh-loai-da-tai-nha/"
  },
  {
    category: "SKINCARE CÁ NHÂN HÓA",
    title: "Vì sao skincare mãi không hiệu quả? Có thể bạn đang chăm sóc da theo cách của người khác",
    excerpt:
      "Skincare cá nhân hóa là phương pháp chăm sóc da dựa trên nhu cầu thực tế của từng làn da thay vì chạy theo xu hướng chung.",
    image: "/images/tin-tuc/skincare-ca-nhan-hoa-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/skincare-ca-nhan-hoa/"
  },
  {
    category: "CHĂM SÓC DA KHOA HỌC",
    title: "Bàn trang điểm hay \"nghĩa địa mỹ phẩm\"? Cách chăm da thông minh giúp bà giữ chặt ví tiền!",
    excerpt:
      "Tư duy chăm sóc da theo tình trạng da giúp bạn ngưng mua mỹ phẩm may rủi, nói không với FOMO và xây dựng routine tối giản.",
    image: "/images/tin-tuc/cham-soc-da-tinh-trang-1.jpg",
    date: "04 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/cham-soc-da-theo-tinh-trang-da/"
  },
  {
    category: "GÓC NHÌN SKINCARE",
    title: "Clip triệu view, da triệu mụn: Vì sao bạn mua mỹ phẩm theo review mãi vẫn không đẹp?",
    excerpt:
      "Năm sai lầm chí mạng khi chọn đồ skincare theo số đông, và cách để công nghệ thay lời review.",
    image: "/images/tin-tuc/review-my-pham-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/mua-my-pham-theo-review/"
  },
  {
    category: "THIẾT BỊ LÀM ĐẸP",
    title: "Cúng tiền cho mỹ phẩm nhưng da vẫn nát: Do bà xài sai hay tại... đoán mò?",
    excerpt:
      "Máy phân tích da giúp vạch trần độ ẩm, dầu thừa, sắc tố ẩn và mức độ lão hóa bằng công nghệ AI, ngưng mua mỹ phẩm theo cảm giác.",
    image: "/images/tin-tuc/may-phan-tich-da-1.jpg",
    date: "04 TH07, 2026",
    readTime: "5 phút đọc",
    url: "/tin-tuc/may-phan-tich-da/"
  },
  {
    category: "CÔNG NGHỆ SOI DA AI",
    title: "Da gào cứu bên dưới mà mắt thường không thấy: Vì sao bạn skincare mãi vẫn xấu?",
    excerpt:
      "Khám phá cách gương soi AI quét đa tầng, phân tích chuyên sâu và trả kết quả bằng số liệu để bạn ngưng skincare theo cảm tính.",
    image: "/images/tin-tuc/guong-soi-ai-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/guong-soi-ai/"
  },
  {
    category: "XU HƯỚNG LÀM ĐẸP",
    title: "Beauty Tech là gì? Xu hướng công nghệ làm đẹp đang thay đổi skincare như thế nào?",
    excerpt:
      "Khám phá cách công nghệ làm đẹp đang thay đổi cách chúng ta hiểu và chăm sóc làn da: chính xác, tiện lợi và cá nhân hóa hơn.",
    image: "/images/tin-tuc/beauty-tech-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/beauty-tech-la-gi/"
  },
  {
    category: "CÔNG NGHỆ LÀM ĐẸP",
    title: "AI Skincare là gì? Khi công nghệ bắt đầu hiểu làn da của bạn",
    excerpt:
      "Tìm hiểu cách trí tuệ nhân tạo được ứng dụng vào phân tích và chăm sóc da, giúp người dùng hiểu rõ làn da của mình thay vì đoán mò.",
    image: "/images/tin-tuc/ai-skincare-1.jpg",
    date: "04 TH07, 2026",
    readTime: "6 phút đọc",
    url: "/tin-tuc/ai-skincare-la-gi/"
  }
];

/** Cắt tiêu đề tối đa 3 dòng bằng CSS, dùng cho lưới 4 bài nhỏ. */
const clamp3 = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical" as const,
  overflow: "hidden",
};

/** Cắt mô tả tối đa 3 dòng. */
const clampExcerpt = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical" as const,
  overflow: "hidden",
};

export function News() {
  const featured = newsPosts[0];
  const grid = newsPosts.slice(1, 5);
  const rest = newsPosts.slice(5);

  return (
    <div className="min-h-screen bg-[var(--color-bg-dark)] pt-40 pb-24 md:pt-44">
      <div className="mx-auto max-w-[1024px] px-6 md:px-12">
        {/* Tiêu đề trang */}
        <div className="mb-12 border-b border-[var(--color-panel-border)] pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-h2"
          >
            Cập nhật Khoa Học &amp; Công Nghệ Sắc Đẹp
          </motion.h1>
        </div>

        {/* Khối trên: 1 bài nổi bật (trái) + lưới 2x2 gồm 4 bài (phải) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Cột trái: bài nổi bật */}
          <motion.a
            href={featured.url}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group flex flex-col no-underline"
          >
            <div className="mb-5 overflow-hidden rounded-[10px] border border-[var(--color-panel-border)]">
              <Img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="editorial-label mb-3 block font-semibold tracking-wider text-[var(--color-brand)]">
              {featured.category}
            </span>
            <h2 className="mb-3 text-[21px] font-bold uppercase leading-snug text-[var(--color-brand)] transition-colors duration-200 group-hover:text-[var(--color-espresso)] md:text-[24px]">
              {featured.title}
            </h2>
            <p
              className="text-[15px] leading-relaxed text-[var(--color-espresso-muted)]"
              style={clampExcerpt}
            >
              {featured.excerpt}
            </p>
            <span className="mt-4 font-mono text-[10px] text-[var(--color-espresso-muted)]">
              {featured.date} · {featured.readTime}
            </span>
          </motion.a>

          {/* Cột phải: lưới 2 cột x 2 hàng */}
          <div className="grid grid-cols-2 gap-5 md:gap-6">
            {grid.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group flex flex-col no-underline"
              >
                <div className="mb-3 overflow-hidden rounded-[8px] border border-[var(--color-panel-border)]">
                  <Img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-[13px] font-semibold uppercase leading-snug text-[var(--color-brand)] transition-colors duration-200 group-hover:text-[var(--color-espresso)]"
                  style={clamp3}
                >
                  {post.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Khối dưới: danh sách bài viết dạng ngang */}
        {rest.length > 0 && (
          <div className="mt-16 border-t border-[var(--color-panel-border)]">
            {rest.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-5 border-b border-[var(--color-panel-border)] py-7 no-underline md:gap-8"
              >
                {/* Ảnh chiếm khoảng 35% chiều rộng */}
                <div className="w-[35%] shrink-0 overflow-hidden rounded-[8px] border border-[var(--color-panel-border)]">
                  <Img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2 text-[15px] font-bold uppercase leading-snug text-[var(--color-brand)] transition-colors duration-200 group-hover:text-[var(--color-espresso)] md:text-[17px]">
                    {post.title}
                  </h3>
                  <span className="mb-2 font-mono text-[11px] text-[var(--color-espresso-muted)]">
                    {post.date}
                  </span>
                  <p
                    className="text-[14px] leading-relaxed text-[var(--color-espresso-muted)]"
                    style={clampExcerpt}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
