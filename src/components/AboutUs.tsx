import React from "react";
import { motion } from "motion/react";

interface ManifestoItem {
  number: string;
  title: string;
  description: string;
}

const manifestoItems: ManifestoItem[] = [
  {
    number: "I",
    title: "Nghệ thuật Chế tác Tinh xảo",
    description: "Mỗi tấm gương Luvia không chỉ là một thiết bị công nghệ mà là một tuyệt phẩm nghệ thuật nội thất thượng lưu. Lớp phủ Brushed Rose Gold mạ kim mờ kết cấu nhôm nguyên khối tôn vinh vẻ duy mỹ của không gian nghỉ ngơi."
  },
  {
    number: "II",
    title: "Trí Tuệ Nhân Tạo Y Đức (AI Ethics)",
    description: "Toàn bộ phân tích da mặt được tính toán ngoại tuyến hoàn toàn tại lõi chip nội bộ (Offline Edge AI). Dữ liệu sinh trắc học và hình ảnh cá nhân tuyệt đối không tải lên máy chủ hoặc internet, mang lại sự riêng tư tối hảo."
  },
  {
    number: "III",
    title: "Khoa học chuẩn lâm sàng",
    description: "Quy trình chăm sóc da không bao giờ được thiết lập bởi quảng cáo hay phỏng đoán, mà được quyết định dựa trên thuật toán quang phổ đa tần số và các chỉ số biểu bì chân thực dưới sự cố vấn chuyên khoa."
  }
];

export function AboutUs() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-bg-dark)] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-12">
        {/* About Hero Section */}
        <div className="mb-20 border-b border-[var(--color-panel-border)] pb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-eyebrow mb-3"
          >
            Triết lý và Hành trình LUVIA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-h2 text-[#241C1B] mb-6 !text-[42px] md:!text-[56px] leading-[1.05]"
          >
            Kiên định kiến tạo tương lai làm đẹp y học cao cấp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[17px] text-white/70 leading-relaxed max-w-[700px]"
          >
            Luvia được sáng lập bởi một tập thể gồm các bác sĩ da liễu thẩm mỹ lâm sàng và các kỹ sư trí tuệ nhân tạo hàng đầu. Chúng tôi tin tưởng sâu sắc rằng làn da không phải bài toán phỏng đoán, và thấu hiểu trạng thái sinh học cơ thể là chìa khóa mở khóa vẻ đẹp độc bản vô tận.
          </motion.p>
        </div>

        {/* Manifesto Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="editorial-label text-[var(--color-brand)] mb-12 tracking-widest text-[11px]"
          >
            Tuyên ngôn giá trị Luvia
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {manifestoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                className="relative bg-white/50 border border-[var(--color-panel-border)]/50 p-8 rounded hover:bg-white transition-all duration-300"
              >
                <div className="font-serif italic text-[#A0624C] text-[36px] font-normal leading-none mb-6">
                  {item.number}
                </div>
                <h3 className="font-display text-[20px] font-normal text-[#241C1B] mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
