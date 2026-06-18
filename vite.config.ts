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
          baiMunAn: path.resolve(__dirname, 'tin-tuc/cong-nghe-ai-soi-da-phat-hien-mun-an/index.html'),
          baiDoAm: path.resolve(__dirname, 'tin-tuc/do-do-am-da-skincare-routine-buoi-sang/index.html'),
          baiNhayCam: path.resolve(__dirname, 'tin-tuc/guong-thong-minh-luvia-cham-soc-da-nhay-cam/index.html'),
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
