import React from "react";
import { motion } from "motion/react";

interface ManifestoItem {
  number: string;
  title: string;
  description: string;
}

const manifestoItems: ManifestoItem[] = [
  {
    number: "01",
    title: "Nghệ thuật Chế tác & Soi da Cao cấp",
    description: "Mỗi chiếc gương cảm ứng thông minh LUVIA không chỉ là thiết bị soi da chuyên sâu hiệu quả mà còn là một tác phẩm nội thất duy mỹ. Lớp phủ Brushed Rose Gold cao cấp cùng tấm gương quang học nhập khẩu đem tới góc nhìn chân thực nhất cho không gian skincare của bạn."
  },
  {
    number: "02",
    title: "Hệ thống Phân tích Da AI Ngoại tuyến",
    description: "Được tích hợp công nghệ trí tuệ nhân tạo ngoại tuyến (Offline Edge AI), thiết bị tự động phân tích da mặt trực tiếp tại chỗ. Toàn bộ hình ảnh soi da mụn, đo độ ẩm hay đo sợi bã nhờn được xử lý độc lập trên chip an toàn, không tải lên internet nhằm bảo mật dữ liệu tuyệt đối."
  },
  {
    number: "03",
    title: "Chăm sóc da khoa học chuẩn Lâm sàng",
    description: "Hỗ trợ thiết lập quy trình skincare routine chuẩn bác sĩ da liễu. Đo đạc các chỉ số da liễu cốt lõi hàng ngày giúp bạn chọn đúng dòng kem dưỡng, serum trị mụn ẩn hay sữa rửa mặt phù hợp nhất với tình trạng da thực tế."
  }
];

export function AboutUs() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-bg-dark)] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        {/* About Hero Section (Editorial Split) */}
        <div className="mb-20 pb-16 border-b border-[var(--color-panel-border)]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-eyebrow mb-4"
          >
            Triết lý và Hành trình LUVIA
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-[36px] md:text-[52px] font-light text-[#241C1B] leading-[1.08] tracking-tight"
              >
                Kiên định kiến tạo<br />
                <span className="font-serif italic text-[#A0624C]">tương lai làm đẹp</span><br />
                y học cao cấp
              </motion.h1>
            </div>
            
            <div className="md:col-span-5 md:pt-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[15px] text-[#241C1B]/80 leading-relaxed font-sans"
              >
                LUVIA được kiến tạo từ khát vọng giải quyết triệt để các thách thức trong chăm sóc da mặt hiện đại. Bằng việc kết hợp kiến thức y học của các bác sĩ da liễu ưu tú và đội ngũ kỹ sư trí tuệ nhân tạo (AI) xuất sắc, chúng tôi mang tới dòng gương thông minh soi da và phân tích da chuyên sâu ngay tại nhà. Nhờ đó, việc đánh giá độ ẩm, bã nhờn hay điều trị mụn ẩn không còn là phỏng đoán, giúp bạn có quy trình skincare routine khoa học chuẩn xác.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section (Asymmetrical divide layout) */}
        <div className="mb-20 pb-16 border-b border-[var(--color-panel-border)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-[var(--color-panel-border)]">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A0624C] font-semibold block mb-4">01 / TẦM NHÌN</span>
                <h2 className="font-display text-[24px] md:text-[30px] font-normal text-[#241C1B] mb-5 leading-tight">
                  Tiên phong định hình tương lai <span className="font-serif italic text-[#A0624C]">Smart Living y học</span> tại gia
                </h2>
                <p className="text-[14px] text-[#241C1B]/75 leading-relaxed font-sans pr-0 md:pr-8">
                  Trở thành biểu tượng công nghệ làm đẹp và soi da cao cấp số một. Chúng tôi khát vọng đưa công nghệ phân tích da mụn và trí tuệ nhân tạo (Edge AI) bảo mật tuyệt đối kết hợp hoàn hảo cùng mỹ thuật chế tác tinh tế, giúp biến mỗi chiếc gương soi phòng tắm thành một người trợ lý y tế da liễu đáng tin cậy của gia đình bạn.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-10 md:pt-0 md:pl-16 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A0624C] font-semibold block mb-4">02 / SỨ MỆNH</span>
                <h2 className="font-display text-[24px] md:text-[30px] font-normal text-[#241C1B] mb-5 leading-tight">
                  Xóa bỏ phỏng đoán, <span className="font-serif italic text-[#A0624C]">làm chủ hành trình</span> skincare khoa học
                </h2>
                <p className="text-[14px] text-[#241C1B]/75 leading-relaxed font-sans">
                  LUVIA mang sứ mệnh tối ưu hóa thói quen chăm sóc da mặt hàng ngày với bằng chứng y sinh trực quan. Bằng việc cung cấp giải pháp soi da mụn, đo độ ẩm da và đo sợi bã nhờn liên tục, an toàn và bảo mật, chúng tôi đồng hành cùng bạn loại bỏ những sai sót trong routine skincare, tinh chỉnh routine chăm sóc mỗi sáng trở nên hoàn mỹ nhất.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Manifesto Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <span className="editorial-label text-[var(--color-brand)] tracking-widest text-[11px] block mb-2">TUYÊN NGÔN GIÁ TRỊ</span>
              <h2 className="font-display text-[28px] md:text-[36px] font-light text-[#241C1B]">Ba Trụ Cột Phát Triển Bền Vững</h2>
            </div>
            <div className="h-[1px] md:h-auto md:w-32 bg-[var(--color-panel-border)] mt-4 md:mt-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manifestoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                className="group relative bg-[#FFFFFF]/30 border border-[var(--color-panel-border)] hover:bg-[#FFFFFF]/90 hover:shadow-lg hover:shadow-[#A0624C]/5 transition-all duration-300 p-8 rounded flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-serif italic text-[#A0624C]/45 text-[24px] font-light">
                      {item.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[var(--color-panel-border)] group-hover:w-16 group-hover:bg-[#A0624C] transition-all duration-300"></span>
                  </div>
                  <h3 className="font-display text-[18px] md:text-[20px] font-normal text-[#241C1B] mb-4 group-hover:text-[#A0624C] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#241C1B]/75 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
