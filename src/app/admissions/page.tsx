"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { useLanguage } from "@/components/providers/LanguageProvider";

const timelineSteps = [
  {
    step: 1,
    title: "Tìm hiểu thông tin",
    titleEn: "Explore Programs",
    desc: "Lựa chọn khóa học ngôn ngữ hoặc chương trình trao đổi phù hợp với mục tiêu.",
    descEn: "Select the language or exchange program matching your academic goals.",
  },
  {
    step: 2,
    title: "Nộp hồ sơ trực tuyến",
    titleEn: "Submit Application",
    desc: "Điền đầy đủ thông tin vào biểu mẫu đăng ký tư vấn trực tuyến bên dưới.",
    descEn: "Fill out the online consultation and registration form below.",
  },
  {
    step: 3,
    title: "Tư vấn & Hoàn tất",
    titleEn: "Consultation & Review",
    desc: "Nhận hướng dẫn chi tiết từ chuyên viên, kiểm tra trình độ đầu vào miễn phí.",
    descEn: "Receive guidance from our counselors and take a free placement test.",
  },
  {
    step: 4,
    title: "Nhập học chính thức",
    titleEn: "Enrollment & Orientation",
    desc: "Nhận thời khóa biểu, tài liệu học tập và tham gia buổi khai giảng định hướng.",
    descEn: "Receive schedules, textbooks, and attend the orientation session.",
  },
];

const faqs = [
  {
    q: "Học viên chưa từng học tiếng Hàn có đăng ký được không?",
    a: "Hoàn toàn được. Trung tâm có các lớp vỡ lòng thiết kế riêng cho người mới bắt đầu từ bảng chữ cái Hangul.",
  },
  {
    q: "Điều kiện tham gia chương trình trao đổi sinh viên là gì?",
    a: "Sinh viên hoàn thành ít nhất 1 năm học đại học, có điểm trung bình tích lũy đạt chuẩn và năng lực ngoại ngữ tương đương TOPIK 3.",
  },
  {
    q: "Trung tâm có chính sách giảm học phí cho sinh viên HCMCOU không?",
    a: "Có. Sinh viên đang theo học tại Trường Đại học Mở TP.HCM được hưởng ưu đãi giảm 15-20% học phí tất cả các khóa học.",
  },
];

export default function AdmissionsPage() {
  const { locale, t } = useLanguage();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ bạn sớm nhất.");
      setSubmitted(false);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
    }, 400);
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={t.admissions.title}
          subtitle="Quy trình đăng ký tinh gọn, nhanh chóng và hỗ trợ tận tâm từ đội ngũ chuyên viên tuyển sinh."
        />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-heading text-2xl font-bold text-center mb-10 text-neutral-900">
            {t.admissions.timeline}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 text-center relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500 text-white flex items-center justify-center mx-auto mb-4 font-heading font-extrabold text-lg shadow-md shadow-primary-500/25">
                  {s.step}
                </div>
                <h4 className="font-heading font-bold text-base text-neutral-900 mb-2">
                  {locale === "vi" ? s.title : s.titleEn}
                </h4>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  {locale === "vi" ? s.desc : s.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-neutral-50 to-primary-50/30 border border-neutral-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-primary-500/5">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                {t.admissions.form}
              </h3>
              <p className="text-neutral-600 text-sm">
                Điền thông tin bên dưới để được chuyên viên hỗ trợ lộ trình học tập miễn phí.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label={t.admissions.fullName}
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Nguyễn Văn A"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label={t.admissions.email}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                />
                <Input
                  label={t.admissions.phone}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="0901234567"
                />
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  {t.admissions.program} <span className="text-red-500">*</span>
                </label>
                <select
                  id="program"
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white text-neutral-900 cursor-pointer"
                >
                  <option value="">-- Chọn chương trình quan tâm --</option>
                  {programs.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {locale === "vi" ? p.title : p.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <Textarea
                label={t.admissions.message}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Câu hỏi hoặc nguyện vọng cần tư vấn thêm..."
                rows={3}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full mt-4"
                disabled={submitted}
              >
                {submitted ? "Đang gửi..." : t.admissions.submit}
              </Button>
            </form>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-center mb-8 text-neutral-900">
            Câu hỏi thường gặp (FAQ)
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50"
              >
                <h4 className="font-heading font-bold text-base text-neutral-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-neutral-600 text-sm pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
