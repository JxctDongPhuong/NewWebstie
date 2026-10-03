"use client";

import { ArrowLeft, Clock, CheckCircle, Award, BookOpen, UserCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import type { Program } from "@/data/programs";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProgramDetailClient({ program }: { program: Program }) {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <Button href="/programs" variant="ghost" size="sm" className="mb-8">
          <ArrowLeft className="w-4 h-4" /> {t.nav.programs}
        </Button>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main content — 8 cols */}
          <div className="lg:col-span-8">
            <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 shadow-xl p-8 flex flex-col justify-between text-white mb-8 border border-primary-400/20">
              <div className="flex justify-between items-start">
                <Badge
                  variant={
                    program.category === "korean"
                      ? "korean"
                      : program.category === "topik"
                      ? "topik"
                      : "exchange"
                  }
                  className="bg-white/90 text-neutral-900 border-none font-semibold text-xs"
                >
                  {program.category === "korean"
                    ? "🇰🇷 Tiếng Hàn"
                    : program.category === "topik"
                    ? "🎯 Luyện thi TOPIK"
                    : "🔄 Trao đổi quốc tế"}
                </Badge>
                <span className="text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                  {program.duration}
                </span>
              </div>

              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                  {locale === "vi" ? program.title : program.titleEn}
                </h1>
                <p className="text-primary-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  {locale === "vi" ? program.description : program.descriptionEn}
                </p>
              </div>
            </div>

            {/* Program Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  Tổng quan chương trình
                </h2>
                <p className="text-neutral-700 leading-relaxed text-base">
                  Chương trình được thiết kế bài bản với mục tiêu trang bị kiến
                  thức toàn diện về ngôn ngữ, văn hóa và kỹ năng giao tiếp thực tế.
                  Học viên sẽ được học tập trực tiếp cùng đội ngũ giảng viên giàu
                  kinh nghiệm và các chuyên gia bản xứ.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  Mục tiêu đào tạo
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Award,
                      title: "Năng lực ngôn ngữ chuẩn hóa",
                      desc: "Tự tin thi đạt các chứng chỉ quốc tế và giao tiếp lưu loát.",
                    },
                    {
                      icon: BookOpen,
                      title: "Kiến thức văn hóa sâu rộng",
                      desc: "Hiểu rõ phong tục, tập quán và văn hóa ứng xử trong công việc.",
                    },
                    {
                      icon: UserCheck,
                      title: "Kỹ năng làm việc thực tế",
                      desc: "Kỹ năng đàm phán, làm việc nhóm và tác phong chuyên nghiệp.",
                    },
                    {
                      icon: CheckCircle,
                      title: "Cơ hội việc làm & học bổng",
                      desc: "Kết nối việc làm tại các tập đoàn đa quốc gia và cơ hội du học.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50"
                    >
                      <item.icon className="w-6 h-6 text-primary-500 mb-2" />
                      <h3 className="font-heading font-bold text-sm text-neutral-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar — 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 sm:p-8 sticky top-24 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-6 pb-4 border-b border-neutral-200">
                Thông tin khóa học
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Thời lượng</p>
                    <p className="font-semibold text-sm text-neutral-800">
                      {program.duration}
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="font-heading font-semibold text-sm text-neutral-900 mb-3">
                Đặc quyền học viên:
              </h4>
              <ul className="space-y-2.5 mb-8">
                {program.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-neutral-700"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button href="/admissions" size="lg" className="w-full">
                Đăng ký tư vấn ngay
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
