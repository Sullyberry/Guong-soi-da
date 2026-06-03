import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const faqs = [
  {
    q: "Gương có hoạt động với thiết bị Android không?",
    a: "Có, AI Smart Skin Mirror đi kèm với ứng dụng đồng hành hỗ trợ cả iOS và Android, đồng bộ hoá dữ liệu theo thời gian thực."
  },
  {
    q: "Việc quét da có an toàn cho mắt không?",
    a: "Hoàn toàn an toàn. Chúng tôi sử dụng dải ánh sáng quang phổ rộng và hồng ngoại công suất cực thấp, được FDA kiểm duyệt không gây rủi ro cho mắt hoặc da."
  },
  {
    q: "Sau bao lâu tôi có thể thấy kết quả thay đổi từ routine?",
    a: "Ứng dụng sẽ bắt đầu vẽ biểu đồ tiến triển của bạn sau 7 ngày. Tuy nhiên, một chu kỳ da tự nhiên kéo dài 28 ngày, đó là lúc AI sẽ đưa ra đánh giá toàn trình."
  },
  {
    q: "Tôi có thể mua sản phẩm qua đâu ngoài app?",
    a: "Hệ thống AI không ép bạn phải nạp tiền hay mua hãng cụ thể. Nó sẽ phân tích thành phần hóa học (ví dụ: cần Niacinamide 5%) và bạn hoàn toàn có thể mua ở bất kì đâu."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 max-w-[800px] mx-auto px-12">
      <h2 className="editorial-h2 text-center mb-16">Những câu hỏi thường gặp</h2>
      <div className="border-t border-[var(--color-panel-border)]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[var(--color-panel-border)]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left py-8 flex justify-between items-center group cursor-pointer"
            >
              <span className="text-[18px] font-medium pr-8 group-hover:text-glow-blue transition-colors duration-300">{faq.q}</span>
              <ChevronDown className={cn("w-5 h-5 text-white/40 transition-transform duration-300", openIndex === i ? "rotate-180 text-glow-blue" : "")} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pb-8 text-[15px] leading-relaxed text-white/60 overflow-hidden"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
