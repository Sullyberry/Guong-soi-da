import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          sanpham: path.resolve(__dirname, 'san-pham/index.html'),
          gioithieu: path.resolve(__dirname, 'gioi-thieu/index.html'),
          tintuc: path.resolve(__dirname, 'tin-tuc/index.html'),
          privacy: path.resolve(__dirname, 'privacy/index.html'),
          terms: path.resolve(__dirname, 'terms/index.html'),
          baiXacDinhLoaiDa: path.resolve(__dirname, 'tin-tuc/cach-xac-dinh-loai-da-tai-nha/index.html'),
          baiSkincareCaNhanHoa: path.resolve(__dirname, 'tin-tuc/skincare-ca-nhan-hoa/index.html'),
          baiChamSocDa: path.resolve(__dirname, 'tin-tuc/cham-soc-da-theo-tinh-trang-da/index.html'),
          baiReviewMyPham: path.resolve(__dirname, 'tin-tuc/mua-my-pham-theo-review/index.html'),
          baiMayPhanTichDa: path.resolve(__dirname, 'tin-tuc/may-phan-tich-da/index.html'),
          baiGuongSoiAi: path.resolve(__dirname, 'tin-tuc/guong-soi-ai/index.html'),
          baiBeautyTech: path.resolve(__dirname, 'tin-tuc/beauty-tech-la-gi/index.html'),
          baiAiSkincare: path.resolve(__dirname, 'tin-tuc/ai-skincare-la-gi/index.html'),
          baiGuongAiXacDinhLoaiDa: path.resolve(__dirname, 'tin-tuc/guong-ai-xac-dinh-loai-da/index.html'),
          baiRoutineSkincareThayDoi: path.resolve(__dirname, 'tin-tuc/routine-skincare-thay-doi/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
