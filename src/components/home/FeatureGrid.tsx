"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

const features = [
  {
    icon: "🇰🇷",
    title: "Ngôn ngữ & Văn hóa Hàn Quốc",
    titleEn: "Korean Language & Culture",
    desc: "Đào tạo tiếng Hàn từ cơ bản đến nâng cao cùng giảng viên bản ngữ, trải nghiệm K-Culture sống động.",
    descEn: "Korean language training from basic to advanced with native lecturers, vibrant K-Culture immersion.",
    href: "/programs",
    color: "from-red-50/80 to-red-100/50 border-red-200/60 text-red-950",
  },
  {
    icon: "🎯",
    title: "Luyện thi TOPIK & Kỹ năng",
    titleEn: "TOPIK Prep & Professional Skills",
    desc: "Khóa luyện thi TOPIK I & II cam kết đầu ra, tiếng Hàn thương mại và biên phiên dịch thực chiến.",
    descEn: "Intensive TOPIK I & II preparation with guaranteed outcomes, business Korean, and practical translation.",
    href: "/programs",
    color: "from-amber-50/80 to-amber-100/50 border-amber-200/60 text-amber-950",
  },
  {
    icon: "🔄",
    title: "Trao đổi & Du học Hàn Quốc",
    titleEn: "Exchange & Study in Korea",
    desc: "Chương trình trao đổi sinh viên học kỳ quốc tế, chuyển tiếp tín chỉ và học bổng toàn phần tại Hàn Quốc.",
    descEn: "Semester student exchange, credit recognition, and full scholarship opportunities in South Korea.",
    href: "/programs",
    color: "from-blue-50/80 to-blue-100/50 border-blue-200/60 text-blue-950",
  },
];

export default function FeatureGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={t.sections.features} />
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={f.href} className="block group h-full">
                <div
                  className={`rounded-3xl border bg-gradient-to-br ${f.color} p-8 h-full group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-5xl block mb-6 drop-shadow-sm">
                      {f.icon}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                      {locale === "vi" ? f.title : f.titleEn}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {locale === "vi" ? f.desc : f.descEn}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 group-hover:text-primary-800 group-hover:gap-3 transition-all pt-4 border-t border-black/5">
                    {t.programs.viewDetails} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
