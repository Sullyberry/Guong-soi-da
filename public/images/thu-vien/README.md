# Thư viện hình ảnh sản phẩm

Thư mục này chứa ảnh hiển thị ở mục **"Hình ảnh sản phẩm"** trên trang chủ.

## Cách thêm ảnh mới

1. Đặt tệp ảnh vào chính thư mục này (`public/images/thu-vien/`).
   - Định dạng: `.jpg` (khuyến nghị) hoặc `.png`
   - Kích thước: cạnh dài khoảng 1200–1600px là đủ, nặng dưới ~250KB
   - Đặt tên không dấu, không khoảng trắng. Ví dụ: `guong-goc-nghieng.jpg`

2. Mở tệp `src/components/BrandHome.tsx`, tìm mảng `gallery` và thêm một dòng:

   ```ts
   {
     src: "/images/thu-vien/guong-goc-nghieng.jpg",
     w: 1400,           // chiều rộng thật của ảnh (px)
     h: 1100,           // chiều cao thật của ảnh (px)
     caption: "Góc nghiêng",
     alt: "Gương thông minh AI Luvia nhìn từ góc nghiêng",
   },
   ```

   Hai số `w` và `h` phải đúng kích thước thật của ảnh. Chúng giữ chỗ sẵn
   trong bố cục để trang không bị nhảy khi ảnh tải xong.

3. Lưu lại, commit và đẩy lên. Ảnh sẽ tự xuất hiện sau khi build xong.

## Lưu ý

- `alt` nên mô tả đúng nội dung ảnh, viết tiếng Việt có dấu. Đây là phần
  công cụ tìm kiếm đọc và cũng là nội dung trình đọc màn hình đọc cho
  người khiếm thị.
- Ảnh trong lưới hiển thị ở dạng nhỏ và phóng to khi rê chuột, nên hãy
  chọn ảnh có chủ thể nằm giữa khung.
