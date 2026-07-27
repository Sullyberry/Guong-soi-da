import { useRef, type MouseEvent } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Img } from "./Img";
import { LeadForm } from "./LeadForm";
import { newsPosts } from "./News";

interface BrandHomeProps {
  onNavigateToProduct: () => void;
  onNavigateToAbout: () => void;
  onNavigateToNews: () => void;
}

/** Ba giá trị cốt lõi, trình bày ngắn gọn đè lên vùng trống bên trái ảnh gương. */
const coreValues = ["Soi da bằng AI", "Cá nhân hóa theo da bạn", "Theo dõi tiến triển"];

const commitments = [
  "Bảo hành 1 đổi 1",
  "Đổi trả trong 30 ngày",
  "Miễn phí vận chuyển toàn quốc",
];

/**
 * Thư viện hình ảnh sản phẩm.
 * Thêm ảnh mới: đặt tệp vào public/images/san-pham/ rồi thêm một dòng vào mảng này.
 */
const gallery = [
  {
    src: "/images/san-pham/quy-trinh-su-dung.jpg",
    w: 1400,
    h: 1122,
    caption: "Quy trình sử dụng",
    alt: "Quy trình sử dụng Gương thông minh AI Luvia từ soi da tới phối mặt nạ",
  },
  {
    src: "/images/san-pham/phan-tich.jpg",
    w: 1100,
    h: 1733,
    caption: "Màn hình phân tích da",
    alt: "Màn hình gương Luvia hiển thị kết quả phân tích da theo thời gian thực",
  },
  {
    src: "/images/san-pham/app-luvia.jpg",
    w: 664,
    h: 567,
    caption: "Ứng dụng đồng hành",
    alt: "Ứng dụng Luvia hiển thị bảng theo dõi sức khỏe làn da trên điện thoại",
  },
  {
    src: "/images/san-pham/hero-bg-mobile.jpg",
    w: 1080,
    h: 2546,
    caption: "Thiết kế tổng thể",
    alt: "Thiết kế tổng thể Gương thông minh AI Luvia trong phòng tắm",
  },
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
  const showcaseRef = useRef(null);
  const showcaseInView = useInView(showcaseRef, { once: true, margin: "-10%" });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-10%" });
  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true, margin: "-10%" });

  const latestPosts = newsPosts.slice(0, 3);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#ECDCD6_0%,#FCFAF7_80%)] pt-32 pb-20 md:pt-40">
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
        </div>
      </section>

      {/* ------------------- Ảnh gương + 3 giá trị cốt lõi đè lên vùng trống bên trái */}
      <section className="bg-[var(--color-bg-dark)]" ref={showcaseRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={showcaseInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-[1400px]"
        >
          <Img
            src="/images/san-pham/hero-bg.jpg"
            alt="Gương thông minh AI Luvia đặt trong không gian phòng tắm cao cấp"
            width={2400}
            height={1340}
            className="block h-auto w-full"
          />

          {/* Chỉ đè chữ từ md trở lên: dưới màn hình nhỏ ảnh quá hẹp để đọc */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] items-center px-8 md:flex lg:px-16">
            <ul className="m-0 flex list-none flex-col gap-6 p-0 lg:gap-9">
              {coreValues.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: -20 }}
                  animate={showcaseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.15 }}
                  className="flex items-baseline gap-4 lg:gap-5"
                >
                  <span className="font-mono text-[12px] font-bold text-[var(--color-brand)] lg:text-[14px]">
                    0{i + 1}
                  </span>
                  <span className="font-display text-[22px] leading-tight text-[var(--color-espresso)] lg:text-[34px]">
                    {v}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bản rút gọn cho màn hình nhỏ, đặt ngay dưới ảnh */}
        <ul className="m-0 flex list-none flex-col gap-4 px-6 py-10 md:hidden">
          {coreValues.map((v, i) => (
            <li key={v} className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] font-bold text-[var(--color-brand)]">
                0{i + 1}
              </span>
              <span className="font-display text-[21px] leading-tight text-[var(--color-espresso)]">
                {v}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------- Thư viện hình ảnh sản phẩm */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-24 md:py-32"
        ref={galleryRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={galleryInView ? { opacity: 1 } : { opacity: 0 }}
            className="editorial-eyebrow mb-4 text-center"
          >
            Hình ảnh sản phẩm
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-14 text-center"
          >
            Nhìn gần hơn
          </motion.h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, y: 24 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="m-0 overflow-hidden rounded-[10px] border border-[var(--color-panel-border)] bg-[var(--color-panel)]"
              >
                <div className="overflow-hidden">
                  <Img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-center text-[12px] text-[var(--color-espresso-muted)]">
                  {g.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Tin tức */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-24 md:py-32"
        ref={newsRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-14 text-center"
          >
            Tin tức
          </motion.h2>

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

          <div className="mt-12 text-center">
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ Liên hệ */}
      <LeadForm />
    </>
  );
}
