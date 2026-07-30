import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, Loader2, AlertCircle } from "lucide-react";

/**
 * URL Web App của Google Apps Script.
 * Lấy sau khi Deploy script trong Google Sheet (Triển khai → Ứng dụng web →
 * quyền truy cập "Bất kỳ ai"), rồi dán vào đây.
 */
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx9u7MdOfeftBLdHS2de2P5CNFqwjDfzfCU_YWHpUqEYmdRAvMmb5HMbFOZCglihx8k/exec";

type Status = "idle" | "sending" | "success" | "error";

const initialForm = {
  hoTen: "",
  soDienThoai: "",
  email: "",
  tinhThanh: "",
  ghiChu: "",
  // Trường bẫy bot (honeypot): người thật không bao giờ điền vì nó bị ẩn.
  website: "",
};

// SĐT Việt Nam: 10 số bắt đầu bằng 0, hoặc +84/84 theo sau 9 số.
const PHONE_RE = /^(0\d{9}|(\+?84)\d{9})$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface LeadFormProps {
  /** Rút gọn phần đầu: chỉ hiện tiêu đề "Liên hệ", bỏ eyebrow và đoạn mô tả. */
  compact?: boolean;
}

export function LeadForm({ compact = false }: LeadFormProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: keyof typeof initialForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.hoTen.trim()) e.hoTen = "Vui lòng nhập họ tên của bạn.";
    const phone = form.soDienThoai.replace(/[\s.-]/g, "");
    if (!phone) e.soDienThoai = "Vui lòng nhập số điện thoại.";
    else if (!PHONE_RE.test(phone)) e.soDienThoai = "Số điện thoại không hợp lệ (VD: 0912345678).";
    if (!form.email.trim()) e.email = "Vui lòng nhập email.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Email không hợp lệ.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    // Bot điền vào honeypot -> giả vờ thành công, không gửi đi đâu cả.
    if (form.website.trim() !== "") {
      setStatus("success");
      return;
    }

    if (!ENDPOINT) {
      setStatus("error");
      setErrorMsg("Biểu mẫu chưa được kết nối. Vui lòng liên hệ qua Fanpage giúp mình nhé.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const payload = new URLSearchParams({
        hoTen: form.hoTen.trim(),
        soDienThoai: form.soDienThoai.replace(/[\s.-]/g, ""),
        email: form.email.trim(),
        tinhThanh: form.tinhThanh.trim(),
        ghiChu: form.ghiChu.trim(),
        trangGui: typeof window !== "undefined" ? window.location.pathname : "",
        // Gửi kèm ô bẫy bot để máy chủ tự kiểm tra thay vì chỉ tin phía trình duyệt
        website: form.website.trim(),
      });

      // no-cors: Apps Script không trả header CORS cho trình duyệt, nhưng dữ liệu
      // vẫn được ghi vào Sheet. Đổi lại ta không đọc được nội dung phản hồi.
      await fetch(ENDPOINT, { method: "POST", mode: "no-cors", body: payload });

      setStatus("success");
      setForm(initialForm);

      // Ghi nhận chuyển đổi trong Google Analytics 4.
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead", {
          form_name: "lien_he_luvia",
          page_path: window.location.pathname,
        });
      }
    } catch {
      setStatus("error");
      setErrorMsg("Không gửi được lúc này. Bạn thử lại sau ít phút hoặc liên hệ Luvia qua Fanpage nhé.");
    }
  };

  const fieldBase =
    "w-full rounded-[6px] border bg-[var(--color-panel)] px-4 py-3 text-[15px] text-[var(--color-espresso)] outline-none transition-colors placeholder:text-[var(--color-espresso-muted)]/60 focus:border-[var(--color-brand)]";

  const cls = (key: string) =>
    `${fieldBase} ${errors[key] ? "border-red-400" : "border-[var(--color-panel-border)]"}`;

  return (
    <section
      id="lien-he"
      className="py-20 md:py-24 bg-[var(--color-bg-dark)] border-t border-[var(--color-panel-border)]"
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-12" ref={ref}>
        {compact ? (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-10 text-center"
          >
            Liên hệ
          </motion.h2>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              className="editorial-eyebrow mb-4"
            >
              Liên hệ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="editorial-h2 mb-4"
            >
              Để lại thông tin, <span className="text-[var(--color-espresso-muted)]">Luvia liên hệ tư vấn</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[16px] text-[var(--color-espresso-muted)] leading-relaxed mb-10"
            >
              Bạn quan tâm đến Gương thông minh AI Luvia hoặc có thắc mắc cần giải đáp? Để lại thông tin,
              Luvia sẽ liên hệ tư vấn. Hoàn toàn miễn phí và không ràng buộc gì cả.
            </motion.p>
          </>
        )}

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[10px] border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)]/12 text-[var(--color-brand)]">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-[22px] text-[var(--color-brand)]">
              Đã nhận thông tin của bạn!
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-espresso-muted)]">
              Luvia sẽ liên hệ trong vòng 24 giờ làm việc. Cảm ơn bạn đã quan tâm.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-[12px] uppercase tracking-widest text-[var(--color-brand)] underline underline-offset-4"
            >
              Gửi thông tin khác
            </button>
          </motion.div>
        ) : (
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Honeypot: ẩn với người dùng thật, chỉ bot mới điền */}
            <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="hoTen" className="mb-2 block text-[13px] font-medium text-[var(--color-espresso)]">
                  Họ và tên <span className="text-[var(--color-brand)]">*</span>
                </label>
                <input
                  id="hoTen"
                  name="hoTen"
                  type="text"
                  autoComplete="name"
                  placeholder="Nguyễn Thị An"
                  value={form.hoTen}
                  onChange={(e) => update("hoTen", e.target.value)}
                  aria-invalid={!!errors.hoTen}
                  className={cls("hoTen")}
                />
                {errors.hoTen && <p className="mt-1.5 text-[12px] text-red-500">{errors.hoTen}</p>}
              </div>

              <div>
                <label htmlFor="soDienThoai" className="mb-2 block text-[13px] font-medium text-[var(--color-espresso)]">
                  Số điện thoại <span className="text-[var(--color-brand)]">*</span>
                </label>
                <input
                  id="soDienThoai"
                  name="soDienThoai"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0912345678"
                  value={form.soDienThoai}
                  onChange={(e) => update("soDienThoai", e.target.value)}
                  aria-invalid={!!errors.soDienThoai}
                  className={cls("soDienThoai")}
                />
                {errors.soDienThoai && (
                  <p className="mt-1.5 text-[12px] text-red-500">{errors.soDienThoai}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[var(--color-espresso)]">
                  Email <span className="text-[var(--color-brand)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="an.nguyen@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  className={cls("email")}
                />
                {errors.email && <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="tinhThanh" className="mb-2 block text-[13px] font-medium text-[var(--color-espresso)]">
                  Tỉnh / Thành phố
                </label>
                <input
                  id="tinhThanh"
                  name="tinhThanh"
                  type="text"
                  autoComplete="address-level1"
                  placeholder="TP. Hồ Chí Minh"
                  value={form.tinhThanh}
                  onChange={(e) => update("tinhThanh", e.target.value)}
                  className={cls("tinhThanh")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="ghiChu" className="mb-2 block text-[13px] font-medium text-[var(--color-espresso)]">
                Ghi chú <span className="text-[var(--color-espresso-muted)]">(không bắt buộc)</span>
              </label>
              <textarea
                id="ghiChu"
                name="ghiChu"
                rows={4}
                placeholder="Tình trạng da bạn đang quan tâm, câu hỏi cho Luvia..."
                value={form.ghiChu}
                onChange={(e) => update("ghiChu", e.target.value)}
                className={`${fieldBase} resize-y border-[var(--color-panel-border)]`}
              />
            </div>

            <label className="flex items-start gap-3 text-[13px] leading-relaxed text-[var(--color-espresso-muted)]">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-brand)]"
              />
              <span>
                Tôi đã đọc và đồng ý với{" "}
                <a href="/privacy/" className="text-[var(--color-brand)] underline underline-offset-2">
                  Chính sách bảo mật
                </a>{" "}
                của website
              </span>
            </label>

            {status === "error" && (
              <div className="flex items-start gap-3 rounded-[8px] border border-red-300 bg-red-50 p-4 text-[14px] text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {errorMsg}{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100070111910232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Nhắn Fanpage
                  </a>
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="editorial-button mt-2 w-full justify-center sm:w-fit disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> ĐANG GỬI...
                </span>
              ) : (
                <span>GỬI THÔNG TIN →</span>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
