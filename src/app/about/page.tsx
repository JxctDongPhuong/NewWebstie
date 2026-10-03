"use client";

import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Award, Users, Globe2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={t.about.title}
          subtitle="Cầu nối giáo dục, giao lưu văn hóa và phát triển nguồn nhân lực chất lượng cao giữa Việt Nam và Hàn Quốc."
        />

        {/* Intro */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Trung Tâm Việt - Hàn là đơn vị trực thuộc Trường Đại học Mở
            TP.HCM, có sứ mệnh đẩy mạnh hợp tác quốc tế, đào tạo ngôn ngữ và giao
            lưu văn hóa song phương giữa hai quốc gia.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: t.about.mission,
              text: "Xây dựng cầu nối văn hóa và giáo dục bền vững giữa Việt Nam và Hàn Quốc. Đào tạo nguồn nhân lực trẻ tài năng, am hiểu văn hóa và thành thạo tiếng Hàn.",
            },
            {
              icon: Eye,
              title: t.about.vision,
              text: "Trở thành trung tâm kiểu mẫu hàng đầu khu vực phía Nam về nghiên cứu, giao lưu văn hóa và liên kết đào tạo quốc tế với các trường đại học hàng đầu tại Hàn Quốc.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-neutral-900">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Award,
              title: "Chứng nhận chuẩn quốc tế",
              desc: "Giáo trình cập nhật theo khung năng lực chuẩn TOPIK và chuẩn quốc tế.",
            },
            {
              icon: Users,
              title: "Giảng viên giàu kinh nghiệm",
              desc: "100% giảng viên đạt trình độ thạc sĩ trở lên cùng chuyên gia bản xứ.",
            },
            {
              icon: Globe2,
              title: "Mạng lưới đối tác rộng lớn",
              desc: "Hợp tác chặt chẽ với các trường đại học công lập hàng đầu tại Seoul và Busan.",
            },
          ].map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-neutral-100 bg-white shadow-sm hover:border-primary-200 transition-colors"
            >
              <h.icon className="w-8 h-8 text-primary-500 mb-3" />
              <h4 className="font-heading font-bold text-base text-neutral-900 mb-2">
                {h.title}
              </h4>
              <p className="text-neutral-600 text-sm">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* History / Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50/50 rounded-3xl p-8 md:p-12 border border-primary-100"
        >
          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7 text-primary-600" />
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
            {t.about.history}
          </h3>
          <div className="text-neutral-700 leading-relaxed space-y-4 text-base">
            <p>
              Được thành lập trong khuôn khổ chiến lược quốc tế hóa giáo dục của
              Trường Đại học Mở TP.HCM, Trung Tâm Việt - Hàn đã từng bước phát
              triển và trở thành điểm tựa văn hóa vững chắc cho hàng nghìn sinh
              viên và học viên mỗi năm.
            </p>
            <p>
              Trung tâm liên tục mở rộng các chương trình học bổng, diễn đàn khoa
              học, ngày hội giao lưu văn hóa và các chuyến trao đổi học thuật thực
              tế, tạo điều kiện thuận lợi nhất để học viên tiếp cận và hội nhập
              toàn cầu.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
