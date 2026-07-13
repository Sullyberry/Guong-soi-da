import type { ImgHTMLAttributes } from "react";

/**
 * Ảnh tối ưu: ưu tiên nguồn WebP, fallback về JPEG gốc nếu trình duyệt
 * không hỗ trợ hoặc file .webp chưa được sinh ra (an toàn tuyệt đối).
 *
 * Dùng như <img> bình thường — truyền src trỏ tới file .jpg; component tự
 * suy ra đường dẫn .webp tương ứng. `display:contents` trên <picture> giúp
 * <img> giữ nguyên vị trí trong layout của phần tử cha (flex/grid/aspect...).
 */
export function Img({ src, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const webp =
    typeof src === "string" ? src.replace(/\.jpe?g$/i, ".webp") : undefined;
  return (
    <picture style={{ display: "contents" }}>
      {webp && webp !== src && <source srcSet={webp} type="image/webp" />}
      <img src={src} {...rest} />
    </picture>
  );
}
