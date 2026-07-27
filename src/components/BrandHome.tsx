import { useRef, type MouseEvent } from "react";
import { motion, useInView } from "motion/react";
import { ScanFace, Sparkles, LineChart, ArrowRight } from "lucide-react";
import { Img } from "./Img";
import { newsPosts } from "./News";

interface BrandHomeProps {
  onNavigateToProduct: () => void;
  onNavigateToAbout: () => void;
  onNavigateToNews: () => void;
}

const coreValues = [
  {
    icon: ScanFace,
    title: "Soi da bằng AI",
    desc: "Camera và cảm biến quét khuôn mặt, đo độ ẩm, lượng dầu, sắc tố, mụn và độ nhạy cảm của da chỉ trong vài giây.",
  },
  {
    icon: Sparkles,
    title: "Cá nhân hóa theo da bạn",
    desc: "AI đọc dữ liệu thực tế của làn da bạn để gợi ý thành phần dưỡng phù hợp, thay vì chạy theo routine của người khác.",
  },
  {
    icon: LineChart,
    title: "Theo dõi tiến triển",
    desc: "Ứng dụng lưu lại lịch sử làn da theo tuần và tháng, giúp bạn thấy rõ điều gì đang hiệu quả và điều gì thì không.",
  },
];

const commitments = [
  "Bảo hành 1 đổi 1",
  "Đổi trả trong 30 ngày",
  "Miễn phí vận chuyển toàn quốc",
];

/** Chỉ chặn hành vi mặc định với cú nhấp trái thường, giữ Ctrl/Cmd/chuột giữa mở tab mới. */
function isPlainClick(e: MouseEvent<HTMLAnchorElement>) {
  return !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0);
}

export function BrandHome({
  onNavigateToProduct,
  onNavigateToAbout,
  onNavigateToNews,
}: BrandHomeProps) {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-10%" });
  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true, margin: "-10%" });

  const latestPosts = newsPosts.slice(0, 3);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#ECDCD6_0%,#FCFAF7_80%)] pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1024px] flex-col items-center px-6 text-center md:px-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10 font-display text-[44px] font-light leading-[1.05] tracking-tighter text-[var(--color-espresso)] md:text-[80px]"
          >
            HIỂU DA BẠN
            <br />
            <span className="text-[var(--color-rose-gold)]" style={{ fontSize: "0.85em" }}>
              hơn chính bạn
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-10 max-w-[520px] text-[16px] leading-relaxed text-[var(--color-espresso-muted)] md:text-[17px]"
          >
            Gương thông minh AI Luvia tự động soi da mỗi sáng: đo độ ẩm, phát hiện sợi bã nhờn và
            nhân mụn ẩn, rồi gợi ý quy trình skincare được may đo riêng cho làn da bạn, ngay tại nhà.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex w-full max-w-[480px] flex-col justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="/san-pham/"
              onClick={(e) => {
                if (!isPlainClick(e)) return;
                e.preventDefault();
                onNavigateToProduct();
              }}
              className="editorial-button h-[57px] flex-1 justify-center no-underline"
            >
              <span className="text-[11px]">Trải nghiệm sản phẩm</span>
              <span className="ml-3">→</span>
            </a>

            <a
              href="/gioi-thieu/"
              onClick={(e) => {
                if (!isPlainClick(e)) return;
                e.preventDefault();
                onNavigateToAbout();
              }}
              className="editorial-button-outline flex-1 py-4 text-center text-[11px] text-[var(--color-espresso)] no-underline"
            >
              Sứ mệnh LUVIA
            </a>
          </motion.div>

          {/* Cam kết thật thay cho dòng khẩu hiệu cũ */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="m-0 mt-10 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-2 p-0 font-mono text-[10px] uppercase tracking-widest text-[var(--color-espresso-muted)]"
          >
            {commitments.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && <span className="opacity-40">·</span>}
                <span>{c}</span>
              </li>
            ))}
          </motion.ul>

          {/* Ảnh sản phẩm thật */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 w-full overflow-hidden rounded-[12px] border border-[var(--color-panel-border)] shadow-[0_20px_60px_-20px_rgba(36,28,27,0.28)]"
          >
            <Img
              src="/images/san-pham/hero-bg.jpg"
              alt="Gương thông minh AI Luvia đặt trong không gian phòng tắm cao cấp"
              width={2400}
              height={1340}
              className="block h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- 3 giá trị cốt lõi */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-24 md:py-32"
        ref={valuesRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            className="editorial-eyebrow mb-4"
          >
            Luvia làm được gì
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-14 max-w-[640px]"
          >
            Ngưng đoán mò làn da,{" "}
            <span className="text-[var(--color-espresso-muted)]">hãy để dữ liệu lên tiếng</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-[10px] border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-8"
              >
                <v.icon className="mb-5 h-6 w-6 text-[var(--color-brand)]" aria-hidden="true" />
                <h3 className="mb-3 text-[17px] font-semibold text-[var(--color-espresso)]">
                  {v.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-espresso-muted)]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ 3 bài viết mới nhất */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-24 md:py-32"
        ref={newsRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={newsInView ? { opacity: 1 } : { opacity: 0 }}
                className="editorial-eyebrow mb-4"
              >
                Kiến thức chăm sóc da
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="editorial-h2 max-w-[560px]"
              >
                Hiểu da trước, <span className="text-[var(--color-espresso-muted)]">rồi hãy mua</span>
              </motion.h2>
            </div>

            <a
              href="/tin-tuc/"
              onClick={(e) => {
                if (!isPlainClick(e)) return;
                e.preventDefault();
                onNavigateToNews();
              }}
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--color-brand)] no-underline"
            >
              Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                initial={{ opacity: 0, y: 30 }}
                animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group flex flex-col overflow-hidden rounded-[10px] border border-[var(--color-panel-border)] bg-[var(--color-panel)] no-underline"
              >
                <div className="overflow-hidden">
                  <Img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="editorial-label mb-3 block font-semibold tracking-wider text-[var(--color-brand)]">
                    {post.category}
                  </span>
                  <h3 className="mb-4 font-display text-[19px] font-normal leading-snug text-[var(--color-espresso)] transition-colors duration-200 group-hover:text-[var(--color-brand)]">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between border-t border-[var(--color-panel-border)]/50 pt-4 font-mono text-[10px] text-[var(--color-espresso-muted)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
