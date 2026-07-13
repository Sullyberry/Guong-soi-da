// Sinh phiên bản .webp cho mọi ảnh .jpg trong public/images.
// Chạy trong CI trước `vite build` (Vite sẽ copy public/ -> dist/).
// Yêu cầu: `npm install --no-save sharp` (đã cấu hình trong workflow).
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "public", "images");
const QUALITY = 80;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.jpe?g$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const jpgs = await walk(ROOT);
let made = 0;
let bytesJpg = 0;
let bytesWebp = 0;

for (const jpg of jpgs) {
  const webp = jpg.replace(/\.jpe?g$/i, ".webp");
  // Bỏ qua nếu .webp đã mới hơn ảnh gốc (idempotent).
  if (existsSync(webp)) {
    const [a, b] = await Promise.all([stat(jpg), stat(webp)]);
    if (b.mtimeMs >= a.mtimeMs) continue;
  }
  await sharp(jpg).webp({ quality: QUALITY, effort: 5 }).toFile(webp);
  const [a, b] = await Promise.all([stat(jpg), stat(webp)]);
  bytesJpg += a.size;
  bytesWebp += b.size;
  made++;
  console.log(
    `  ✓ ${path.relative(ROOT, webp)}  ${(a.size / 1024).toFixed(0)}KB -> ${(b.size / 1024).toFixed(0)}KB`
  );
}

const saved = bytesJpg > 0 ? (100 * (1 - bytesWebp / bytesJpg)).toFixed(1) : "0";
console.log(
  `WebP: sinh ${made}/${jpgs.length} ảnh, tiết kiệm ~${saved}% dung lượng (chỉ tính ảnh vừa nén).`
);
