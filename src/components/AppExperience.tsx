import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Bluetooth, History, BellRing, LineChart } from "lucide-react";

const capabilities = [
  { icon: Bluetooth, text: "Kết nối gương qua Bluetooth / Wi-Fi, đồng bộ dữ liệu skincare theo thời gian thực." },
  { icon: History, text: "Theo dõi lịch sử thay đổi của làn da theo từng tuần, từng tháng." },
  { icon: BellRing, text: "Nhận thông báo nhắc lịch skincare mỗi ngày." },
  { icon: LineChart, text: "Lưu hồ sơ da và theo dõi hiệu quả chăm sóc theo thời gian." },
];

const steps = [
  {
    n: "01",
    img: "/images/san-pham/step-1.jpg",
    title: "Tải app & Kết nối",
    desc: "Tải ứng dụng Luvia, kết nối gương qua Bluetooth hoặc Wi-Fi và đăng nhập. Hệ thống tạo hồ sơ skincare cá nhân để lưu dữ liệu phân tích da.",
  },
  {
    n: "02",
    img: "/images/san-pham/step-2.jpg",
    title: "AI phân tích da",
    desc: "Đứng trước gương, camera và cảm biến quét khuôn mặt để đo độ ẩm, lượng dầu, sắc tố, mụn và độ nhạy cảm của da.",
  },
  {
    n: "03",
    img: "/images/san-pham/step-3.jpg",
    title: "Kết quả & Phối trộn dưỡng chất",
    desc: "Kết quả hiển thị trên gương và đồng bộ lên app. AI chọn dưỡng chất phù hợp và tự động phối trộn mặt nạ cá nhân hóa chỉ trong 90 giây.",
  },
  {
    n: "04",
    img: "/images/san-pham/step-4.jpg",
    title: "Xuất mặt nạ & Lưu dữ liệu",
    desc: "Mặt nạ được xuất ra tại khay bên dưới gương. Dữ liệu được lưu trữ an toàn trên cloud để theo dõi sự thay đổi của làn da theo thời gian.",
  },
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
            <span className="text-white/40">ngay trong túi của bạn</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] text-white/60 leading-relaxed"
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
            <img
              src="/images/san-pham/app-luvia.jpg"
              alt="Ứng dụng LUVIA hiển thị bảng phân tích sức khỏe làn da trên điện thoại"
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
                <span className="text-[15px] text-white/80 leading-relaxed">{cap.text}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Usage flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="editorial-eyebrow mb-3"
        >
          Quy trình sử dụng
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="editorial-h2 !text-3xl mb-12"
        >
          Từ điện thoại đến mặt nạ cá nhân hóa <span className="text-white/40">trong 4 bước</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-panel)] border border-[var(--color-panel-border)] rounded-[8px] overflow-hidden flex flex-col"
            >
              <img
                src={step.img}
                alt={`Bước ${step.n}: ${step.title}`}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover border-b border-[var(--color-panel-border)]"
              />
              <div className="p-6 md:p-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[14px] font-bold text-[var(--color-brand)]">{step.n}</span>
                  <h4 className="text-[16px] font-bold text-white uppercase tracking-wide">{step.title}</h4>
                </div>
                <p className="text-[14px] leading-relaxed text-white/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
