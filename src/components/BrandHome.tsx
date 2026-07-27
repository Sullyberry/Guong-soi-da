import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";
import { Img } from "./Img";
import { LeadForm } from "./LeadForm";
import { newsPosts } from "./News";

interface BrandHomeProps {
  onNavigateToProduct: () => void;
  onNavigateToAbout: () => void;
  onNavigateToNews: () => void;
}

const commitments = [
  "Bảo hành 1 đổi 1",
  "Đổi trả trong 30 ngày",
  "Miễn phí vận chuyển toàn quốc",
];

/**
 * Thư viện hình ảnh sản phẩm.
 * Cách thêm ảnh mới: xem hướng dẫn tại public/images/thu-vien/README.md
 */
const gallery = [
  {
    src: "/images/thu-vien/guong-luvia-tuong-da.jpg",
    w: 944,
    h: 1114,
    caption: "Tường đá tự nhiên",
    alt: "Gương thông minh AI Luvia gắn trên tường đá cùng kệ gỗ và ánh nắng buổi sáng",
  },
  {
    src: "/images/thu-vien/guong-luvia-phong-ngu.jpg",
    w: 928,
    h: 1120,
    caption: "Phòng ngủ tối giản",
    alt: "Gương thông minh AI Luvia trong phòng ngủ phong cách tối giản với cây bonsai",
  },
  {
    src: "/images/thu-vien/guong-luvia-phong-thay-do.jpg",
    w: 944,
    h: 1114,
    caption: "Phòng thay đồ",
    alt: "Gương thông minh AI Luvia đặt trên bàn đá cẩm thạch trong phòng thay đồ cao cấp",
  },
  {
    src: "/images/thu-vien/guong-luvia-concept-mat-nuoc.jpg",
    w: 944,
    h: 1114,
    caption: "Concept",
    alt: "Ảnh concept Gương thông minh AI Luvia phản chiếu trên mặt nước tĩnh",
  },
];

/**
 * Video giới thiệu lấy từ TikTok.
 * Khung nhúng chỉ tải SAU KHI người dùng bấm phát, nên khi mới vào trang
 * website không gửi dữ liệu nào sang TikTok.
 *
 * Lấy "id" là dãy số cuối trong đường dẫn video TikTok:
 *   https://www.tiktok.com/@luviabeautytech/video/7659832686428622100
 *                                                 └────── id ──────┘
 */
const videos: { id: string; title: string }[] = [
  { id: "7659832686428622100", title: "Luvia trên TikTok" },
  { id: "7659002625853050132", title: "Trải nghiệm Gương thông minh AI Luvia" },
];

const TIKTOK_PROFILE = "https://www.tiktok.com/@luviabeautytech";

/** Chỉ chặn hành vi mặc định với cú nhấp trái thường, giữ Ctrl/Cmd/chuột giữa mở tab mới. */
function isPlainClick(e: MouseEvent<HTMLAnchorElement>) {
  return !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0);
}

/** Ảnh bìa video: chỉ nhúng TikTok sau khi người dùng chủ động bấm phát. */
function VideoCard({ video }: { video: { id: string; title: string } }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="overflow-hidden rounded-[10px] border border-[var(--color-panel-border)] bg-black">
        <iframe
          src={`https://www.tiktok.com/embed/v2/${video.id}`}
          title={video.title}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          loading="lazy"
          className="aspect-[9/16] w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Phát video: ${video.title}`}
      className="group relative flex aspect-[9/16] w-full cursor-pointer flex-col items-center justify-center gap-5 overflow-hidden rounded-[10px] border border-[var(--color-panel-border)] bg-[linear-gradient(160deg,#ECDCD6_0%,#FCFAF7_60%,#F2E7E1_100%)] p-6"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-espresso)] shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Play className="ml-1 h-6 w-6 text-[var(--color-ivory)]" fill="currentColor" />
      </span>
      <span className="text-center font-display text-[18px] leading-snug text-[var(--color-espresso)]">
        {video.title}
      </span>
      <span className="text-[11px] uppercase tracking-widest text-[var(--color-espresso-muted)]">
        Bấm để phát
      </span>
    </button>
  );
}

