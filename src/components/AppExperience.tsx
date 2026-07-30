import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Bluetooth, History, BellRing, LineChart } from "lucide-react";
import { Img } from "./Img";

const capabilities = [
  { icon: Bluetooth, text: "Kết nối gương qua Bluetooth / Wi-Fi, đồng bộ dữ liệu skincare theo thời gian thực." },
  { icon: History, text: "Theo dõi lịch sử thay đổi của làn da theo từng tuần, từng tháng." },
  { icon: BellRing, text: "Nhận thông báo nhắc lịch skincare mỗi ngày." },
  { icon: LineChart, text: "Lưu hồ sơ da và theo dõi hiệu quả chăm sóc theo thời gian." },
];

export function AppExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-32 bg-[var(--color-bg-dark)] border-t border-[var(--color-panel-border)]" id="app">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="editorial-eyebrow mb-4"
          >
            Ứng dụng LUVIA
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="editorial-h2 mb-6"
          >
            Trợ lý skincare cá nhân hóa <br />
            <span className="text-[var(--color-espresso-muted)]">ngay trong túi của bạn</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] text-[var(--color-espresso-muted)] leading-relaxed"
          >
            Gương LUVIA đồng bộ với ứng dụng di động qua Bluetooth/Wi-Fi, biến chiếc điện thoại của bạn thành một trợ lý skincare cá nhân hóa — lưu lại lịch sử làn da, nhắc lịch chăm sóc và theo dõi hiệu quả theo thời gian.
          </motion.p>
        </div>

        {/* App showcase: image + capabilities */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className="rounded-[8px] overflow-hidden border border-[var(--color-panel-border)] bg-[var(--color-panel)]"
          >
            <Img
              src="/images/san-pham/app-luvia.jpg"
              alt="Ứng dụng LUVIA hiển thị bảng phân tích sức khỏe làn da trên điện thoại"
              width={664}
              height={567}
              loading="lazy"
              className="w-full h-auto block"
            />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 list-none m-0 p-0"
          >
            {capabilities.map((cap, i) => (
              <li key={i} className="flex gap-4 items-start border-b border-[var(--color-panel-border)] pb-6 last:border-b-0">
                <cap.icon className="w-5 h-5 text-glow-blue shrink-0 opacity-80 mt-0.5" />
                <span className="text-[15px] text-[var(--color-espresso)] leading-relaxed">{cap.text}</span>
              </li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
}
