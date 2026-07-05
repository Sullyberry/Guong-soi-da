import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Frame, FlaskConical, Layers, Cable, BookOpen, Smartphone } from "lucide-react";

const boxItems = [
  { icon: Frame, label: "Gương thông minh LUVIA" },
  { icon: FlaskConical, label: "Bộ 6 tinh chất serum" },
  { icon: Layers, label: "Khay xuất mặt nạ" },
  { icon: Cable, label: "Cáp nguồn & Adapter" },
  { icon: BookOpen, label: "Sách hướng dẫn sử dụng" },
  { icon: Smartphone, label: "Tài khoản App LUVIA" },
];

const compare = [
  { c: "Chi phí", luvia: "Trả một lần, dùng lâu dài", other: "Tốn phí mỗi lần soi da" },
  { c: "Tần suất theo dõi", luvia: "Mỗi ngày, bất cứ lúc nào", other: "Chỉ khi tới clinic" },
  { c: "Sự tiện lợi", luvia: "Ngay tại nhà, chỉ 90 giây", other: "Phải di chuyển, chờ đợi" },
  { c: "Cá nhân hóa", luvia: "Mặt nạ phối riêng theo da", other: "Sản phẩm đại trà" },
  { c: "Riêng tư dữ liệu", luvia: "Xử lý tại chỗ, bảo mật", other: "Chia sẻ với bên thứ ba" },
];

export function ProductValue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-deep)]" id="value">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Trong hộp có gì */}
        <div className="mb-20">
          <div className="editorial-eyebrow mb-3">Trọn bộ trải nghiệm</div>
          <h2 className="editorial-h2 mb-10">Trong hộp có gì?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {boxItems.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 md:p-6 bg-[var(--color-panel)] border border-[var(--color-panel-border)] rounded-[8px]"
              >
                <it.icon className="w-6 h-6 text-[var(--color-brand)] shrink-0" />
                <span className="text-[14px] md:text-[15px] font-medium text-[var(--color-espresso)]">{it.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* So sánh */}
        <div>
          <div className="editorial-eyebrow mb-3">Vì sao chọn LUVIA</div>
          <h2 className="editorial-h2 mb-10">
            Soi da tại nhà <span className="text-[var(--color-espresso-muted)]">vs. đi spa / clinic</span>
          </h2>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-panel-border)]">
                  <th className="py-4 pr-4 text-[12px] uppercase tracking-widest text-[var(--color-espresso-muted)] font-medium">Tiêu chí</th>
                  <th className="py-4 px-4 text-[13px] uppercase tracking-wide font-bold text-[var(--color-brand)]">LUVIA tại nhà</th>
                  <th className="py-4 pl-4 text-[13px] uppercase tracking-wide font-medium text-[var(--color-espresso-muted)]">Đi spa / clinic</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="border-b border-[var(--color-panel-border)]/60"
                  >
                    <td className="py-4 pr-4 text-[13px] font-medium text-[var(--color-espresso)]">{r.c}</td>
                    <td className="py-4 px-4 text-[14px] text-[var(--color-espresso)]">{r.luvia}</td>
                    <td className="py-4 pl-4 text-[14px] text-[var(--color-espresso-muted)]">{r.other}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
