import type { ImgHTMLAttributes } from "react";

/**
 * Wrapper ảnh (hiện tại là passthrough <img> dùng JPEG).
 *
 * Ghi chú: từng thử phục vụ WebP qua <picture><source> nhưng stack hiện tại
 * (GitHub Pages sau Cloudflare) gây 404/propagation cho file .webp mới, mà
 * <picture> KHÔNG fallback khi source 404 -> vỡ ảnh. Cách đúng cho stack này
 * là bật Cloudflare Polish (tự động chuyển JPEG->WebP theo Accept header ở
 * edge, không cần <picture>, không rủi ro 404). Giữ component để dễ tái bật.
 */
export function Img(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} />;
}