export function BrandHome({
  onNavigateToProduct,
  onNavigateToAbout,
  onNavigateToNews,
}: BrandHomeProps) {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-10%" });
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-10%" });
  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true, margin: "-10%" });

  /** Ảnh đang xem ở chế độ phóng to toàn màn hình (null = đang đóng). */
  const [zoomed, setZoomed] = useState<number | null>(null);

  useEffect(() => {
    if (zoomed === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoomed]);

  const latestPosts = newsPosts.slice(0, 3);

  return (
    <>
      {/* ------------------------- Hero: bố cục giống trang sản phẩm, có ảnh nền */}
      <section className="relative overflow-hidden bg-[var(--color-ivory)] md:min-h-screen">
        {/* Ảnh nền có sản phẩm - desktop (full-bleed) */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center md:block"
          style={{ backgroundImage: "url('/images/san-pham/hero-bg.jpg')" }}
        />
        {/* Lớp phủ ngang giúp chữ bên trái đọc rõ - desktop */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[var(--color-ivory)]/95 via-[var(--color-ivory)]/55 to-transparent md:block" />

        {/* Ảnh dọc - mobile: hiển thị trọn theo tỷ lệ gốc, không cắt */}
        <Img
          src="/images/san-pham/hero-bg-mobile.jpg"
          alt="Gương thông minh AI Luvia trong không gian phòng tắm cao cấp"
          width={1080}
          height={2546}
          fetchPriority="high"
          className="block h-auto w-full md:hidden"
        />
        {/* Lớp phủ sáng nhẹ cho vùng chữ phía trên - mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(252,250,247,0.6)_0%,rgba(252,250,247,0.12)_40%,transparent_58%)] md:hidden" />

        {/* Nội dung: md:relative là bắt buộc để z-index có tác dụng */}
        <div className="absolute inset-x-0 top-0 z-10 mx-auto w-full max-w-[1024px] px-6 pt-40 pb-10 md:relative md:flex md:min-h-screen md:items-center md:px-12 md:py-0">
          <div className="flex max-w-[540px] flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 font-display text-[44px] font-light leading-[1.05] tracking-tighter text-[var(--color-espresso)] md:mb-10 md:text-[72px]"
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
              className="mb-8 max-w-[440px] text-[15px] leading-relaxed text-[var(--color-espresso-muted)] md:text-[16px]"
            >
              Gương thông minh AI Luvia tự động soi da mỗi sáng: đo độ ẩm, phát hiện sợi bã nhờn và
              nhân mụn ẩn, rồi gợi ý quy trình skincare được may đo riêng cho làn da bạn, ngay tại
              nhà.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex w-full max-w-[420px] flex-col gap-4 sm:flex-row sm:gap-5"
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
              className="m-0 mt-8 flex list-none flex-wrap items-center gap-x-3 gap-y-2 p-0 font-mono text-[10px] uppercase tracking-widest text-[var(--color-espresso-muted)]"
            >
              {commitments.map((c, i) => (
                <li key={c} className="flex items-center gap-3">
                  {i > 0 && <span className="opacity-40">·</span>}
                  <span>{c}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Thư viện hình ảnh sản phẩm */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-16 md:py-20"
        ref={galleryRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-10 text-center"
          >
            Hình ảnh sản phẩm
          </motion.h2>

          {/* Ảnh giữ nguyên tỷ lệ gốc, không cắt. Bấm để xem gần toàn màn hình. */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {gallery.map((g, i) => (
              <motion.button
                key={g.src}
                type="button"
                onClick={() => setZoomed(i)}
                aria-label={`Phóng to ảnh: ${g.caption}`}
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group m-0 block cursor-zoom-in overflow-hidden rounded-[10px] border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-0 text-left"
              >
                <Img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="block px-3 py-2.5 text-center text-[11px] text-[var(--color-espresso-muted)]">
                  {g.caption}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lớp xem ảnh phóng to: nền tối, ảnh hiện trọn không bị cắt */}
      {zoomed !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[zoomed].caption}
          onClick={() => setZoomed(null)}
          className="fixed inset-0 z-[9999] flex cursor-zoom-out flex-col items-center justify-center bg-[rgba(20,15,14,0.92)] p-4 md:p-8"
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            aria-label="Đóng"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.img
            key={gallery[zoomed].src}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            src={gallery[zoomed].src}
            alt={gallery[zoomed].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full cursor-default rounded-[8px] object-contain shadow-2xl"
          />
          <p className="mt-5 text-center text-[13px] text-white/75">
            {gallery[zoomed].caption}
          </p>
        </motion.div>
      )}

      {/* ------------------------------------------------------------------- Video */}
      {videos.length > 0 && (
        <section
          className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-16 md:py-20"
          ref={videoRef}
        >
          <div className="mx-auto max-w-[1024px] px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="editorial-h2 mb-3 text-center"
            >
              Video
            </motion.h2>
            <p className="mx-auto mb-10 max-w-[520px] text-center text-[12px] leading-relaxed text-[var(--color-espresso-muted)]">
              Video chỉ được tải từ TikTok sau khi bạn bấm phát.
            </p>

            <div className="mx-auto grid max-w-[640px] gap-6 sm:grid-cols-2">
              {videos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={TIKTOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--color-brand)] no-underline"
              >
                Xem thêm trên TikTok <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ Tin tức */}
      <section
        className="border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)] py-16 md:py-20"
        ref={newsRef}
      >
        <div className="mx-auto max-w-[1024px] px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-10 text-center"
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
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="editorial-label mb-2 block font-semibold tracking-wider text-[var(--color-brand)]">
                    {post.category}
                  </span>
                  <h3 className="mb-3 font-display text-[18px] font-normal leading-snug text-[var(--color-espresso)] transition-colors duration-200 group-hover:text-[var(--color-brand)]">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between border-t border-[var(--color-panel-border)]/50 pt-3 font-mono text-[10px] text-[var(--color-espresso-muted)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 text-center">
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
      <LeadForm compact />
    </>
  );
}
